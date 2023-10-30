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
exports.findChats = exports.userChat = exports.accessChat = void 0;
const accessChat = (userId, chattinguserId, chatDbrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield chatDbrepository.accesschat(userId, chattinguserId);
    if (data)
        return data;
});
exports.accessChat = accessChat;
const userChat = (userId, chatDbrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield chatDbrepository.userchat(userId);
});
exports.userChat = userChat;
const findChats = (firstId, secondId, chatDbrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield chatDbrepository.findchat(firstId, secondId);
});
exports.findChats = findChats;
