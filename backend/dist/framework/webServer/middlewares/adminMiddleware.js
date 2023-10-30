"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adminAuthservices_1 = require("../../services/adminAuthservices");
const adminMiddleware = (req, res, next) => {
    var _a;
    let token = null;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer ")) {
        token = req.headers.authorization.split(" ")[1];
    }
    try {
        if (typeof token === "string") {
            const { payload } = (_a = (0, adminAuthservices_1.adminAuthservices)()) === null || _a === void 0 ? void 0 : _a.verifyToken(token);
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
exports.default = adminMiddleware;
