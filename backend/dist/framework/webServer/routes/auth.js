"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userAuthControllers_1 = __importDefault(require("../../../adapters/controllers/userAuthControllers"));
const userHelper_1 = require("../../database/mongoDb/repositories/userHelper");
const userDbrepository_1 = require("../../../application/repositories/userDbrepository");
const authServices_1 = require("../../services/authServices");
const authServiceInterfaces_1 = require("../../../application/services/authServiceInterfaces");
const authRouter = () => {
    const router = express_1.default.Router();
    const controllers = (0, userAuthControllers_1.default)(authServiceInterfaces_1.authServiceInterface, authServices_1.authServices, userDbrepository_1.userDbrepository, userHelper_1.userHelper);
    router.post("/signup", controllers.signUpUser);
    router.post("/login", controllers.signInUser);
    router.post("/googlelogin", controllers.googlesigninUser);
    router.post("/googlesignup", controllers.googlesignupUser);
    return router;
};
exports.default = authRouter;
