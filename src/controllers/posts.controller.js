import { Mongoose } from "mongoose";
import { reset } from "nodemon";
import Post from "../models/Post";

/* *************************************************** */
/* *************************************************** */
export const createPost = async (req, res) => {
  const {
    postId,
    title,
    url,
    headband,
    imgURL,
    isOpinion,
    section,
    authors,
    tags,
    themes,
    places,
  } = req.body;
  console.log(req.body);
  const newPost = new Post({
    postId,
    title,
    url,
    headband,
    imgURL,
    isOpinion,
    section,
    authors,
    tags,
    themes,
    places,
  });
  const postSaved = await newPost.save();
  res.status(201).json(postSaved);
};

/* *************************************************** */
/* *************************************************** */
export const getPosts = async (req, res) => {
  const posts = await Post.find();
  // leer los parametro y hacer una busqueda con parametros.
  //select * from post where id=id, tags=tags,
  res.json(posts);
};

/* *************************************************** */
/* *************************************************** */
export const getPostById = async (req, res) => {
  const post = await Post.findById(req.params.postId);
  res.status(200).json(post);
};

/* *************************************************** */
/* *************************************************** */
export const updatePostById = async (req, res) => {
  const updatedPost = await Post.findOneAndUpdate(req.params.postId, req.body, {
    new: true,
  });
  res.status(200).json(updatedPost);
};

/* *************************************************** */
/* *************************************************** */
export const deletePostById = async (req, res) => {
  await Post.findByIdAndDelete(req.params.postId);
  res.status(204).json();
};
