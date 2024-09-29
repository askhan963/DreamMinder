"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors")); // Import cors
const GoalsRoutes_1 = __importDefault(require("./routes/GoalsRoutes"));
const UsersRoutes_1 = __importDefault(require("./routes/UsersRoutes"));
const dB_1 = __importDefault(require("./config/dB"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5500;
// connect to DB
(0, dB_1.default)();
// Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Use CORS middleware
app.use((0, cors_1.default)()); // Enable CORS for all routes
// Routes
app.use('/api/', GoalsRoutes_1.default);
app.use('/api/users', UsersRoutes_1.default);
// Start the server
app.listen(PORT, () => {
    console.log('The server is running on the Port:', PORT);
});
//# sourceMappingURL=server.js.map