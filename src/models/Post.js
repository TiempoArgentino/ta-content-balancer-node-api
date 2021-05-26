import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    // expire_at: { type: Date, default: Date.now, expires: 60 },
    expireAt: { type: Date, default: Date.now, index: { expires: "1d" } },

    postId: { type: Number, required: true, trim: true, unique: true },

    title: { type: String, required: true, lowercase: true, trim: true },

    url: { type: String, required: true, lowercase: true, trim: true },

    headband: { type: String, required: true, lowercase: true, trim: true },

    imgURL: { type: String, lowercase: true },

    isOpinion: { type: Boolean, lowercase: true, required: true },

    section: Number,

    authors: [
      {
        authorId: Number,
        authorName: { type: String, lowercase: true },
        authorUrl: { type: String, lowercase: true },
        authorImage: { type: String, lowercase: true },
      },
    ],

    tags: [{ tagsId: Number }],

    themes: [{ themeId: Number }],

    places: [{ placeId: Number }],
  },
  {
    timestamps: true,
    versionkey: false,
  }
);
// postSchema.index({ expire_at: 1 }, { expireAfterSeconds: 0 });
export default model("Post", postSchema);
