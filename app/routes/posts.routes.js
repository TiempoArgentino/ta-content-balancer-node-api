import { Router } from "express";

const router = Router();

import * as postsCtrl from "../controllers/posts.controller";
import { authJwt } from "../middlewares";

//POST ITEM
router.post("/", [authJwt.verifyToken, authJwt.isAdmin], postsCtrl.createPost);
//GET ALL ITEMS
router.get("/", postsCtrl.getPosts);

//GET ITEM BY ID
router.get("/:postId", postsCtrl.getPostById);

//PUT ITEM BY ID
router.put("/:postId", authJwt.verifyToken, postsCtrl.updatePostById);

//DELETE ITEM BY ID
router.delete(
  "/:postId",
  [authJwt.verifyToken, authJwt.isAdmin],
  postsCtrl.deletePostById
);

export default router;
