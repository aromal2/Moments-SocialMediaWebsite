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
exports.adminDbrepository = void 0;
const adminDbrepository = (repository) => {
    const getUserByEmail = (Email) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.getUserByEmail(Email);
    });
    const getUserlist = () => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.getUserlist();
    });
    const blockusers = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.blockuser(userId);
    });
    const unblockusers = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.unblockuser(userId);
    });
    const genderdetails = () => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.genderdetail();
    });
    const agedetails = () => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.agedetail();
    });
    const totalpost = () => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.totalpost();
    });
    const reportpost = () => __awaiter(void 0, void 0, void 0, function* () {
        return yield repository.reportpost();
    });
    return {
        getUserByEmail,
        getUserlist,
        blockusers,
        unblockusers,
        genderdetails,
        agedetails,
        totalpost,
        reportpost
    };
};
exports.adminDbrepository = adminDbrepository;
