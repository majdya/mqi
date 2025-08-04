"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authPlugin = async (fastify) => {
    console.log("authPlugin");
    fastify.decorateRequest("user", null);
    fastify.addHook("preHandler", async (request, reply) => {
        const authHeader = request.headers.authorization;
        console.log("authHeader", authHeader);
        if (!authHeader?.startsWith("Bearer ")) {
            return reply.status(401).send({ message: "Missing token" });
        }
        const token = authHeader.split(" ")[1];
        console.log("token", token);
        try {
            const decoded = jsonwebtoken_1.default.verify(token, process.env.SUPABASE_JWT_SECRET);
            console.log("✅ Decoded JWT:", decoded);
            request.user = decoded;
        }
        catch (err) {
            console.error("❌ Invalid JWT:", err);
            return reply.status(401).send({ message: "Invalid token" });
        }
    });
};
exports.default = authPlugin;
