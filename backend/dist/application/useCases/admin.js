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
exports.reportposts = exports.totalposts = exports.agedetail = exports.genderdetail = exports.unblockusers = exports.blockusers = exports.getuserlist = void 0;
const getuserlist = (adminrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield adminrepository.getUserlist();
    if (data) {
        return data;
    }
});
exports.getuserlist = getuserlist;
const blockusers = (userId, adminrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield adminrepository.blockusers(userId);
    if (data) {
        return data;
    }
});
exports.blockusers = blockusers;
const unblockusers = (userId, adminrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield adminrepository.unblockusers(userId);
    if (data) {
        return data;
    }
});
exports.unblockusers = unblockusers;
const genderdetail = (adminrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield adminrepository.genderdetails();
    if (data) {
        return data;
    }
});
exports.genderdetail = genderdetail;
const agedetail = (adminrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield adminrepository.agedetails();
    console.log(data, "77666666666666666");
    if (data) {
        return data;
    }
});
exports.agedetail = agedetail;
const totalposts = (adminrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield adminrepository.totalpost();
    if (data) {
        return data;
    }
});
exports.totalposts = totalposts;
const reportposts = (adminrepository) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield adminrepository.reportpost();
    if (data) {
        return data;
    }
});
exports.reportposts = reportposts;
