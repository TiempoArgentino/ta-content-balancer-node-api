import { Router } from "express";

const router = Router();

import * as postsCtrl from "../controllers/posts.controller";
import { authJwt, authUtils } from "../middlewares";

//POST ITEM
router.post("/", authUtils.clientApiKeyValidation, postsCtrl.createPost);

//CREATE ALL POSTS
router.post(
  "/allposts",
  authUtils.clientApiKeyValidation,
  postsCtrl.createAllPosts
);

//GET ALL ITEMS
router.get("/", authUtils.clientApiKeyValidation, postsCtrl.getPosts);

//GET ITEMS WITH MULTIPLE CRITERIA
router.post("/personalized", postsCtrl.getPostsWithCriteria);

//GET ITEM BY ID
router.get("/:postId", authUtils.clientApiKeyValidation, postsCtrl.getPostById);

//PUT UPDATE POST
router.put(
  "/:postId",
  authUtils.clientApiKeyValidation,
  postsCtrl.updatePostById
);

router.delete(
  "/:postId",
  authUtils.clientApiKeyValidation,
  postsCtrl.deletePostById
);

//DELETE TERMS BY ID
router.put(
  "/terms/:id",
  authUtils.clientApiKeyValidation,
  postsCtrl.deleteTermsById
);

//UPDATE AUTHOR FROM ALL POSTS
router.put(
  "/updateauthor/:id",
  authUtils.clientApiKeyValidation,
  postsCtrl.updateAuthorFromAllPosts
);

router.delete("/", authUtils.clientApiKeyValidation, postsCtrl.deleteAllPosts);
export default router;
