// src/plugins/auth.ts
import { FastifyPluginAsync } from "fastify";
import jwt from "jsonwebtoken";

const authPlugin: FastifyPluginAsync = async (fastify) => {
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
      const decoded = jwt.verify(token, process.env.SUPABASE_JWT_SECRET!);
      console.log("✅ Decoded JWT:", decoded);
      request.user = decoded;
    } catch (err) {
      console.error("❌ Invalid JWT:", err);
      return reply.status(401).send({ message: "Invalid token" });
    }
  });
};

export default authPlugin;
