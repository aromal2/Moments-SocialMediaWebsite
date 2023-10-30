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
exports.postHelper = void 0;
const postModel_1 = __importDefault(require("../models/postModel"));
const commentModel_1 = __importDefault(require("../models/commentModel"));
const mongoose_1 = __importDefault(require("mongoose"));
const postHelper = () => {
    const addPost = (post) => __awaiter(void 0, void 0, void 0, function* () {
        // const userID=new mongoose.Types.ObjectId(post.userId)
        //   post.userId = userID
        const newPost = new postModel_1.default(post);
        return yield newPost.save();
    });
    const likePost = (postId, userName) => __awaiter(void 0, void 0, void 0, function* () {
        return yield postModel_1.default.updateOne({ _id: postId }, { $addToSet: { liked: userName } });
    });
    const unlikePost = (postId, userName) => __awaiter(void 0, void 0, void 0, function* () {
        return yield postModel_1.default.updateOne({ _id: postId }, { $pull: { liked: userName } });
    });
    const reportPost = (postId, postedUsername, userId, selectedOption) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(userId, "888888888888888");
        return yield postModel_1.default.updateOne({ _id: postId }, { $addToSet: { reports: { postedUsername, userId, selectedOption } } });
    });
    const singleuserPost = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const singleuser = yield postModel_1.default.find({ userId: userId }).sort({ createdAt: -1 });
            if (singleuser) {
                return singleuser;
            }
            else {
                return [];
            }
        }
        catch (error) {
            console.log(error);
        }
    });
    const deletePost = (postId) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(postId, "221111111111111111");
        const postID = new mongoose_1.default.Types.ObjectId(postId.toString());
        return yield postModel_1.default.deleteOne({ _id: postID });
    });
    const addComment = (postId, userId, userName, comment, commented, commentId) => __awaiter(void 0, void 0, void 0, function* () {
        if (commentId === null || commentId === void 0 ? void 0 : commentId.length) {
            // const comments=comment.replace(`@${replyToUser}`,'')
            const replyComment = {
                _id: new mongoose_1.default.Types.ObjectId(),
                comment,
                commented,
                liked: [],
                listed: true,
                createdAt: new Date()
            };
            console.log(replyComment, "reply");
            return yield commentModel_1.default.updateOne({ _id: commentId }, { $push: { reply: replyComment } });
        }
        else {
            const newComments = new commentModel_1.default({ postId, userName, userId, comment });
            console.log(newComments, "00000000000000000/");
            return yield newComments.save();
        }
    });
    const getComment = (postId) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(typeof postId, "llllllllllllllllllhewopllllll");
        const postID = new mongoose_1.default.Types.ObjectId(postId);
        return yield commentModel_1.default.aggregate([
            {
                '$match': {
                    'postId': postID
                }
            },
            {
                '$lookup': {
                    'from': 'users',
                    'localField': 'userId',
                    'foreignField': '_id',
                    'as': 'result'
                }
            }, {
                '$unwind': {
                    'path': '$result'
                }
            }, {
                '$project': {
                    'profilepic': '$result.profilePic',
                    'comment': 1,
                    'userName': 1,
                    'reply': 1,
                    'liked': 1
                }
            }
        ]);
    });
    const commentSize = (postId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield commentModel_1.default.find({ postId: postId });
    });
    const deleteComments = (commentId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield commentModel_1.default.deleteOne({ _id: new mongoose_1.default.Types.ObjectId(commentId) });
        }
        catch (error) {
            console.error("Error deleting comment:", error);
        }
    });
    const editComments = (commentId, comment) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield commentModel_1.default.updateOne({ _id: new mongoose_1.default.Types.ObjectId(commentId) }, { comment: comment });
        }
        catch (error) {
            console.log(error);
        }
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
        deleteComments,
        editComments
    };
};
exports.postHelper = postHelper;
