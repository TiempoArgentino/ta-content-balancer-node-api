"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var postsCtrl = _interopRequireWildcard(require("../controllers/posts.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
//POST ITEM
router.post("/", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], postsCtrl.createPost); //GET ALL ITEMS

router.get("/", postsCtrl.getPosts); //GET ITEM BY ID

router.get("/:postId", postsCtrl.getPostById); //PUT ITEM BY ID

router.put("/:postId", _middlewares.authJwt.verifyToken, postsCtrl.updatePostById); //DELETE ITEM BY ID

router["delete"]("/:postId", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], postsCtrl.deletePostById);
var _default = router;
exports["default"] = _default;