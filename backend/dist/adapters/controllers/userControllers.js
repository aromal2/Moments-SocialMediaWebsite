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
const user_1 = require("../../application/useCases/user");
const userControllers = (userInterface, userHelper) => {
    const userMain = userInterface(userHelper());
    const getUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userresponse = yield (0, user_1.getAlluser)(userMain);
        res.json(userresponse);
    }));
    const getPost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, user_1.getAllpost)(req.body.userId, userMain);
        res.json(response);
    }));
    const followPost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const followresponse = yield (0, user_1.followPosts)(req.body.userId, req.body.auserId, userMain);
        res.json(followresponse);
    }));
    const unfollowPost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const unfollowresponse = yield (0, user_1.unfollowPosts)(req.body.userId, req.body.auserId, userMain);
        res.json(unfollowresponse);
    }));
    const getsingleuserDetails = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const getoneuserresponse = yield (0, user_1.getOneuser)(req.params.userId, userMain);
        res.json(getoneuserresponse);
    }));
    const savedPost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const savedpostresponse = yield (0, user_1.savedpost)(req.body.userId, req.body.postId, userMain);
        res.json(savedpostresponse);
    }));
    const unsavedPost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const unsavedresponse = yield (0, user_1.unsavedpost)(req.body.userId, req.body.postId, userMain);
        res.json(unsavedresponse);
    }));
    const getsavedPost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const getSavedpostresponse = yield (0, user_1.getSavedpost)(req.params.userId, userMain);
        res.json(getSavedpostresponse);
    }));
    const editProfile = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        const cloudinaryProfile = (_b = (_a = req === null || req === void 0 ? void 0 : req.file) === null || _a === void 0 ? void 0 : _a.path) === null || _b === void 0 ? void 0 : _b.split("/edit-")[1];
        console.log(req.body, cloudinaryProfile, "111111reqbody");
        const editprofileResponse = yield (0, user_1.editProfiles)(req.body.userid, req.body.bio, req.body.gender, cloudinaryProfile, userMain);
        res.json(editprofileResponse);
    }));
    const followersDetails = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const followersdetailsResponse = yield (0, user_1.followerDetail)(req.params.userId, userMain);
        res.json(followersdetailsResponse);
    }));
    const followingsDetails = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const followingdetailsResponse = yield (0, user_1.followingDetail)(req.params.userId, userMain);
        res.json(followingdetailsResponse);
    }));
    const search = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const searchuserResponse = yield (0, user_1.searchUser)(req.body.searchQuery, userMain);
        res.json(searchuserResponse);
    }));
    const profilePost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const profilepostRespponse = yield (0, user_1.profilePosts)(req.params.userId, userMain);
        res.json(profilepostRespponse);
    }));
    const verification = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(req.body, "mmmmmmmmmmmmmmmmmmuuuuu");
        if (req.body) {
            const verificationResponse = (0, user_1.verifications)(req.body.token.email, req.body.token.card.brand, req.body.product.price, userMain);
            res.json(verificationResponse);
        }
        // Stripe.customers.create({
        //     email:'aro@gmail.com'
        // })
        // console.log(customers);
        //const verificationresponse=await 
    }));
    const verify = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const verifyresponse = yield (0, user_1.profileverify)(req.body.email, userMain);
        res.json(verifyresponse);
    }));
    return {
        getUser,
        getPost,
        followPost,
        unfollowPost,
        getsingleuserDetails,
        savedPost,
        unsavedPost,
        getsavedPost,
        editProfile,
        followersDetails,
        followingsDetails,
        search,
        profilePost,
        verification,
        verify
    };
};
exports.default = userControllers;
