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
exports.adminSignIn = void 0;
const adminSignIn = (Email, password, adminRepository, adminAuthService) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield adminRepository.getUserByEmail(Email);
    console.log(data, "authhhhhhhhhhhhhh");
    if (!data) {
        const userData = {
            status: "failed",
            message: "User does not exist",
            user: {},
            token: ''
        };
        return userData;
    }
    if (!data) {
        const userData = {
            status: "failed",
            message: "User is blocked",
            user: {},
            token: ''
        };
        return userData;
    }
    const isPassword = yield adminAuthService.comparePassword(password, data.password);
    if (!isPassword) {
        const userData = {
            status: "failed",
            message: "Password incorrect",
            user: {},
            token: ''
        };
        return userData;
    }
    const jwtToken = yield adminAuthService.generateToken(data === null || data === void 0 ? void 0 : data._id.toString());
    const userData = {
        status: "success",
        message: "Sign in Success",
        user: data,
        token: jwtToken
    };
    return userData;
});
exports.adminSignIn = adminSignIn;
