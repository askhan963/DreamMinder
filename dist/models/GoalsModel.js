"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const GoalsSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        require: true,
        ref: "User"
    },
    text: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});
const GoalModel = mongoose_1.default.model('Goals', GoalsSchema);
exports.default = GoalModel;
//# sourceMappingURL=GoalsModel.js.map