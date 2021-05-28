"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _mongoose = require("mongoose");

var _Schema;

var postSchema = new _mongoose.Schema((_Schema = {
  // expire_at: { type: Date, default: Date.now, expires: 60 },
  expireAt: {
    type: Date,
    "default": Date.now,
    index: {
      expires: "1d"
    }
  },
  postId: {
    type: Number,
    required: true,
    trim: true,
    unique: true
  },
  place: {
    type: Number
  },
  themes: [{
    themeId: Number
  }],
  title: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  headband: {
    type: String,
    trim: true
  },
  imgURL: {
    type: String,
    lowercase: true
  },
  isOpinion: {
    type: Boolean
  },
  section: {
    type: Number,
    required: true
  },
  authors: [{
    authorId: {
      type: Number,
      required: true
    },
    authorName: {
      type: String,
      required: true
    },
    authorUrl: {
      type: String,
      required: true,
      lowercase: true
    },
    authorImg: {
      type: String,
      lowercase: true
    }
  }],
  tags: [{
    tagsId: Number
  }]
}, (0, _defineProperty2["default"])(_Schema, "themes", [{
  themeId: Number
}]), (0, _defineProperty2["default"])(_Schema, "places", [{
  placeId: Number
}]), _Schema), {
  timestamps: true,
  versionkey: false
}); // postSchema.index({ expire_at: 1 }, { expireAfterSeconds: 0 });

var _default = (0, _mongoose.model)("Post", postSchema);

exports["default"] = _default;