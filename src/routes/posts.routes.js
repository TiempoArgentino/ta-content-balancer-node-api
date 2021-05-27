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
router.get("/personalized", postsCtrl.getPostsWithCriteria);

//GET ITEM BY ID
router.get("/:postId", postsCtrl.getPostById);

//PUT ITEM BY ID
// router.put("/:postId", authJwt.verifyToken, postsCtrl.updatePostById);
router.put("/:postId", postsCtrl.updatePostById);
//DELETE ITEM BY ID
// router.delete(
//   "/:postId",
//   [authJwt.verifyToken, authJwt.isAdmin],
//   postsCtrl.deletePostById
// );
router.delete("/:postId", postsCtrl.deletePostById);

// router.delete(
//   "/",
//   [authJwt.verifyToken, authJwt.isAdmin],
//   postsCtrl.deleteAllPosts
// );
router.delete("/", postsCtrl.deleteAllPosts);
export default router;
