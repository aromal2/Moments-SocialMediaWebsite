"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userModel_1 = __importDefault(require("./userModel"));
const postSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: userModel_1.default
    },
    userName: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
    },
    imgVideoURL: {
        type: String,
    },
    isBlocked: {
        type: Boolean,
    },
    liked: [],
    reports: [],
}, { timestamps: true });
const Post = (0, mongoose_1.model)("Post", postSchema);
exports.default = Post;
