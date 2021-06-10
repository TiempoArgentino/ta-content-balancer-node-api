import express from "express";
import morgan from "morgan";
import cors from "cors";

import postsRoutes from "./routes/posts.routes";

const app = express();

//settings
app.set("port", process.env.PORT || 3003);

//middlewares
app.use(
  cors({
    origin: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Index!",
  });
});

app.use("/api/posts", postsRoutes);

export default app;
