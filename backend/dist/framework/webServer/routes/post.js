"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postControllers_1 = __importDefault(require("../../../adapters/controllers/postControllers"));
const postHelper_1 = require("../../database/mongoDb/repositories/postHelper");
const postDbrepository_1 = require("../../../application/repositories/postDbrepository");
const cloudinaryConfig_1 = require("../middlewares/cloudinaryConfig");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const postRouter = () => {
    const router = express_1.default.Router();
    const controllers = (0, postControllers_1.default)(postDbrepository_1.postDbrepository, postHelper_1.postHelper);
    router.post("/addpost", cloudinaryConfig_1.uploadPhoto, controllers.addPost);
    router.post("/likepost", authMiddleware_1.default, controllers.likePost);
    router.post("/unlikepost", authMiddleware_1.default, controllers.unlikePost);
    router.post("/reportpost", authMiddleware_1.default, controllers.reportPost);
    router.get("/singleuserpost/:userId", authMiddleware_1.default, controllers.singleUserpost);
    router.delete("/deletepost/:postId", authMiddleware_1.default, controllers.deletepost);
    router.post("/addcomment", authMiddleware_1.default, controllers.addComment);
    router.post("/getComment", authMiddleware_1.default, controllers.getComment);
    router.post("/commentsize", controllers.commentSize);
    router.post("/removecomment", controllers.deleteComment);
    router.post("/editcomment", controllers.editComment);
    return router;
};
exports.default = postRouter;
