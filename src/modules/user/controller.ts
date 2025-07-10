import { FastifyRequest, FastifyReply } from "fastify";

export async function getUserController(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  // Here you'd call service or DB
  reply.send({ id: request.params.id, name: "Majd" });
}
