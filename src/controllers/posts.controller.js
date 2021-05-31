import { Mongoose } from "mongoose";
// import { reset } from "nodemon";
import Post from "../models/Post";
import User from "../models/User";
/* *************************************************** */
/* *************************************************** */
export const createPost = async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const postSaved = await newPost.save();
    res.status(201).json(postSaved);
  } catch (error) {
    res.status(400).json({
      message: `QUERY ERROR ${error.message} `,
    });
  }
};
/* *************************************************** */
/* *************************************************** */
export const createAllPosts = (req, res) => {
  const allAPostsObject = req.body;
  const savedPosts = [];
  // try {
  allAPostsObject.map(async (post) => {
    const newPost = new Post(post);
    const postSave = await newPost.save();
    savedPosts.push(postSave);
  });
  res.status(201).json(savedPosts);
  // } catch (error) {
  //   res.status(401).json({
  //     message: `QUERY ERROR ${error.message} `,
  //   });
  // }
};
/* *************************************************** */
/* *************************************************** */

export const getPostsWithCriteria = async (req, res) => {
  const { amounts, userPreference, mostViewed, ignore } = req.body;
  console.log(req.body);
  let totalPosts = [],
    mostViewsPosts = [],
    userPreferencePosts = [],
    editorialPosts = [];

  try {
    // ***********************************************
    // ***********************************************
    //mostViews posts find
    // ***********************************************
    // ***********************************************
    if (amounts.mostViewed > 0) {
      mostViewsPosts = await Post.find({
        postId: { $in: mostViewed },
      }).limit(amounts.mostViewed);

      mostViewsPosts.map((post) => {
        ignore.push(post.postId);
      });
    }
    // ***********************************************
    // ***********************************************
    //userPreference posts find
    // ***********************************************
    // ***********************************************
    if (amounts.userPreference > 0) {
      userPreferencePosts = await Post.find({
        $and: [
          {
            $or: [
              { "authors.authorId": { $in: userPreference.authors } },
              { "tags.tagId": { $in: userPreference.tags } },
              { section: { $in: userPreference.sections } },
              { "themes.themeId": { $in: userPreference.themes } },
              { "places.placeId": { $in: userPreference.places } },
            ],
          },
          { postId: { $nin: ignore } },
        ],
      }).limit(amounts.userPreference);

      userPreferencePosts.map((post) => {
        ignore.push(post.postId);
      });
    }

    // ***********************************************
    // ***********************************************
    //editorial posts find
    // ***********************************************
    // ***********************************************

    const editorialPostsCount =
      amounts.userPreference +
      amounts.editorial +
      amounts.mostViewed -
      (mostViewsPosts.length + userPreferencePosts.length);

    if (editorialPostsCount > 0) {
      editorialPosts = await Post.find({
        postId: { $nin: ignore },
      }).limit(editorialPostsCount);
    }
    console.log("userPreferencePosts.legnth ", userPreferencePosts.length);
    console.log("mostViewsPosts.length ", mostViewsPosts.length);
    console.log("editorialPosts.length ", editorialPosts.length);
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
  const updatedOrCreatedPost = await Post.update(
    { postId: req.body.postId },
    req.body,
    { upsert: true }
  );

  res.status(200).json(updatedOrCreatedPost);
};

/* *************************************************** */
/* *************************************************** */
export const deletePostById = async (req, res) => {
  try {
    Post.deleteOne({ postId: req.params.postId }, function (err) {
      if (err) console.log(err);
      console.log("Successful deletion");
    });
    res.status(204).json();
  } catch (error) {
    res.status(401).json({
      message: `QUERY ERROR ${error.message} `,
    });
  }
};

/* *************************************************** */
/* *************************************************** */
export const deleteTermsById = async (req, res) => {
  const taxonomy = req.body.taxonomy;
  const idToDelete = req.body.id;

  const idFields = {
    authors: "authorId",
    tags: "tagsId",
    places: "placeId",
    themes: "themeId",
  };

  const taxIdField = idFields[taxonomy];
  const query = `${taxonomy}.${taxIdField}`;

  Post.find({ [query]: idToDelete }, function (err, results) {
    console.log(results);
    results.map((post) => {
      post[taxonomy].map((item) => {
        console.log(item);
        if (item[taxIdField] === idToDelete) item.remove();
      });
      post.save();
    });
  });

  res.status(204).json("taxonimy has beer deleted from all posts");
};

/* *************************************************** */
/* *************************************************** */
export const updateAuthorFromAllPosts = async (req, res) => {
  const { authorId, authorName, authorUrl, authorImg } = req.body;

  Post.find({ "authors.authorId": req.body.authorId }, function (err, results) {
    console.log(results);
    results.map((post) => {
      post.authors.map((author) => {
        console.log(author);
        if (author.authorId === req.body.authorId) {
          author.authorName = req.body.authorName;
          author.authorImg = req.body.authorImg;
          author.authorUrl = req.body.authorUrl;
        }
      });
      post.save();
    });
  });

  res.status(204).json("taxonimy has beer deleted from all posts");
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
