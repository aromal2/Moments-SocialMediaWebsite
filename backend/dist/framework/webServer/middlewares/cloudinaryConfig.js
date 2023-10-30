"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.editprofilePhoto = exports.uploadPhoto = void 0;
const multer_1 = __importDefault(require("multer"));
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const cloudinary_1 = require("cloudinary");
const postImages = {
    cloudinary: cloudinary_1.v2,
    params: {
        folder: "selectedfile",
        allowed_formats: [
            "jpg",
            "jpeg",
            "png",
            "svg",
            "webp",
            "gif",
            "jfif",
            "webp",
            "gif",
            "mp4",
            "mpeg",
        ],
        public_id: (req, file) => {
            const originalname = file.originalname.split(".");
            return `post-${Date.now()}-${originalname[0]}`;
        },
    },
};
const editProfile = {
    cloudinary: cloudinary_1.v2,
    params: {
        folder: "editedfile",
        allowed_formats: [
            "jpg",
            "jpeg",
            "png",
            "svg",
            "webp",
            "gif",
            "jfif",
            "webp",
            "gif",
            "mp4",
            "mpeg",
        ],
        public_id: (req, file) => {
            const originalname = file.originalname.split(".");
            return `edit-${Date.now()}-${originalname[0]}`;
        }
    }
};
const postStorage = new multer_storage_cloudinary_1.CloudinaryStorage(postImages);
exports.uploadPhoto = (0, multer_1.default)({ storage: postStorage }).single("selectedfile");
const editprofileStorage = new multer_storage_cloudinary_1.CloudinaryStorage(editProfile);
exports.editprofilePhoto = (0, multer_1.default)({ storage: editprofileStorage }).single("editedfile");
