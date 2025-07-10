import { FastifyRequest, FastifyReply, FastifyPluginAsync } from "fastify";

export const userRoutes: FastifyPluginAsync = async (fastify) => {
  console.log("User routes loaded");

  fastify.get(
    "/users/:id",
    async (
      request: FastifyRequest<{ Params: { id: string } }>,
      reply: FastifyReply
    ) => {
      reply.send({ id: request.params.id, name: "Majd" });
    }
  );
};
