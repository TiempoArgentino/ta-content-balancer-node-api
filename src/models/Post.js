import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    postId: {
      type: Number,
      required: true,
      trim: true,
    },
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
    headband: {
      type: String,
      required: true,
      trim: true,
    },
    imgURL: String,
    isOpinion: {
      type: Boolean,
      required: true,
    },
    section: Number,
    authors: [
      {
        authorId: Number,
        authorName: String,
        authorUrl: String,
        authorImage: String,
      },
    ],
    tags: [
      {
        tagsId: Number,
      },
    ],
    themes: [
      {
        themeId: Number,
      },
    ],
    places: [
      {
        placeId: Number,
      },
    ],
  },
  {
    timestamps: true,
    versionkey: false,
  }
);

export default model("Post", postSchema);
