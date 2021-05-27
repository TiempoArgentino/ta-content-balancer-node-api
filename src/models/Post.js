import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    // expire_at: { type: Date, default: Date.now, expires: 60 },
    expireAt: { type: Date, default: Date.now, index: { expires: "1d" } },

    postId: { type: Number, required: true, trim: true, unique: true },

    place: { type: Number },

    themes: [{ themeId: Number }],

    title: { type: String, trim: true },

    url: { type: String, required: true, lowercase: true, trim: true },

    headband: { type: String, trim: true },

    imgURL: { type: String, lowercase: true },

    isOpinion: { type: Boolean },

    section: { type: Number, required: true },

    authors: [
      {
        authorId: { type: Number, required: true },
        authorName: { type: String, required: true },
        authorUrl: { type: String, required: true, lowercase: true },
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
