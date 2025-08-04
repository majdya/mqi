"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserController = getUserController;
async function getUserController(request, reply) {
    // Here you'd call service or DB
    reply.send({ id: request.params.id, name: "Majd" });
}
