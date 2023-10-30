"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminControllers_1 = __importDefault(require("../../../adapters/controllers/adminControllers"));
const adminHelper_1 = require("../../database/mongoDb/repositories/adminHelper");
const adminDbrepository_1 = require("../../../application/repositories/adminDbrepository");
const adminMiddleware_1 = __importDefault(require("../middlewares/adminMiddleware"));
const admin = () => {
    const router = express_1.default.Router();
    const controllers = (0, adminControllers_1.default)(adminDbrepository_1.adminDbrepository, adminHelper_1.adminHelper);
    router.get("/userlist", controllers.userlist);
    router.get("/block/:userId", adminMiddleware_1.default, controllers.blockuser);
    router.get("/unblock/:userId", adminMiddleware_1.default, controllers.unblockuser);
    router.get("/genderdetails", controllers.genderdetails);
    router.get("/agedetails", adminMiddleware_1.default, controllers.agedetails);
    router.get("/totalpost", controllers.totalpost);
    router.get("/reportpost", adminMiddleware_1.default, controllers.reportpost);
    return router;
};
exports.default = admin;
