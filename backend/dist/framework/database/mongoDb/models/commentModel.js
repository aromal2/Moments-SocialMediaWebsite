"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postModel_1 = __importDefault(require("./postModel"));
const commentSchema = new mongoose_1.Schema({
    postId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: postModel_1.default
    },
    userName: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId
    },
    listed: {
        type: Boolean,
        default: true
    },
    comment: {
        type: String,
        required: true
    },
    profilePhoto: {
        type: String
    },
    liked: [],
    reply: []
}, { timestamps: true });
const Comment = (0, mongoose_1.model)("Comment", commentSchema);
exports.default = Comment;
