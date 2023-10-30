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
exports.chatDbrepository = void 0;
const chatDbrepository = (repository) => {
    const accesschat = (userId, chattinguserId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.createChat(userId, chattinguserId);
    });
    const userchat = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.userChat(userId);
    });
    const findchat = (firstId, secondId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.findChat(firstId, secondId);
    });
    return {
        accesschat,
        userchat,
        findchat
    };
};
exports.chatDbrepository = chatDbrepository;
