"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageHelper = void 0;
const messageModel_1 = __importDefault(require("../models/messageModel"));
const mongoose_1 = __importDefault(require("mongoose"));
const messageHelper = () => {
    const addMessages = (chatterId, userId, secondId, message) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log(chatterId, userId, secondId, message, "fixxxxxxx");
            if (chatterId) {
                const newMessage = new messageModel_1.default({
                    chatId: chatterId,
                    userId: userId,
                    message: message
                });
                const result = yield newMessage.save();
                console.log(result, "nnnnnnnnnnnnnnnn");
                return result;
            }
        }
        catch (error) {
            console.log(error);
        }
    });
    const getAllChats = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userID = new mongoose_1.default.Types.ObjectId(userId);
            return yield messageModel_1.default.aggregate([
                {
                    $project: {
                        chatId: 1,
                        createdAt: 1
                    }
                },
                {
                    $group: {
                        _id: "$chatId",
                        createdAt: {
                            $last: "$createdAt",
                        }
                    }
                },
                {
                    $sort: {
                        createdAt: -1
                    }
                },
                {
                    $addFields: {
                        chatId: {
                            $toObjectId: "$_id"
                        }
                    }
                },
                {
                    $lookup: {
                        from: "chats",
                        localField: "chatId",
                        foreignField: "_id",
                        as: "result"
                    }
                },
                {
                    $unwind: {
                        path: "$result"
                    }
                },
                {
                    $match: {
                        "result.members": {
                            $in: [
                                userID
                            ]
                        }
                    }
                },
                {
                    $unwind: {
                        path: "$result.members"
                    }
                },
                {
                    $match: {
                        "result.members": {
                            $ne: userID,
                        }
                    }
                },
                {
                    $lookup: {
                        from: "users",
                        localField: "result.members",
                        foreignField: "_id",
                        as: "result"
                    }
                },
                {
                    $unwind: {
                        path: "$result"
                    }
                },
                {
                    $project: {
                        chatId: "$_id",
                        userName: "$result.userName",
                        firstName: "$result.firstName",
                        lastName: "$result.lastName",
                        profilePic: "$result.profilePic",
                        createdAt: 1,
                        _id: "$result._id"
                    }
                }
            ]);
        }
        catch (error) {
            console.log(error);
        }
    });
    const getChatlist = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield messageModel_1.default.aggregate([
                {
                    '$group': {
                        '_id': '$chatId',
                        'createTime': {
                            '$last': '$createdAt'
                        }
                    }
                }, {
                    '$sort': {
                        'createTime': -1
                    }
                }, {
                    '$lookup': {
                        'from': 'chats',
                        'localField': '_id',
                        'foreignField': '_id',
                        'as': 'result'
                    }
                }, {
                    '$unwind': {
                        'path': '$result'
                    }
                }, {
                    '$match': {
                        'result.members': {
                            '$in': [
                                new mongoose_1.default.Types.ObjectId(userId)
                            ]
                        }
                    }
                }, {
                    '$unwind': {
                        'path': '$result.members'
                    }
                }, {
                    '$match': {
                        'result.members': {
                            '$ne': new mongoose_1.default.Types.ObjectId(userId)
                        }
                    }
                }, {
                    '$lookup': {
                        'from': 'users',
                        'localField': 'result.members',
                        'foreignField': '_id',
                        'as': 'result'
                    }
                }, {
                    '$unwind': {
                        'path': '$result'
                    }
                }, {
                    '$project': {
                        'userName': '$result.userName',
                        'profilePic': '$result.profilePic',
                        'createTime': 1,
                        'chatId': '$_id',
                        '_id': '$result._id'
                    }
                }
            ]);
        }
        catch (error) {
            console.log(error);
        }
    });
    const getMessage = (chatId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const messages = yield messageModel_1.default.find({ chatId }).sort({ createdAt: 1 });
            if (messages) {
                return messages;
            }
        }
        catch (error) {
            console.log(error);
        }
    });
    return {
        addMessages,
        getAllChats,
        getChatlist,
        getMessage
    };
};
exports.messageHelper = messageHelper;
