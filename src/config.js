import { config } from "dotenv";
config();

export default {
  SECRET: "rest-api-auth",
  mongodbURL:
    process.env.MONGO_URI ||
    "mongodb+srv://amazing-amy:oUxApIArAhadL30W@cluster0.ir1ed.mongodb.net/tiempo-ar?retryWrites=true&w=majority",
};
