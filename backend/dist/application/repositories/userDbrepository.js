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
exports.userDbrepository = void 0;
const userDbrepository = (repository) => {
    const addUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
        const addingUser = yield repository.addUser(user);
        addingUser.password = "";
        return addingUser;
    });
    const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(email, "emaillllll");
        return yield repository.getUserByEmail(email);
    });
    const getUserByUsername = (userName) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.getUserByUserName(userName);
    });
    const getUserByMobile = (mobile) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.getUserByMobile(mobile);
    });
    const getUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.getUserByNameMailMobile(email);
    });
    const getAlluser = () => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.getAlluser();
    });
    const getAllpost = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(userId, "5555555533333333333");
        return yield repository.getAllposts(userId);
    });
    const followPost = (userId, auserId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.followPost(userId, auserId);
    });
    const unfollowPost = (userId, auserId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.unfollowPost(userId, auserId);
    });
    const getOneUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.getOneuser(userId);
    });
    const savedPost = (userId, postId) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(userId, postId, "-----------repo");
        return yield repository.savedPost(userId, postId);
    });
    const unsavedPost = (userId, postId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.unsavedPost(userId, postId);
    });
    const getSavedpost = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.getSavedpost(userId);
    });
    const editProfile = (userid, bio, gender, profilePic) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.editProfile(userid, bio, gender, profilePic);
    });
    const followersDetails = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.followerDetails(userId);
    });
    const followingDetails = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.followingDetails(userId);
    });
    const search = (searchQuery) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.searchUser(searchQuery);
    });
    const profilePost = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.profilePost(userId);
    });
    // const emailchecking =async(email:string)=>{
    //     return await repository.emailchecking(email)
    // }
    const googleaddUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
        const addingUser = yield repository.googleaddUser(user);
        return addingUser;
    });
    const profileverification = (verifyprofile) => __awaiter(void 0, void 0, void 0, function* () {
        const verifyprofiles = yield repository.verifications(verifyprofile);
        return verifyprofiles;
    });
    const verifying = (email) => __awaiter(void 0, void 0, void 0, function* () {
        const verifyresponse = yield repository.verify(email);
        return verifyresponse;
    });
    return {
        addUser,
        getUserByEmail,
        getUserByUsername,
        getUserByMobile,
        getUser,
        getAlluser,
        getAllpost,
        followPost,
        unfollowPost,
        getOneUser,
        savedPost,
        getSavedpost,
        editProfile,
        unsavedPost,
        followersDetails,
        followingDetails,
        search,
        profilePost,
        googleaddUser,
        profileverification,
        verifying
    };
};
exports.userDbrepository = userDbrepository;
