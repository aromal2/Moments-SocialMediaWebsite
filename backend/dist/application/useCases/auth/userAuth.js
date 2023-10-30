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
exports.googleuserSignUp = exports.googleuserSignIn = exports.userSignIn = exports.userSignUp = void 0;
const userSignUp = (user, userRepository, authService) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    user.email = user.email.toLowerCase();
    const isEmailExist = yield userRepository.getUserByEmail(user.email);
    if (isEmailExist) {
        const userData = {
            status: "failed",
            message: "Email already exists",
            user: {},
            token: ''
        };
        console.log(userData, "0000000000000000000000");
        return userData;
    }
    const isUserNameExist = yield userRepository.getUserByUsername(user.userName);
    if (isUserNameExist) {
        const userData = {
            status: "failed",
            message: "Username already exists",
            user: {},
            token: ''
        };
        return userData;
    }
    let encryptPassword = yield authService.encryptPassword(user.password);
    user.password = encryptPassword;
    const data = yield userRepository.addUser(user);
    const jwtToken = yield authService.generateToken((_a = data._id) === null || _a === void 0 ? void 0 : _a.toString());
    const userData = {
        status: "success",
        message: "Registration Success",
        user: data,
        token: jwtToken
    };
    return userData;
});
exports.userSignUp = userSignUp;
const userSignIn = (email, password, userRepository, authService) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const data = yield userRepository.getUserByEmail(email);
    console.log(data, "777777777777777777");
    if (!data) {
        const userData = {
            status: "failed",
            message: "User does not exist",
            user: {},
            token: ''
        };
        console.log(userData, "8888888888888888888888");
        return userData;
    }
    if (data.isBlock) {
        const userData = {
            status: "failed",
            message: "User is blocked",
            user: {},
            token: ''
        };
        return userData;
    }
    const isPassword = yield authService.comparePassword(password, data === null || data === void 0 ? void 0 : data.password);
    if (!isPassword) {
        const userData = {
            status: "failed",
            message: "Password incorrect",
            user: {},
            token: ''
        };
        return userData;
    }
    const jwtToken = yield authService.generateToken((_b = data === null || data === void 0 ? void 0 : data._id) === null || _b === void 0 ? void 0 : _b.toString());
    data.password = '';
    const userData = {
        status: "success",
        message: "Sign in Success",
        user: data,
        token: jwtToken
    };
    return userData;
});
exports.userSignIn = userSignIn;
const googleuserSignIn = (email, userRepository, authService) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    const data = yield userRepository.getUserByEmail(email);
    console.log(data, "777777777777777777");
    if (!data) {
        const userData = {
            status: "failed",
            message: "User does not exist",
            user: {},
            token: ''
        };
        console.log(userData, "8888888888888888888888");
        return userData;
    }
    if (data.isBlock) {
        const userData = {
            status: "failed",
            message: "User is blocked",
            user: {},
            token: ''
        };
        return userData;
        console.log(userData, "9999999999");
    }
    const jwtToken = yield authService.generateToken((_c = data === null || data === void 0 ? void 0 : data._id) === null || _c === void 0 ? void 0 : _c.toString());
    data.password = '';
    const userData = {
        status: "success",
        message: "Sign in Success",
        user: data,
        token: jwtToken
    };
    return userData;
});
exports.googleuserSignIn = googleuserSignIn;
const googleuserSignUp = (user, userRepository, authService) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    var emails = user.email.toLowerCase();
    const isEmailExist = yield userRepository.getUserByEmail(emails);
    if (isEmailExist) {
        const userData = {
            status: "failed",
            message: "Email already exists",
            user: {},
            token: ''
        };
        console.log(userData, "0000000000000000000000");
        return userData;
    }
    const isUserNameExist = yield userRepository.getUserByUsername(user.userName);
    if (isUserNameExist) {
        const userData = {
            status: "failed",
            message: "Username already exists",
            user: {},
            token: ''
        };
        return userData;
    }
    // let encryptPassword = await authService.encryptPassword(user.password)
    // user.password = encryptPassword
    const data = yield userRepository.googleaddUser(user);
    console.log(data, "33333333333333");
    const jwtToken = yield authService.generateToken((_d = data._id) === null || _d === void 0 ? void 0 : _d.toString());
    const userData = {
        status: "success",
        message: "Registration Success",
        user: data,
        token: jwtToken
    };
    return userData;
});
exports.googleuserSignUp = googleuserSignUp;
