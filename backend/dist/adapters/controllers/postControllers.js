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
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const post_1 = require("../../application/useCases/post");
const postControllers = (postInterface, postHelper) => {
    const postMain = postInterface(postHelper());
    const addPost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        const cloudinaryPost = (_b = (_a = req === null || req === void 0 ? void 0 : req.file) === null || _a === void 0 ? void 0 : _a.path) === null || _b === void 0 ? void 0 : _b.split("/post-")[1];
        const postResponse = yield (0, post_1.addNewPost)(req.body.userName, req.body.caption, req.body.userid, cloudinaryPost, postMain);
        res.json(postResponse);
    }));
    const likePost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let userName = req.body.userName;
        let postid = req.body.postId;
        const response = yield (0, post_1.likeonePost)(postid, userName, postMain);
        res.json(response);
    }));
    const unlikePost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let userName = req.body.userName;
        let postId = req.body.postId;
        const response = (0, post_1.unlikeonePost)(postId, userName, postMain);
        res.json(response);
    }));
    const reportPost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, post_1.reportPosts)(req.body.postId, req.body.postedUsername, req.body.userId, req.body.selectedOption, postMain);
        console.log(response, "777777777777777777");
        res.json(response);
    }));
    const singleUserpost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, post_1.singleuserPost)(req.params.userId, postMain);
        res.json(response);
    }));
    const deletepost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(req.params, "deletepost");
        const response = yield (0, post_1.deletePost)(req.params.postId, postMain);
        res.json(response);
    }));
    const addComment = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, post_1.addComments)(req.body.postId, req.body.userId, req.body.userName, req.body.comment, req.body.commented, req.body.commentId, postMain);
        res.json(response);
    }));
    const getComment = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, post_1.getComments)(req.body.postId, postMain);
        console.log(response, "999999999999999");
        res.json(response);
    }));
    const commentSize = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, post_1.commentsSize)(req.body.postId, postMain);
        res.json(response);
    }));
    const deleteComment = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(req.body.commentId, "0000000uuuu0000000000");
        const response = yield (0, post_1.deleteComments)(req.body.commentId, postMain);
        res.json(response);
    }));
    const editComment = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, post_1.editComments)(req.body.commentId, req.body.comment, postMain);
        res.json(response);
    }));
    return {
        addPost,
        likePost,
        unlikePost,
        reportPost,
        singleUserpost,
        deletepost,
        addComment,
        getComment,
        commentSize,
        deleteComment,
        editComment,
    };
};
exports.default = postControllers;
