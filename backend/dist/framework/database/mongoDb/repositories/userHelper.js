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
exports.userHelper = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const verifyProfileModel_1 = __importDefault(require("../models/verifyProfileModel"));
const mongoose_1 = __importDefault(require("mongoose"));
const userHelper = () => {
    const addUser = (addedUser) => __awaiter(void 0, void 0, void 0, function* () {
        const newUser = new userModel_1.default(addedUser);
        return yield newUser.save();
    });
    const googleaddUser = (addedUser) => __awaiter(void 0, void 0, void 0, function* () {
        const newUser = new userModel_1.default(addedUser);
        return yield newUser.save();
    });
    const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
        return yield userModel_1.default.findOne({ email });
    });
    const getUserByUserName = (userName) => __awaiter(void 0, void 0, void 0, function* () {
        return yield userModel_1.default.findOne({ userName });
    });
    const getUserByMobile = (mobile) => __awaiter(void 0, void 0, void 0, function* () {
        return yield userModel_1.default.findOne({ mobile });
    });
    const getUserByNameMailMobile = (userData) => __awaiter(void 0, void 0, void 0, function* () {
        return yield userModel_1.default.findOne({
            $or: [{ userName: userData }, { email: userData }, { mobile: userData }],
        });
    });
    const getAlluser = () => __awaiter(void 0, void 0, void 0, function* () {
        return yield userModel_1.default.aggregate([{
                $project: {
                    _id: 1,
                    userName: 1
                }
            }
        ]);
    });
    const getAllposts = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(userId, "0000000000000000l");
        try {
            const getallposts = yield userModel_1.default.aggregate([
                {
                    $match: {
                        _id: new mongoose_1.default.Types.ObjectId(userId)
                    }
                },
                {
                    $unwind: {
                        path: "$following"
                    }
                },
                {
                    $addFields: {
                        followingId: {
                            "$toObjectId": "$following"
                        }
                    }
                },
                {
                    $lookup: {
                        from: 'posts',
                        localField: 'followingId',
                        foreignField: 'userId',
                        as: 'result'
                    }
                },
                {
                    $unwind: {
                        path: '$result'
                    }
                },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'result.userId',
                        foreignField: '_id',
                        as: 'postprofile'
                    }
                }, {
                    $unwind: {
                        'path': '$postprofile'
                    }
                },
                {
                    $project: {
                        imgVideoURL: '$result.imgVideoURL',
                        caption: '$result.caption',
                        postedUsername: '$result.userName',
                        liked: '$result.liked',
                        posteduserpic: '$postprofile.profilePic',
                        postcreatedAt: '$postprofile.createdAt',
                        postId: '$result._id'
                    }
                }, {
                    $sort: {
                        postcreatedAt: -1
                    }
                }
            ]);
            console.log(getallposts, "88888888888888555555555555");
            if (getallposts) {
                return getallposts;
            }
            else {
                return [];
            }
        }
        catch (error) {
            console.log(error);
        }
    });
    const followPost = (userId, auserId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log(auserId, "555555555555555555");
            const [updateUser, updateAuser] = yield Promise.all([
                userModel_1.default.updateOne({ _id: userId }, { $addToSet: { following: auserId } }),
                userModel_1.default.updateOne({ _id: auserId }, { $addToSet: { followers: userId } })
            ]);
            return { updateUser, updateAuser };
            //  return {updateUser,updateAuser}
        }
        catch (error) {
            console.error("Error:", error);
        }
    });
    const unfollowPost = (userId, auserId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const [unfollowUser, unfollowAuser] = yield Promise.all([
                userModel_1.default.updateOne({ _id: userId }, { $pull: { following: auserId } }),
                userModel_1.default.updateOne({ _id: auserId }, { $pull: { followers: userId } })
            ]);
            return { unfollowUser, unfollowAuser };
        }
        catch (error) {
            console.log(error);
        }
    });
    const getOneuser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userID = new mongoose_1.default.Types.ObjectId(userId);
            return yield userModel_1.default.find({ _id: userID });
        }
        catch (error) {
            console.log(error, "getoneuser");
        }
    });
    const savedPost = (userId, postId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userID = new mongoose_1.default.Types.ObjectId(userId);
            const postID = new mongoose_1.default.Types.ObjectId(postId); // Convert postId to ObjectId
            const savedPost = yield userModel_1.default.updateOne({ _id: userID }, { $addToSet: { saved: postID } } // Use postID as an ObjectId
            );
            if (savedPost) {
                return savedPost;
            }
            else {
                return [];
            }
        }
        catch (error) {
            console.error(error);
        }
    });
    const unsavedPost = (userId, postId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userID = new mongoose_1.default.Types.ObjectId(userId);
            const postID = new mongoose_1.default.Types.ObjectId(postId);
            return yield userModel_1.default.updateOne({ _id: userID }, { $pull: { saved: postID } });
        }
        catch (error) {
            console.log(error);
        }
    });
    const getSavedpost = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const savedPosts = yield userModel_1.default.aggregate([
                {
                    $match: { _id: new mongoose_1.default.Types.ObjectId(userId) }
                },
                {
                    $unwind: {
                        path: "$saved"
                    }
                },
                {
                    $lookup: {
                        from: "posts",
                        localField: "saved",
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
                        image: "$result.imgVideoURL",
                        caption: "$result. caption"
                    }
                }
            ]);
            return savedPosts;
        }
        catch (error) {
            console.error(error);
        }
    });
    const editProfile = (userid, bio, gender, profilePic) => __awaiter(void 0, void 0, void 0, function* () {
        const updateData = {
            profilePic: profilePic,
            bio: bio,
            gender: gender,
        };
        console.log(updateData, "5555555555555511122222222222helperr");
        try {
            return yield userModel_1.default.findOneAndUpdate({ _id: userid }, updateData, { new: true });
        }
        catch (error) {
            console.error('Error updating profile:', error);
            throw error; // Handle the error as needed
        }
    });
    const followerDetails = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const follower = yield userModel_1.default.aggregate([
                {
                    $match: {
                        _id: new mongoose_1.default.Types.ObjectId(userId),
                    },
                },
                {
                    $unwind: {
                        path: '$followers',
                    },
                },
                {
                    $addFields: {
                        followersId: {
                            "$toObjectId": "$followers"
                        }
                    }
                },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'followersId',
                        foreignField: '_id',
                        as: 'result',
                    },
                },
                {
                    $unwind: {
                        path: '$result'
                    }
                }
            ]);
            console.log(follower, "streinnooooonn");
            if (follower) {
                return follower;
            }
            else {
                return [];
            }
        }
        catch (error) {
            console.log(error);
        }
    });
    const followingDetails = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const following = yield userModel_1.default.aggregate([
                {
                    '$match': {
                        '_id': new mongoose_1.default.Types.ObjectId(userId)
                    }
                },
                {
                    '$unwind': {
                        'path': '$following'
                    }
                },
                {
                    '$addFields': {
                        'followingId': {
                            "$toObjectId": "$following"
                        }
                    }
                },
                {
                    '$lookup': {
                        'from': 'users',
                        'localField': 'followingId',
                        'foreignField': '_id',
                        'as': 'result'
                    }
                },
                {
                    '$unwind': {
                        'path': '$result'
                    }
                }
            ]);
            if (following) {
                return following;
            }
            else {
                return [];
            }
        }
        catch (error) {
            console.log(error);
        }
    });
    const searchUser = (searchQuery) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log(searchQuery, "searchqueryyyyy");
            const regexPattern = new RegExp(searchQuery, 'i');
            return yield userModel_1.default.find({
                $or: [
                    { userName: { $regex: regexPattern } },
                    { lastName: { $regex: regexPattern } },
                    { firstName: { $regex: regexPattern } }
                ]
            });
        }
        catch (error) {
            console.log(error, "searchuser");
        }
    });
    const profilePost = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return yield userModel_1.default.aggregate([
                {
                    '$match': {
                        '_id': new mongoose_1.default.Types.ObjectId(userId)
                    }
                }, {
                    '$lookup': {
                        'from': 'posts',
                        'localField': '_id',
                        'foreignField': 'userId',
                        'as': 'result'
                    }
                }, {
                    '$unwind': {
                        'path': '$result'
                    }
                }, {
                    '$project': {
                        'imgVideoURL': '$result.imgVideoURL',
                        'caption': '$result.caption',
                        'liked': '$result.liked'
                    }
                }
            ]);
        }
        catch (error) {
            console.log(error, "profilepost");
        }
    });
    const verifications = (verifyprofile) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(verifyprofile, "888888888886666666666");
        const verifiedProfile = new verifyProfileModel_1.default(verifyprofile);
        return yield verifiedProfile.save();
        // db.verifyProfiles.createIndex({ "expiryDate": 1 }, { expireAfterSeconds: 0 });
    });
    const verify = (email) => __awaiter(void 0, void 0, void 0, function* () {
        return yield verifyProfileModel_1.default.findOne({ email: email });
    });
    return {
        addUser,
        googleaddUser,
        getUserByEmail,
        getUserByUserName,
        getUserByMobile,
        getUserByNameMailMobile,
        getAlluser,
        getAllposts,
        followPost,
        unfollowPost,
        getOneuser,
        savedPost,
        unsavedPost,
        getSavedpost,
        editProfile,
        followerDetails,
        followingDetails,
        searchUser,
        profilePost,
        verifications,
        verify
    };
};
exports.userHelper = userHelper;
