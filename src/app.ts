import Fastify from "fastify";
import { userRoutes } from "./modules/user";
import authPlugin from "./plugins/auth";
import protectedRoutes from "./modules/protected";

const app = Fastify();

app.register(authPlugin);
app.register(protectedRoutes, { prefix: "/api" });
app.register(userRoutes, { prefix: "/api" });

export default app;
