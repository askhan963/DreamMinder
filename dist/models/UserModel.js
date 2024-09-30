"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: [true, "Please Provide a name"],
    },
    email: {
        type: String,
        unique: true,
        require: [true, "Please Provide an email"],
    },
    password: {
        type: String,
        require: [true, "Please Provide a password"],
    }
});
const userModel = mongoose_1.default.model('User', userSchema);
exports.default = userModel;
//# sourceMappingURL=UserModel.js.map