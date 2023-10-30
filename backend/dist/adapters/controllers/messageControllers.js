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
const message_1 = require("../../application/useCases/message");
const messageControllers = (messageInterface, messageHelper) => {
    const messageMain = messageInterface(messageHelper());
    const addMessage = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const addMessageResponse = yield (0, message_1.addmessage)(req.body.chatterId, req.body.userId, req.body.secondId, req.body.message, messageMain);
            res.json(addMessageResponse);
        }
        catch (error) {
            res.status(500).json({ error: 'An error occurred' });
        }
    }));
    // const getMessage = asyncHandler(async (req: Request, res: Response) => {
    //     const addMessageresponse = await addmessage();
    // });
    const getChatlists = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log(req.body, "33333333333");
            const getAllChatsresponse = yield (0, message_1.getChatlist)(req.body.userId, messageMain);
            res.json(getAllChatsresponse);
        }
        catch (error) {
            console.log(error);
        }
    }));
    const getMessage = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const getMessageresponse = yield (0, message_1.getmessage)(req.body.chatId, messageMain);
        }
        catch (error) {
            console.log(error);
        }
    }));
    const payment = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { product, token } = req.body;
        }
        catch (error) {
            console.log(error);
        }
    }));
    return {
        addMessage,
        getChatlists,
        getMessage,
        payment
    };
};
exports.default = messageControllers;
