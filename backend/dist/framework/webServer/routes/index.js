"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = __importDefault(require("./post"));
const auth_1 = __importDefault(require("./auth"));
const user_1 = __importDefault(require("./user"));
const adminauth_1 = __importDefault(require("./adminauth"));
const admin_1 = __importDefault(require("./admin"));
const chat_1 = __importDefault(require("./chat"));
const message_1 = __importDefault(require("./message"));
const routes = (app) => {
    app.use("/api/auth", (0, auth_1.default)());
    app.use("/api/adminauth", (0, adminauth_1.default)());
    app.use("/api/post", (0, post_1.default)());
    app.use("/api/user", (0, user_1.default)());
    app.use("/api/admin", (0, admin_1.default)());
    app.use("/api/chat", (0, chat_1.default)());
    app.use("/api/message", (0, message_1.default)());
};
exports.default = routes;
