"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const userRoutes = async (fastify) => {
    console.log("User routes loaded");
    fastify.get("/users/:id", async (request, reply) => {
        reply.send({ id: request.params.id, name: "Majd" });
    });
};
exports.userRoutes = userRoutes;
