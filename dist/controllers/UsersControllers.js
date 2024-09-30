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
exports.getMe = exports.LoginUser = exports.createUser = void 0;
const UserModel_1 = __importDefault(require("../models/UserModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const registeredUser = yield UserModel_1.default.find({ email: email });
        if (registeredUser.length !== 0) {
            res.status(400).json({ "message": "User Already Exists..." });
        }
        else {
            const saltValue = yield bcrypt_1.default.genSalt(10);
            const hashedPass = yield bcrypt_1.default.hash(password, saltValue);
            // console.log("Plain Password: ", password)
            // console.log("Hasheed Password: ", hashedPass)
            const newUser = yield UserModel_1.default.create({ name, email, password: hashedPass });
            res.status(201).json({
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                token: generateToken(newUser._id.toString())
            });
        }
    }
    catch (error) {
        console.log("Something went Wrong...", error);
    }
});
exports.createUser = createUser;
const LoginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const registeredUser = yield UserModel_1.default.findOne({ email });
        // const saltValue = await bcrypt.genSalt(10);
        if (registeredUser && (yield bcrypt_1.default.compare(password, registeredUser.password || ''))) {
            res.status(200).json({
                id: registeredUser._id,
                name: registeredUser.name,
                email: registeredUser.email,
                token: generateToken(registeredUser._id.toString())
            });
        }
        else {
            res.status(400).json({ "message": "Wrong Creadientials..." });
        }
    }
    catch (error) {
        console.log("Something went Wrong...", error);
    }
});
exports.LoginUser = LoginUser;
const getMe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield UserModel_1.default.findById(req.user.id);
        res.status(200).json({
            id: user === null || user === void 0 ? void 0 : user._id,
            name: user === null || user === void 0 ? void 0 : user.name,
            email: user === null || user === void 0 ? void 0 : user.email
        });
    }
    catch (error) {
        console.log("Something went Wrong...", error);
    }
});
exports.getMe = getMe;
const generateToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, process.env.JWT_SECRET || 'anc123', {
        expiresIn: '30d'
    });
};
//# sourceMappingURL=UsersControllers.js.map