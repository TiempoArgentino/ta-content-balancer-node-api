"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _posts = _interopRequireDefault(require("./routes/posts.routes"));

var app = (0, _express["default"])(); //settings

app.set("port", process.env.PORT || 3003); //middlewares

app.use((0, _cors["default"])({
  origin: true
}));
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.get("/", function (req, res) {
  res.status(200).json({
    message: "Index!"
  });
});
app.use("/api/posts", _posts["default"]);
var _default = app;
exports["default"] = _default;