"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chatControllers_1 = __importDefault(require("../../../adapters/controllers/chatControllers"));
const chatHelper_1 = require("../../database/mongoDb/repositories/chatHelper");
const chatDbrepository_1 = require("../../../application/repositories/chatDbrepository");
const chat = () => {
    const router = express_1.default.Router();
    const controllers = (0, chatControllers_1.default)(chatDbrepository_1.chatDbrepository, chatHelper_1.chatHelper);
    router.post("/", controllers.accesschat);
    router.get("/userchats/:userId", controllers.userChats);
    router.get("/find/:firstId/:secondId", controllers.findChat);
    return router;
};
exports.default = chat;
