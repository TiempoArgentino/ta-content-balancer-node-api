"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var clientSchema = new _mongoose.Schema({
  name: String,
  category: String,
  phone: Number,
  shop: String,
  cc: Boolean
}, {
  timestamps: true,
  versionkey: false
});

var _default = (0, _mongoose.model)("Client", clientSchema);

exports["default"] = _default;