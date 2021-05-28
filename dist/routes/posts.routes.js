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
// router.post("/", [authJwt.verifyToken, authJwt.isAdmin], postsCtrl.createPost);
router.post("/", postsCtrl.createPost); //CREATE ALL POSTS

router.post("/allposts", postsCtrl.createAllPosts); //GET ALL ITEMS

router.get("/", postsCtrl.getPosts); //GET ITEMS WITH MULTIPLE CRITERIA

router.get("/personalized", postsCtrl.getPostsWithCriteria); //GET ITEM BY ID

router.get("/:postId", postsCtrl.getPostById); //PUT ITEM BY ID
// router.put("/:postId", authJwt.verifyToken, postsCtrl.updatePostById);

router.put("/:postId", postsCtrl.updatePostById); //DELETE ITEM BY ID
// router.delete(
//   "/:postId",
//   [authJwt.verifyToken, authJwt.isAdmin],
//   postsCtrl.deletePostById
// );

router["delete"]("/:postId", postsCtrl.deletePostById); //DELETE TERMS BY ID

router.put("/terms/:id", postsCtrl.deleteTermsById); //UPDATE AUTHOR FROM ALL POSTS

router.put("/updateauthor/:id", postsCtrl.updateAuthorFromAllPosts); // router.delete(
//   "/",
//   [authJwt.verifyToken, authJwt.isAdmin],
//   postsCtrl.deleteAllPosts
// );

router["delete"]("/", postsCtrl.deleteAllPosts);
var _default = router;
exports["default"] = _default;