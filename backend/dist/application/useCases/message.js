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
exports.getmessage = exports.getChatlist = exports.addmessage = void 0;
const addmessage = (chatterId, userId, secondId, message, messageDbrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield messageDbrepository.addmessage(chatterId, userId, secondId, message);
    if (data)
        return data;
});
exports.addmessage = addmessage;
const getChatlist = (userId, messageDbrepository) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(userId, "authhmessage");
    const data = yield messageDbrepository.getChatlist(userId);
    if (data)
        return data;
});
exports.getChatlist = getChatlist;
const getmessage = (chatId, messageDbrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield messageDbrepository.getMessage(chatId);
});
exports.getmessage = getmessage;
