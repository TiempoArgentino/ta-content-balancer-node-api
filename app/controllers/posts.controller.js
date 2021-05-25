"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePostById = exports.updatePostById = exports.getPostById = exports.getPosts = exports.createPost = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = require("mongoose");

var _nodemon = require("nodemon");

var _Post = _interopRequireDefault(require("../models/Post"));

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
            console.log(req.body);
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
            _context.next = 5;
            return newPost.save();

          case 5:
            postSaved = _context.sent;
            res.status(201).json(postSaved);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createPost(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/* *************************************************** */

/* *************************************************** */


exports.createPost = createPost;

var getPosts = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var posts;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Post["default"].find();

          case 2:
            posts = _context2.sent;
            // leer los parametro y hacer una busqueda con parametros.
            //select * from post where id=id, tags=tags,
            res.json(posts);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getPosts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
/* *************************************************** */

/* *************************************************** */


exports.getPosts = getPosts;

var getPostById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var post;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Post["default"].findById(req.params.postId);

          case 2:
            post = _context3.sent;
            res.status(200).json(post);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getPostById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
/* *************************************************** */

/* *************************************************** */


exports.getPostById = getPostById;

var updatePostById = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var updatedPost;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Post["default"].findOneAndUpdate(req.params.postId, req.body, {
              "new": true
            });

          case 2:
            updatedPost = _context4.sent;
            res.status(200).json(updatedPost);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updatePostById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
/* *************************************************** */

/* *************************************************** */


exports.updatePostById = updatePostById;

var deletePostById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Post["default"].findByIdAndDelete(req.params.postId);

          case 2:
            res.status(204).json();

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deletePostById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deletePostById = deletePostById;