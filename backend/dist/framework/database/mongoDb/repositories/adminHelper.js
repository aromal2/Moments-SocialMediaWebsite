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
exports.adminHelper = void 0;
const adminModel_1 = __importDefault(require("../models/adminModel"));
const userModel_1 = __importDefault(require("../models/userModel"));
const postModel_1 = __importDefault(require("../models/postModel"));
const adminHelper = () => {
    const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
        return yield adminModel_1.default.findOne({ email });
    });
    const getUserlist = () => __awaiter(void 0, void 0, void 0, function* () {
        return yield userModel_1.default.find().sort({ createdAt: 1 });
    });
    const blockuser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(userId, "5555555555555555555");
        return yield userModel_1.default.updateOne({ _id: userId }, { isBlock: false }); // Use true without quotes for a boolean value
    });
    const unblockuser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(userId, "unblockkkkk");
        return yield userModel_1.default.updateOne({ _id: userId }, { isBlock: true }); // Use true without quotes for a boolean value
    });
    const genderdetail = () => __awaiter(void 0, void 0, void 0, function* () {
        return yield userModel_1.default.aggregate([
            {
                '$group': {
                    '_id': '$gender',
                    'count': {
                        '$sum': 1
                    }
                }
            }
        ]);
    });
    const agedetail = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield userModel_1.default.aggregate([
                {
                    '$facet': {
                        'agelessthan18': [
                            {
                                '$match': {
                                    'age': {
                                        '$lte': 18
                                    }
                                }
                            }
                        ],
                        'age18and25': [
                            {
                                '$match': {
                                    'age': {
                                        '$gte': 18,
                                        '$lte': 25
                                    }
                                }
                            }
                        ],
                        'ageabove25': [
                            {
                                '$match': {
                                    'age': {
                                        '$gte': 25
                                    }
                                }
                            }
                        ]
                    }
                },
                {
                    '$project': {
                        'agelessthan18': {
                            '$size': '$agelessthan18'
                        },
                        'age18and25': {
                            '$size': '$age18and25'
                        },
                        'ageabove25': {
                            '$size': '$ageabove25'
                        }
                    }
                }
            ]);
        }
        catch (error) {
            console.error(error);
            throw error;
        }
        //   console.log(userId,"unblockkkkk");
        //   return await User.updateOne({ _id: userId }, { isBlock: true }); // Use true without quotes for a boolean value
    });
    const totalpost = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield postModel_1.default.aggregate([
                {
                    $group: {
                        _id: null,
                        count: {
                            $sum: 1
                        }
                    }
                }
            ]);
        }
        catch (error) {
            console.error("Error aggregating documents:", error);
            throw error;
        }
    });
    const reportpost = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield postModel_1.default.aggregate([
                {
                    '$project': {
                        'userName': 1,
                        'imgVideoURL': 1,
                        'likelength': {
                            '$size': '$liked'
                        },
                        'reportsLength': {
                            '$size': '$reports'
                        }
                    }
                }
            ]);
        }
        catch (error) {
            console.log(error);
        }
    });
    return {
        getUserByEmail,
        getUserlist,
        blockuser,
        unblockuser,
        genderdetail,
        agedetail,
        totalpost,
        reportpost
    };
};
exports.adminHelper = adminHelper;
