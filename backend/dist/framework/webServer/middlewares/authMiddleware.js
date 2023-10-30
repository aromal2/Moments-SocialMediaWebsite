"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authServices_1 = require("../../services/authServices");
const userMiddleware = (req, res, next) => {
    var _a;
    let token = null;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer ")) {
        token = req.headers.authorization.split(" ")[1];
    }
    try {
        if (typeof token === "string") {
            const { payload } = (_a = (0, authServices_1.authServices)()) === null || _a === void 0 ? void 0 : _a.verifyToken(token);
            if (payload) {
                next();
            }
            else {
                res.status(401).json({ message: "Unauthorized" });
            }
        }
        else {
            res.status(401).json({ message: "Unauthorized" });
        }
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = userMiddleware;
