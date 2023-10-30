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
const adminAuth_1 = require("../../application/useCases/auth/adminAuth");
const adminAuthControllers = (adminauthServicesInterface, adminAuthservices, adminInterfaces, adminhelper) => {
    const adminauthService = adminauthServicesInterface(adminAuthservices());
    const adminDbrepository = adminInterfaces(adminhelper());
    const signInUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(req.body, "3333req.body");
        const adminData = yield (0, adminAuth_1.adminSignIn)(req.body.email, req.body.password, adminDbrepository, adminauthService);
        console.log(adminData, "-==================[[[]]]");
        res.json(adminData);
    }));
    return {
        signInUser
    };
};
exports.default = adminAuthControllers;
