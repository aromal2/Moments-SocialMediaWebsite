"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("./framework/database/mongoDb/connection/connection"));
const express_2 = __importDefault(require("./framework/webServer/express"));
const routes_1 = __importDefault(require("./framework/webServer/routes"));
const server_1 = __importDefault(require("./framework/webServer/server"));
const cloudinary_1 = require("cloudinary");
const socket_io_1 = require("socket.io");
const socketserver_1 = __importDefault(require("./framework/webServer/socketserver"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const stripe = require('stripe')("sk_test_51O2AEnSEPzyvaD8mADzOFPxkokuOEezDgtEIDGGqKCU8QRRFKR8vL3ZlCBN9pjBpJuKgXoy0JFimx9Nyo1hpqniO004R3cBCG6");
const uuid = require('uuid').v4;
const io = new socket_io_1.Server(server, {
    pingTimeout: 60000,
    cors: {
        origin: process.env.SOCKET_SERVER,
        methods: ["GET", "POST"]
    }
});
app.use((0, cors_1.default)());
(0, socketserver_1.default)(io);
(0, connection_1.default)();
(0, express_2.default)(app);
(0, routes_1.default)(app);
(0, server_1.default)(server);
cloudinary_1.v2.config({
    cloud_name: "dxmzxwgrd",
    api_key: "878859175157159",
    api_secret: "sgv8imTpVI4wuOo3UdvzqGCTtV4",
});
const servers = new socket_io_1.Server;
