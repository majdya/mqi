"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protectedRoutes = async (fastify) => {
    // 👇 Example GET route that requires authentication
    fastify.get("/hello", async (request, reply) => {
        if (!request.user) {
            return reply.status(401).send({ message: "Unauthorized" });
        }
        return {
            message: `Hello ${request.user.email || "user"}!`,
            user: request.user,
        };
    });
};
exports.default = protectedRoutes;
