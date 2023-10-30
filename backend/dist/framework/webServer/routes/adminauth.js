"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminAuthcontrollers_1 = __importDefault(require("../../../adapters/controllers/adminAuthcontrollers"));
const adminHelper_1 = require("../../database/mongoDb/repositories/adminHelper");
const adminDbrepository_1 = require("../../../application/repositories/adminDbrepository");
const adminAuthservices_1 = require("../../../framework/services/adminAuthservices");
const adminauthServiceInterfaces_1 = require("../../../application/services/adminauthServiceInterfaces");
const adminauth = () => {
    const router = express_1.default.Router();
    const controllers = (0, adminAuthcontrollers_1.default)(adminauthServiceInterfaces_1.adminauthServiceInterface, adminAuthservices_1.adminAuthservices, adminDbrepository_1.adminDbrepository, adminHelper_1.adminHelper);
    router.post("/adminlogin", controllers.signInUser);
    return router;
};
exports.default = adminauth;
