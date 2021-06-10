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
router.post("/", _middlewares.authUtils.clientApiKeyValidation, postsCtrl.createPost); //CREATE ALL POSTS

router.post("/allposts", _middlewares.authUtils.clientApiKeyValidation, postsCtrl.createAllPosts); //GET ALL ITEMS

router.get("/", _middlewares.authUtils.clientApiKeyValidation, postsCtrl.getPosts); //GET ITEMS WITH MULTIPLE CRITERIA

router.post("/personalized", postsCtrl.getPostsWithCriteria); //GET ITEM BY ID

router.get("/:postId", _middlewares.authUtils.clientApiKeyValidation, postsCtrl.getPostById); //PUT UPDATE POST

router.put("/:postId", _middlewares.authUtils.clientApiKeyValidation, postsCtrl.updatePostById);
router["delete"]("/:postId", _middlewares.authUtils.clientApiKeyValidation, postsCtrl.deletePostById); //DELETE TERMS BY ID

router.put("/terms/:id", _middlewares.authUtils.clientApiKeyValidation, postsCtrl.deleteTermsById); //UPDATE AUTHOR FROM ALL POSTS

router.put("/updateauthor/:id", _middlewares.authUtils.clientApiKeyValidation, postsCtrl.updateAuthorFromAllPosts);
router["delete"]("/", _middlewares.authUtils.clientApiKeyValidation, postsCtrl.deleteAllPosts);
var _default = router;
exports["default"] = _default;