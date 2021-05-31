import { config } from "dotenv";
config();

export default {
  SECRET: "rest-api-auth",
  mongodbURL:
    process.env.MONGO_URI ||
    "mongodb://taroot:supertierraS2BR2@190.105.238.93:27017",
};
