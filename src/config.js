import { config } from "dotenv";
config();

export default {
  SECRET: "rest-api-auth",
  mongodbURL: process.env.MONGO_URI || "mongodb://localhost/postsapi",
};
