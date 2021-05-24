"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _initialSetup = require("./libs/initialSetup");

var _posts = _interopRequireDefault(require("./routes/posts.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _users = _interopRequireDefault(require("./routes/users.routes"));

var app = (0, _express["default"])(); //settings

app.set("port", process.env.PORT || 3001); //delete for tiempo arg

(0, _initialSetup.createRoles)(); //middlewares

app.use((0, _cors["default"])({
  origin: "http://localhost:".concat(app.get("port"))
}));
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.get("/", function (req, res) {
  res.json({
    message: "Index!"
  });
});
app.use("/api/posts", _posts["default"]);
app.use("/api/auth", _auth["default"]);
app.use("/api/users", _users["default"]);
var _default = app;
exports["default"] = _default;