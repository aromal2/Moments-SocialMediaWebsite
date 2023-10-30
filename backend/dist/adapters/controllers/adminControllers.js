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
const admin_1 = require("../../application/useCases/admin");
const adminControllers = (adminInterface, adminHelper) => {
    const postMain = adminInterface(adminHelper());
    const userlist = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userlistresponse = yield (0, admin_1.getuserlist)(postMain);
        console.log(userlistresponse, "222222222kkkkkk22222888");
        res.json(userlistresponse);
    }));
    const blockuser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userlistresponse = yield (0, admin_1.blockusers)(req.params.userId, postMain);
        console.log(userlistresponse, "222222222kkkkkk22222888");
        res.json(userlistresponse);
    }));
    const unblockuser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userlistresponse = yield (0, admin_1.unblockusers)(req.params.userId, postMain);
        console.log(userlistresponse, "222222222kkkkkk22222888");
        res.json(userlistresponse);
    }));
    const genderdetails = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const genderesponse = yield (0, admin_1.genderdetail)(postMain);
        res.json(genderesponse);
    }));
    const agedetails = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const ageresponse = yield (0, admin_1.agedetail)(postMain);
        res.json(ageresponse);
    }));
    const totalpost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, admin_1.totalposts)(postMain);
        res.json(response);
    }));
    const reportpost = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, admin_1.reportposts)(postMain);
        res.json(response);
    }));
    return {
        userlist,
        blockuser,
        unblockuser,
        genderdetails,
        agedetails,
        totalpost,
        reportpost
    };
};
exports.default = adminControllers;
