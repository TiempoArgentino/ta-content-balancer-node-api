import { Schema, model } from "mongoose";

const clientSchema = new Schema(
  {
    name: String,
    category: String,
    phone: Number,
    shop: String,
    cc: Boolean,
  },
  {
    timestamps: true,
    versionkey: false,
  }
);

export default model("Client", clientSchema);
