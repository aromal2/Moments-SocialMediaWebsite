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
const userAuth_1 = require("../../application/useCases/auth/userAuth");
const userAuthcontrollers = (AuthServiceInterface, AuthServices, UserDbinterface, UserHelper) => {
    const userDbrepository = UserDbinterface(UserHelper());
    const authService = AuthServiceInterface(AuthServices());
    const signUpUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { firstName, lastName, userName, email, password, mobile, age, gender } = req.body;
        const user = {
            firstName,
            lastName,
            userName,
            email,
            password,
            mobile,
            age,
            gender
        };
        const userData = yield (0, userAuth_1.userSignUp)(user, userDbrepository, authService);
        res.json(userData);
    }));
    const signInUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { email, password } = req.body;
        const userData = yield (0, userAuth_1.userSignIn)(email, password, userDbrepository, authService);
        res.json(userData);
    }));
    const googlesigninUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(req.body, "7777body");
        const userData = yield (0, userAuth_1.googleuserSignIn)(req.body.email, userDbrepository, authService);
        res.json(userData);
    }));
    const googlesignupUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { userName, email } = req.body;
        const user = {
            userName, email
        };
        const userData = yield (0, userAuth_1.googleuserSignUp)(user, userDbrepository, authService);
        res.json(userData);
    }));
    return {
        signUpUser,
        signInUser,
        googlesigninUser,
        googlesignupUser
    };
};
exports.default = userAuthcontrollers;
