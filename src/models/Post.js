import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
    authors: [
      {
        authorId: Number,
        authorName: String,
      },
    ],
    category: [
      {
        categoryId: Number,
        categoryName: String,
      },
    ],
    imgURL: String,
  },
  {
    timestamps: true,
    versionkey: false,
  }
);

export default model("Post", postSchema);
