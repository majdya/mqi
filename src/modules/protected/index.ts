import { FastifyPluginAsync } from "fastify";

const protectedRoutes: FastifyPluginAsync = async (fastify) => {
  // 👇 Example GET route that requires authentication
  fastify.get("/hello", async (request, reply) => {
    console.log(request.user);

    if (!request.user) {
      return reply.status(401).send({ message: "Unauthorized" });
    }

    return {
      message: `Hello ${request.user.email || "user"}!`,
      user: request.user,
    };
  });
};

export default protectedRoutes;
