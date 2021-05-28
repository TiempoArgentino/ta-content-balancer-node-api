"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteAllPosts = exports.updateAuthorFromAllPosts = exports.deleteTermsById = exports.deletePostById = exports.updatePostById = exports.getPostById = exports.getPosts = exports.getPostsWithCriteria = exports.createAllPosts = exports.createPost = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = require("mongoose");

var _Post = _interopRequireDefault(require("../models/Post"));

var _User = _interopRequireDefault(require("../models/User"));

// import { reset } from "nodemon";

/* *************************************************** */

/* *************************************************** */
var createPost = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, postId, title, url, headband, imgURL, isOpinion, section, authors, tags, themes, places, newPost, postSaved;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, postId = _req$body.postId, title = _req$body.title, url = _req$body.url, headband = _req$body.headband, imgURL = _req$body.imgURL, isOpinion = _req$body.isOpinion, section = _req$body.section, authors = _req$body.authors, tags = _req$body.tags, themes = _req$body.themes, places = _req$body.places;
            newPost = new _Post["default"]({
              postId: postId,
              title: title,
              url: url,
              headband: headband,
              imgURL: imgURL,
              isOpinion: isOpinion,
              section: section,
              authors: authors,
              tags: tags,
              themes: themes,
              places: places
            });
            _context.prev = 2;
            _context.next = 5;
            return newPost.save();

          case 5:
            postSaved = _context.sent;
            res.status(201).json(postSaved);
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            res.status(401).json({
              message: "QUERY ERROR ".concat(_context.t0.message, " ")
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 9]]);
  }));

  return function createPost(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/* *************************************************** */

/* *************************************************** */


exports.createPost = createPost;

var createAllPosts = function createAllPosts(req, res) {
  var allAPostsObject = req.body;
  allAPostsObject.map( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(post) {
      var postId, title, url, headband, imgURL, isOpinion, section, authors, tags, themes, places, newPost, postSaved;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              postId = post.postId, title = post.title, url = post.url, headband = post.headband, imgURL = post.imgURL, isOpinion = post.isOpinion, section = post.section, authors = post.authors, tags = post.tags, themes = post.themes, places = post.places;
              newPost = new _Post["default"]({
                postId: postId,
                title: title,
                url: url,
                headband: headband,
                imgURL: imgURL,
                isOpinion: isOpinion,
                section: section,
                authors: authors,
                tags: tags,
                themes: themes,
                places: places
              });
              _context2.prev = 2;
              _context2.next = 5;
              return newPost.save();

            case 5:
              postSaved = _context2.sent;
              res.status(201).json(postSaved);
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](2);
              res.status(401).json({
                message: "QUERY ERROR ".concat(_context2.t0.message, " ")
              });

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 9]]);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }());
  res.status(200).json("Posts has been created");
};
/* *************************************************** */

/* *************************************************** */


exports.createAllPosts = createAllPosts;

var getPostsWithCriteria = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body2, amounts, userPreference, mostViewed, ignore, totalPosts, mostViewsPosts, userPreferencePosts, editorialPostsCount, editorialPosts;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body2 = req.body, amounts = _req$body2.amounts, userPreference = _req$body2.userPreference, mostViewed = _req$body2.mostViewed, ignore = _req$body2.ignore;
            totalPosts = [];
            _context3.prev = 2;
            _context3.next = 5;
            return _Post["default"].find({
              postId: {
                $in: mostViewed
              }
            });

          case 5:
            mostViewsPosts = _context3.sent;
            mostViewsPosts.map(function (post) {
              ignore.push(post.postId);
            }); // ***********************************************
            // ***********************************************
            //userPreference posts find
            // ***********************************************
            // ***********************************************

            _context3.next = 9;
            return _Post["default"].find({
              $and: [{
                $or: [{
                  "authors.authorId": {
                    $in: userPreference.authors
                  }
                }, {
                  "authors.authorId": {
                    $in: userPreference.authors
                  }
                }, {
                  "tags.tagId": {
                    $in: userPreference.tags
                  }
                }, {
                  section: {
                    $in: userPreference.sections
                  }
                }, {
                  "themes.themeId": {
                    $in: userPreference.themes
                  }
                }, {
                  place: {
                    $in: userPreference.place
                  }
                }]
              }, {
                postId: {
                  $nin: ignore
                }
              }]
            });

          case 9:
            userPreferencePosts = _context3.sent;
            userPreferencePosts.map(function (post) {
              ignore.push(post.postId);
            }); // ***********************************************
            // ***********************************************
            //editorial posts find
            // ***********************************************
            // ***********************************************

            editorialPostsCount = amounts.userPreference + amounts.editorial + amounts.mostViewed - (mostViewsPosts.length + userPreferencePosts.length);
            _context3.next = 14;
            return _Post["default"].find({
              postId: {
                $nin: ignore
              }
            }).limit(editorialPostsCount);

          case 14:
            editorialPosts = _context3.sent;
            totalPosts = [].concat((0, _toConsumableArray2["default"])(userPreferencePosts), (0, _toConsumableArray2["default"])(mostViewsPosts), (0, _toConsumableArray2["default"])(editorialPosts));
            res.status(200).json(totalPosts);
            _context3.next = 23;
            break;

          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](2);
            console.log("ERROR ", _context3.t0);
            res.status(401).json({
              message: "QUERY ERROR ".concat(_context3.t0.message, " ")
            });

          case 23:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 19]]);
  }));

  return function getPostsWithCriteria(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
/* *************************************************** */

/* *************************************************** */


exports.getPostsWithCriteria = getPostsWithCriteria;

var getPosts = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var posts;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Post["default"].find();

          case 2:
            posts = _context4.sent;
            res.json(posts);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getPosts(_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();
/* *************************************************** */

/* *************************************************** */


exports.getPosts = getPosts;

var getPostById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var post;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Post["default"].findById(req.params.postId);

          case 2:
            post = _context5.sent;
            res.status(200).json(post);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getPostById(_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}();
/* *************************************************** */

/* *************************************************** */


exports.getPostById = getPostById;

var updatePostById = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var updatedPost;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _Post["default"].findOneAndUpdate({
              postId: req.params.postId
            }, req.body, {
              "new": true
            });

          case 2:
            updatedPost = _context6.sent;
            res.status(200).json(updatedPost);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updatePostById(_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}();
/* *************************************************** */

/* *************************************************** */


exports.updatePostById = updatePostById;

var deletePostById = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            // await Post.findByIdAndDelete(req.params.postId);
            // await Post.deleteMany();
            _Post["default"].deleteOne({
              postId: req.params.postId
            }, function (err) {
              if (err) console.log(err);
              console.log("Successful deletion");
            });

            res.status(204).json();

          case 2:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function deletePostById(_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}();
/* *************************************************** */

/* *************************************************** */


exports.deletePostById = deletePostById;

var deleteTermsById = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var taxonomy, idToDelete, idFields, taxIdField, query;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            taxonomy = req.body.taxonomy;
            idToDelete = req.body.id;
            idFields = {
              authors: "authorId",
              tags: "tagsId",
              places: "placeId",
              themes: "themeId"
            };
            taxIdField = idFields[taxonomy];
            query = "".concat(taxonomy, ".").concat(taxIdField);

            _Post["default"].find((0, _defineProperty2["default"])({}, query, idToDelete), function (err, results) {
              console.log(results);
              results.map(function (post) {
                post[taxonomy].map(function (item) {
                  console.log(item);
                  if (item[taxIdField] === idToDelete) item.remove();
                });
                post.save();
              });
            });

            res.status(204).json("taxonimy has beer deleted from all posts");

          case 7:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function deleteTermsById(_x14, _x15) {
    return _ref8.apply(this, arguments);
  };
}();
/* *************************************************** */

/* *************************************************** */


exports.deleteTermsById = deleteTermsById;

var updateAuthorFromAllPosts = /*#__PURE__*/function () {
  var _ref9 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9(req, res) {
    var _req$body3, authorId, authorName, authorUrl, authorImg;

    return _regenerator["default"].wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _req$body3 = req.body, authorId = _req$body3.authorId, authorName = _req$body3.authorName, authorUrl = _req$body3.authorUrl, authorImg = _req$body3.authorImg;

            _Post["default"].find({
              "authors.authorId": req.body.authorId
            }, function (err, results) {
              console.log(results);
              results.map(function (post) {
                post.authors.map(function (author) {
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

          case 3:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function updateAuthorFromAllPosts(_x16, _x17) {
    return _ref9.apply(this, arguments);
  };
}();
/* *************************************************** */

/* *************************************************** */

/* *************************************************** */


exports.updateAuthorFromAllPosts = updateAuthorFromAllPosts;

var deleteAllPosts = /*#__PURE__*/function () {
  var _ref10 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10(req, res) {
    return _regenerator["default"].wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return _Post["default"].deleteMany();

          case 3:
            res.status(204).json();
            _context10.next = 9;
            break;

          case 6:
            _context10.prev = 6;
            _context10.t0 = _context10["catch"](0);
            res.status(401).json({
              message: "QUERY ERROR ".concat(_context10.t0.message, " ")
            });

          case 9:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10, null, [[0, 6]]);
  }));

  return function deleteAllPosts(_x18, _x19) {
    return _ref10.apply(this, arguments);
  };
}();

exports.deleteAllPosts = deleteAllPosts;