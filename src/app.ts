import Fastify from "fastify";
import { userRoutes } from "./modules/user";

const app = Fastify();

app.register(userRoutes, { prefix: "/api" });

export default app;
