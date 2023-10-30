"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_1 = __importDefault(require("../../../adapters/controllers/userControllers"));
const userHelper_1 = require("../../database/mongoDb/repositories/userHelper");
const userDbrepository_1 = require("../../../application/repositories/userDbrepository");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const cloudinaryConfig_1 = require("../middlewares/cloudinaryConfig");
const userRouter = () => {
    const router = express_1.default.Router();
    const controllers = (0, userControllers_1.default)(userDbrepository_1.userDbrepository, userHelper_1.userHelper);
    router.get("/getuser", authMiddleware_1.default, controllers.getUser);
    router.post("/getallpost", authMiddleware_1.default, controllers.getPost);
    router.post("/followuser", authMiddleware_1.default, controllers.followPost);
    router.post("/unfollowuser", authMiddleware_1.default, controllers.unfollowPost);
    router.get("/singleuserdetails/:userId", authMiddleware_1.default, controllers.getsingleuserDetails);
    router.post("/savedpost", authMiddleware_1.default, controllers.savedPost);
    router.post("/unsaved", controllers.unsavedPost);
    router.get("/getsavedpost/:userId", authMiddleware_1.default, controllers.getsavedPost);
    router.post("/editprofile", cloudinaryConfig_1.editprofilePhoto, authMiddleware_1.default, controllers.editProfile);
    router.get("/followersdetails/:userId", authMiddleware_1.default, controllers.followersDetails);
    router.get("/followingdetails/:userId", authMiddleware_1.default, controllers.followingsDetails);
    router.post("/search", authMiddleware_1.default, controllers.search);
    router.get("/profilepost/:userId", authMiddleware_1.default, controllers.profilePost);
    router.post("/verification", controllers.verification);
    router.post("/verify", controllers.verify);
    return router;
};
exports.default = userRouter;
