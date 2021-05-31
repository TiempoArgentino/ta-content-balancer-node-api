import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    // expire_at: { type: Date, default: Date.now, expires: 60 },
    expireAt: { type: Date, default: Date.now, index: { expires: "20d" } },

    postId: { type: Number, required: true, trim: true, unique: true },

    place: { type: Number, default: null },

    themes: [{ themeId: Number }],

    title: { type: String, trim: true, default: null },

    url: {
      type: String,
      required: true,
      default: null,
      lowercase: true,
      trim: true,
    },

    headband: { type: String, trim: true, default: null },

    imgURL: { type: String, lowercase: true, default: null },

    isOpinion: { type: Boolean, default: null },

    section: { type: Number, required: true, default: null },

    authors: [
      {
        authorId: { type: Number, required: true },
        authorName: { type: String, required: true },
        authorUrl: { type: String, required: true, lowercase: true },
        authorImg: { type: String, lowercase: true },
      },
    ],

    tags: [{ tagId: Number }],

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
