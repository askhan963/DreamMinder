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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGoal = exports.updateGoal = exports.createGoal = exports.getGoals = void 0;
const GoalsModel_1 = __importDefault(require("../models/GoalsModel"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
const getGoals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const goals = yield GoalsModel_1.default.find({
            user: req.user.id
        });
        if (!goals) {
            console.log("Noting found in DB...");
        }
        res.status(200).json(goals);
    }
    catch (error) {
        console.log("Something went Wrong...", error);
    }
});
exports.getGoals = getGoals;
const createGoal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.body)
    try {
        const newGoal = yield GoalsModel_1.default.create({
            text: req.body.text,
            user: req.user.id
        });
        if (newGoal) {
            res.status(200).json(newGoal);
        }
    }
    catch (error) {
        console.log("Something went Wrong...", error);
    }
});
exports.createGoal = createGoal;
const updateGoal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // Find the goal by its ID
        const foundGoal = yield GoalsModel_1.default.findById(req.params.id);
        if (!foundGoal) {
            return res.status(404).json({ message: "Goal not found" });
        }
        // Ensure the goal has a user associated with it
        if (!foundGoal.user) {
            return res.status(400).json({ message: "Goal has no associated user" });
        }
        // Check if the user exists in req.user (populated by the protect middleware)
        const user = yield UserModel_1.default.findById((_a = req.user) === null || _a === void 0 ? void 0 : _a.id);
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
        // Compare user ObjectIds using Mongoose's equals method
        if (!foundGoal.user.equals(user._id)) {
            return res.status(403).json({ message: "User not authorized to update this goal" });
        }
        // Update the goal
        const updatedGoal = yield GoalsModel_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedGoal);
    }
    catch (error) {
        console.log("Something went wrong...", error);
        res.status(500).json({ message: "Server error" });
    }
});
exports.updateGoal = updateGoal;
const deleteGoal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        // Find the goal by its ID
        const foundGoal = yield GoalsModel_1.default.findById(req.params.id);
        if (!foundGoal) {
            return res.status(404).json({ message: "Goal not found" });
        }
        // Check if the user making the request is authorized to delete the goal
        if (!foundGoal.user || !foundGoal.user.equals((_a = req.user) === null || _a === void 0 ? void 0 : _a.id)) {
            return res.status(403).json({ message: "User not authorized to delete this goal" });
        }
        // Delete the goal
        const deletedGoal = yield GoalsModel_1.default.findByIdAndDelete(req.params.id);
        if (!deletedGoal) {
            return res.status(500).json({ message: "Failed to delete the goal" });
        }
        // Respond with success and the deleted goal's ID
        res.status(200).json({ message: "Goal deleted", id: deletedGoal._id });
    }
    catch (error) {
        console.log("Something went wrong...", error);
        res.status(500).json({ message: "Server error" });
    }
});
exports.deleteGoal = deleteGoal;
//# sourceMappingURL=GoalsConstroller.js.map