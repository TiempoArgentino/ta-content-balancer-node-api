import { Router } from "express";

const router = Router();

import * as postsCtrl from "../controllers/posts.controller";
import { authJwt } from "../middlewares";

//POST ITEM
// router.post("/", [authJwt.verifyToken, authJwt.isAdmin], postsCtrl.createPost);
router.post("/", postsCtrl.createPost);
//CREATE ALL POSTS
router.post("/allposts", postsCtrl.createAllPosts);

//GET ALL ITEMS
router.get("/", postsCtrl.getPosts);

//GET ITEMS WITH MULTIPLE CRITERIA
router.post("/personalized", postsCtrl.getPostsWithCriteria);

//GET ITEM BY ID
router.get("/:postId", postsCtrl.getPostById);

//PUT UPDATE POST
// router.put("/:postId", authJwt.verifyToken, postsCtrl.updatePostById);
router.put("/:postId", postsCtrl.updatePostById);

//DELETE ITEM BY ID
// router.delete(
//   "/:postId",
//   [authJwt.verifyToken, authJwt.isAdmin],
//   postsCtrl.deletePostById
// );
router.delete("/:postId", postsCtrl.deletePostById);

//DELETE TERMS BY ID
router.put("/terms/:id", postsCtrl.deleteTermsById);

//UPDATE AUTHOR FROM ALL POSTS
router.put("/updateauthor/:id", postsCtrl.updateAuthorFromAllPosts);
// router.delete(
//   "/",
//   [authJwt.verifyToken, authJwt.isAdmin],
//   postsCtrl.deleteAllPosts
// );
router.delete("/", postsCtrl.deleteAllPosts);
export default router;
