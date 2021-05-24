"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var postSchema = new _mongoose.Schema({
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
  authors: [{
    authorId: Number,
    authorName: String
  }],
  category: [{
    categoryId: Number,
    categoryName: String
  }],
  imgURL: String
}, {
  timestamps: true,
  versionkey: false
});

var _default = (0, _mongoose.model)("Post", postSchema);

exports["default"] = _default;