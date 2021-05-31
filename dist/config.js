"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  SECRET: "rest-api-auth",
  mongodbURL: process.env.MONGO_URI || "mongodb://taroot:supertierraS2BR2@190.105.238.93:27017"
};
exports["default"] = _default;