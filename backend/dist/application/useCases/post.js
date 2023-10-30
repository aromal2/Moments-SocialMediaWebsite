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
exports.editComments = exports.deleteComments = exports.commentsSize = exports.getComments = exports.addComments = exports.deletePost = exports.singleuserPost = exports.reportPosts = exports.unlikeonePost = exports.likeonePost = exports.addNewPost = void 0;
function addNewPost(userName, caption, userId, imgVideoURL, postRepository) {
    return __awaiter(this, void 0, void 0, function* () {
        const post = {
            userName,
            caption,
            imgVideoURL,
            userId,
        };
        const data = yield postRepository.addPost(post);
        if (data)
            return data;
    });
}
exports.addNewPost = addNewPost;
function likeonePost(postId, username, postRepository) {
    return __awaiter(this, void 0, void 0, function* () {
        const likeddata = yield postRepository.likePost(postId, username);
        if (likeddata)
            return likeddata;
    });
}
exports.likeonePost = likeonePost;
const unlikeonePost = (postId, username, postRepository) => __awaiter(void 0, void 0, void 0, function* () {
    const unlikeddata = yield postRepository.unlikePost(postId, username);
    if (unlikeddata)
        return unlikeddata;
});
exports.unlikeonePost = unlikeonePost;
const reportPosts = (postId, postedUsername, userId, selectedOption, postRepository) => __awaiter(void 0, void 0, void 0, function* () {
    const reportdata = yield postRepository.reportPost(postId, postedUsername, userId, selectedOption);
    if (reportdata)
        return reportdata;
});
exports.reportPosts = reportPosts;
const singleuserPost = (userId, postRepository) => __awaiter(void 0, void 0, void 0, function* () {
    const getOnedata = yield postRepository.singleuserPost(userId);
    if (getOnedata)
        return getOnedata;
});
exports.singleuserPost = singleuserPost;
const deletePost = (postId, postRepository) => __awaiter(void 0, void 0, void 0, function* () {
    const deletePost = yield postRepository.deletePost(postId);
    if (deletePost)
        return deletePost;
    console.log(deletePost, "usecasedel");
});
exports.deletePost = deletePost;
const addComments = (postId, userId, userName, comment, commented, commentId, postRepository) => __awaiter(void 0, void 0, void 0, function* () {
    const addComment = yield postRepository.addComment(postId, userId, userName, comment, commented, commentId);
    if (addComment)
        return addComment;
});
exports.addComments = addComments;
const getComments = (postId, postRepository) => __awaiter(void 0, void 0, void 0, function* () {
    const getComment = yield postRepository.getComment(postId);
    if (getComment)
        return getComment;
});
exports.getComments = getComments;
const commentsSize = (postId, postRepository) => __awaiter(void 0, void 0, void 0, function* () {
    const commentSize = yield postRepository.commentSize(postId);
    if (commentSize)
        return commentSize;
});
exports.commentsSize = commentsSize;
const deleteComments = (commentId, postRepository) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteComment = yield postRepository.deleteComment(commentId);
    if (deleteComment)
        return deleteComment;
});
exports.deleteComments = deleteComments;
const editComments = (commentId, comment, postRepository) => __awaiter(void 0, void 0, void 0, function* () {
    const editCommented = yield postRepository.editComment(commentId, comment);
    if (editCommented)
        return editCommented;
});
exports.editComments = editComments;
