"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const userRouter = express_1.default.Router();
const UsersControllers_1 = require("../controllers/UsersControllers");
userRouter.post('/', UsersControllers_1.createUser);
userRouter.post('/login', UsersControllers_1.LoginUser);
userRouter.get('/me', authMiddleware_1.default, UsersControllers_1.getMe);
exports.default = userRouter;
//# sourceMappingURL=UsersRoutes.js.map