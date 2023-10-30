"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messageControllers_1 = __importDefault(require("../../../adapters/controllers/messageControllers"));
const messageHelper_1 = require("../../database/mongoDb/repositories/messageHelper");
const messageDbrepository_1 = require("../../../application/repositories/messageDbrepository");
const message = () => {
    const router = express_1.default.Router();
    const controllers = (0, messageControllers_1.default)(messageDbrepository_1.messageDbrepository, messageHelper_1.messageHelper);
    router.post("/", controllers.addMessage);
    router.post("/getallchats", controllers.getChatlists);
    router.get("/getmessage/:chatId", controllers.getMessage);
    router.post("/payment", controllers.payment);
    return router;
};
exports.default = message;
