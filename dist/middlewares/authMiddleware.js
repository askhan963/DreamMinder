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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UserModel_1 = __importDefault(require("../models/UserModel"));
const protect = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
            // Explicitly cast decoded to the expected interface
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || 'anc123');
            if (!decoded.id) {
                return res.status(401).json({ "message": "Not authorized, invalid token structure" });
            }
            req.user = yield UserModel_1.default.findById(decoded.id).select('-password');
            next();
        }
        else {
            res.status(401).json({ "message": "Not authorized, no token provided" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(401).json({ "message": "Not authorized, token failed" });
    }
});
exports.default = protect;
//# sourceMappingURL=authMiddleware.js.map