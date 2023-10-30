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
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageDbrepository = void 0;
const messageDbrepository = (repository) => {
    const addmessage = (chatterId, userId, secondId, message) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.addMessages(chatterId, userId, secondId, message);
    });
    const getChatlist = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.getChatlist(userId);
    });
    const getMessage = (chatId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.getMessage(chatId);
    });
    return {
        addmessage,
        getChatlist,
        getMessage
    };
};
exports.messageDbrepository = messageDbrepository;
