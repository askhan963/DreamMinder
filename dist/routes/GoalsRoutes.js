"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GoalsConstroller_1 = require("../controllers/GoalsConstroller");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = express_1.default.Router();
router.post('/goals', authMiddleware_1.default, GoalsConstroller_1.createGoal);
router.get('/goals', authMiddleware_1.default, GoalsConstroller_1.getGoals);
router.put('/goals/:id', authMiddleware_1.default, GoalsConstroller_1.updateGoal);
router.delete('/goals/:id', authMiddleware_1.default, GoalsConstroller_1.deleteGoal);
exports.default = router;
//# sourceMappingURL=GoalsRoutes.js.map