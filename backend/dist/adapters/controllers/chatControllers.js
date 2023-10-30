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
const chat_1 = require("../../application/useCases/chat");
const chatControllers = (chatInterface, chatHelper) => {
    const chatMain = chatInterface(chatHelper());
    const accesschat = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(req.body, "888888888888");
        const accesschatresponse = yield (0, chat_1.accessChat)(req.body.userId, req.body.chattinguserId, chatMain);
        console.log(accesschatresponse, "99999999999999999");
        res.json(accesschatresponse);
    }));
    const userChats = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userchatsresponse = yield (0, chat_1.userChat)(req.params.userId, chatMain);
    }));
    const findChat = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const findchatsresponse = yield (0, chat_1.findChats)(req.params.firstId, req.params.secondId, chatMain);
    }));
    return {
        accesschat,
        userChats,
        findChat,
    };
};
exports.default = chatControllers;
