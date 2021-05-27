import { Mongoose } from "mongoose";
// import { reset } from "nodemon";
import Post from "../models/Post";
import User from "../models/User";
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
  try {
    const postSaved = await newPost.save();
    res.status(201).json(postSaved);
  } catch (error) {
    res.status(401).json({
      message: `QUERY ERROR ${error.message} `,
    });
  }
};
/* *************************************************** */
/* *************************************************** */
export const createAllPosts = (req, res) => {
  const allAPostsObject = req.body;
  allAPostsObject.map(async (post) => {
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
    } = post;

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

    try {
      const postSaved = await newPost.save();
      res.status(201).json(postSaved);
    } catch (error) {
      res.status(401).json({
        message: `QUERY ERROR ${error.message} `,
      });
    }
  });
  res.status(200).json("Posts has been created");
};
/* *************************************************** */
/* *************************************************** */

export const getPostsWithCriteria = async (req, res) => {
  const { amounts, userPreference, mostViewed, ignore } = req.body;
  let totalPosts = [];
  try {
    // ***********************************************
    // ***********************************************
    //mostViews posts find
    // ***********************************************
    // ***********************************************
    const mostViewsPosts = await Post.find({
      postId: { $in: mostViewed },
    });
    mostViewsPosts.map((post) => {
      ignore.push(post.postId);
    });

    // ***********************************************
    // ***********************************************
    //userPreference posts find
    // ***********************************************
    // ***********************************************
    const userPreferencePosts = await Post.find({
      $and: [
        {
          $or: [
            { "authors.authorId": { $in: userPreference.authors } },
            { "authors.authorId": { $in: userPreference.authors } },
            { "tags.tagId": { $in: userPreference.tags } },
            { section: { $in: userPreference.sections } },
            { "themes.themeId": { $in: userPreference.themes } },
            { place: { $in: userPreference.place } },
          ],
        },
        { postId: { $nin: ignore } },
      ],
    });

    userPreferencePosts.map((post) => {
      ignore.push(post.postId);
    });

    // ***********************************************
    // ***********************************************
    //editorial posts find
    // ***********************************************
    // ***********************************************
    let editorialPostsCount =
      amounts.userPreference +
      amounts.editorial +
      amounts.mostViewed -
      (mostViewsPosts.length + userPreferencePosts.length);

    const editorialPosts = await Post.find({ postId: { $nin: ignore } }).limit(
      editorialPostsCount
    );

    totalPosts = [...userPreferencePosts, ...mostViewsPosts, ...editorialPosts];
    res.status(200).json(totalPosts);
  } catch (error) {
    console.log("ERROR ", error);
    res.status(401).json({
      message: `QUERY ERROR ${error.message} `,
    });
  }
};

/* *************************************************** */
/* *************************************************** */
export const getPosts = async (req, res) => {
  const posts = await Post.find();
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
  // const post = await Post.findById(req.params.postIda);
  // res.status(200).json(post);

  const updatedPost = await Post.findOneAndUpdate(
    { _id: req.params.postId },
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedPost);
};

/* *************************************************** */
/* *************************************************** */
export const deletePostById = async (req, res) => {
  await Post.findByIdAndDelete(req.params.postId);
  // await Post.deleteMany();
  res.status(204).json();
};
/* *************************************************** */
/* *************************************************** */
/* *************************************************** */
export const deleteAllPosts = async (req, res) => {
  try {
    await Post.deleteMany();
    res.status(204).json();
  } catch (error) {
    res.status(401).json({
      message: `QUERY ERROR ${error.message} `,
    });
  }
};
