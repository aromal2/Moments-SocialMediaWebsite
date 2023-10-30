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
exports.profileverify = exports.verifications = exports.profilePosts = exports.searchUser = exports.followingDetail = exports.followerDetail = exports.editProfiles = exports.getSavedpost = exports.unsavedpost = exports.savedpost = exports.getOneuser = exports.unfollowPosts = exports.followPosts = exports.getAllpost = exports.getAlluser = void 0;
const getAlluser = (userDbrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield userDbrepository.getAlluser();
    if (data) {
        return data;
    }
});
exports.getAlluser = getAlluser;
const getAllpost = (userId, userDbrepository) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(userId, "tttttttttttt");
    const data = yield userDbrepository.getAllpost(userId);
    if (data) {
        return data;
    }
});
exports.getAllpost = getAllpost;
const followPosts = (userId, auserId, userDbrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield userDbrepository.followPost(userId, auserId);
    console.log(data, "8usecase");
    if (data)
        return data;
});
exports.followPosts = followPosts;
const unfollowPosts = (userId, auserId, userDbrepository) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(userId, auserId, "===========usecase========");
    const data = yield userDbrepository.unfollowPost(userId, auserId);
    console.log(data, "datausecas9e");
    if (data)
        return data;
    // }
});
exports.unfollowPosts = unfollowPosts;
const getOneuser = (userId, userDbrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield userDbrepository.getOneUser(userId);
    if (data)
        return data;
});
exports.getOneuser = getOneuser;
const savedpost = (userId, postId, userDbrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield userDbrepository.savedPost(userId, postId);
    if (data)
        return data;
});
exports.savedpost = savedpost;
const unsavedpost = (userId, postId, userDbrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield userDbrepository.unsavedPost(userId, postId);
    if (data)
        return data;
});
exports.unsavedpost = unsavedpost;
const getSavedpost = (userId, userDbrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield userDbrepository.getSavedpost(userId);
    if (data)
        return data;
});
exports.getSavedpost = getSavedpost;
const editProfiles = (userid, bio, gender, profilePic, userDbrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield userDbrepository.editProfile(userid, bio, gender, profilePic);
    if (data)
        return data;
});
exports.editProfiles = editProfiles;
const followerDetail = (userId, userDbrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield userDbrepository.followersDetails(userId);
    if (data)
        return data;
});
exports.followerDetail = followerDetail;
const followingDetail = (userId, userDbrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield userDbrepository.followingDetails(userId);
    if (data)
        return data;
});
exports.followingDetail = followingDetail;
const searchUser = (searchQuery, userDbrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield userDbrepository.search(searchQuery);
    if (data)
        return data;
});
exports.searchUser = searchUser;
const profilePosts = (userId, userDbrepository) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(userId, "kkkkkkkkkkllllllllllllyyyyyyyyyyyyyyyyyyyyy");
    const data = yield userDbrepository.profilePost(userId);
    if (data)
        return data;
});
exports.profilePosts = profilePosts;
const verifications = (email, brand, price, userDbrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const verifyprofile = { email,
        brand,
        price
    };
    console.log(verifyprofile, "888888888888");
    const data = yield userDbrepository.profileverification(verifyprofile);
    if (data)
        return data;
});
exports.verifications = verifications;
const profileverify = (email, userDbrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield userDbrepository.verifying(email);
    if (data)
        return data;
});
exports.profileverify = profileverify;
