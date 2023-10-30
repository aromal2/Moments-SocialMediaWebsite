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
exports.chatHelper = void 0;
const chatModel_1 = __importDefault(require("../models/chatModel"));
const mongoose_1 = __importDefault(require("mongoose"));
const messageModel_1 = __importDefault(require("../models/messageModel"));
const chatHelper = () => {
    const createChat = (userId, chattinguserId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userID = new mongoose_1.default.Types.ObjectId(userId);
            const chattinguserID = new mongoose_1.default.Types.ObjectId(chattinguserId);
            const chatExists = yield chatModel_1.default.find({ members: { $all: [userID, chattinguserID] } });
            console.log(chatExists, "chatexists");
            if (chatExists.length) {
                const messages = yield messageModel_1.default.aggregate([
                    {
                        '$match': {
                            'chatId': new mongoose_1.default.Types.ObjectId(chatExists[0]._id)
                        }
                    }, {
                        '$sort': {
                            'createdAt': 1
                        }
                    }, {
                        '$project': {
                            'message': 1,
                            'createdAt': 1,
                            'userId': 1
                        }
                    }
                ]);
                console.log(messages, "7777777");
                return { chatId: chatExists[0]._id, messages };
            }
            else {
                const newChat = new chatModel_1.default({
                    members: [userID, chattinguserID]
                });
                const chatId = yield newChat.save();
                return { chatId, messages: [] };
            }
        }
        catch (error) {
            console.log(error);
        }
    });
    const userChat = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const chat = yield chatModel_1.default.find({
                members: { $in: [userId] }
            });
            return chat;
        }
        catch (error) {
            console.log(error);
        }
    });
    const findChat = (firstId, secondId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const chat = yield chatModel_1.default.findOne({
                members: { $all: [firstId, secondId] }
            });
            return chat;
        }
        catch (error) {
            console.log(error);
        }
    });
    return {
        createChat,
        userChat,
        findChat
    };
};
exports.chatHelper = chatHelper;
