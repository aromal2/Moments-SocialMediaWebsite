"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userModel_1 = __importDefault(require("./userModel"));
const verifyprofileSchema = new mongoose_1.Schema({
    email: {
        type: String,
        ref: userModel_1.default
    },
    brand: {
        type: String
    },
    price: {
        type: Number
    }
}, { timestamps: true });
const verifyProfiles = (0, mongoose_1.model)("verifyProfile", verifyprofileSchema);
exports.default = verifyProfiles;
