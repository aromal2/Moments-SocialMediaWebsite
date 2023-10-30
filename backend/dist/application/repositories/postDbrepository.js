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
Object.defineProperty(exports, "__esModule", { value: true });
exports.postDbrepository = void 0;
const postDbrepository = (repository) => {
    const addPost = (post) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.addPost(post);
    });
    const likePost = (postId, username) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.likePost(postId, username);
    });
    const unlikePost = (postId, reason) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.unlikePost(postId, reason);
    });
    const reportPost = (postId, postedUsername, userId, selectedOption) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.reportPost(postId, postedUsername, userId, selectedOption);
    });
    const singleuserPost = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.singleuserPost(userId);
    });
    const deletePost = (postId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.deletePost(postId);
    });
    const addComment = (postId, userId, userName, comment, commented, commentId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.addComment(postId, userId, userName, comment, commented, commentId);
    });
    const getComment = (postId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.getComment(postId);
    });
    const commentSize = (postId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.commentSize(postId);
    });
    const deleteComment = (commentId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.deleteComments(commentId);
    });
    const editComment = (commentId, comment) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.editComments(commentId, comment);
    });
    return {
        addPost,
        likePost,
        unlikePost,
        reportPost,
        singleuserPost,
        deletePost,
        addComment,
        getComment,
        commentSize,
        deleteComment,
        editComment
    };
};
exports.postDbrepository = postDbrepository;
