"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const user_1 = require("./modules/user");
const auth_1 = __importDefault(require("./plugins/auth"));
const protected_1 = __importDefault(require("./modules/protected"));
const app = (0, fastify_1.default)();
app.register(auth_1.default);
app.register(protected_1.default, { prefix: "/api" });
app.register(user_1.userRoutes, { prefix: "/api" });
exports.default = app;
