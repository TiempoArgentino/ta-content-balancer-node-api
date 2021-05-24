import express from "express";
import morgan from "morgan";
import cors from "cors";
import { createRoles } from "./libs/initialSetup";

import postsRoutes from "./routes/posts.routes";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/users.routes";

const app = express();

//settings
app.set("port", process.env.PORT || 3001);

//delete for tiempo arg
createRoles();

//middlewares
app.use(
  cors({
    origin: `http://localhost:${app.get("port")}`,
  })
);
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Index!",
  });
});
app.use("/api/posts", postsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

export default app;
