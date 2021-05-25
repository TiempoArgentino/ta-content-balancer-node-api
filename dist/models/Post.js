"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var postSchema = new _mongoose.Schema({
  postId: {
    type: Number,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  url: {
    type: String,
    required: true,
    trim: true
  },
  headband: {
    type: String,
    required: true,
    trim: true
  },
  imgURL: String,
  isOpinion: {
    type: Boolean,
    required: true
  },
  section: Number,
  authors: [{
    authorId: Number,
    authorName: String,
    authorUrl: String,
    authorImage: String
  }],
  tags: [{
    tagsId: Number
  }],
  themes: [{
    themeId: Number
  }],
  places: [{
    placeId: Number
  }]
}, {
  timestamps: true,
  versionkey: false
});

var _default = (0, _mongoose.model)("Post", postSchema);

exports["default"] = _default;