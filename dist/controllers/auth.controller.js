"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signIn = exports.signUp = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var _Role = _interopRequireDefault(require("../models/Role"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

/* *************************************************** */

/* *************************************************** */

/* *******   USE HERE EXPRESS-PROMISE-ROUTER   ******* */

/* *************************************************** */

/* *************************************************** */

/* *************************************************** */

/* *************************************************** */
var signUp = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, username, email, password, roles, api_key, newUser, foundRoles, role, savedUser, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password, roles = _req$body.roles, api_key = _req$body.api_key;
            _context.t0 = _User["default"];
            _context.t1 = username;
            _context.t2 = email;
            _context.t3 = api_key;
            _context.next = 7;
            return _User["default"].encryptPassword(password);

          case 7:
            _context.t4 = _context.sent;
            _context.t5 = {
              username: _context.t1,
              email: _context.t2,
              api_key: _context.t3,
              password: _context.t4
            };
            newUser = new _context.t0(_context.t5);

            if (!roles) {
              _context.next = 18;
              break;
            }

            _context.next = 13;
            return _Role["default"].find({
              name: {
                $in: roles
              }
            });

          case 13:
            foundRoles = _context.sent;
            console.log(foundRoles);
            newUser.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 22;
            break;

          case 18:
            _context.next = 20;
            return _Role["default"].findOne({
              name: "user"
            });

          case 20:
            role = _context.sent;
            newUser.roles = [role._id];

          case 22:
            _context.next = 24;
            return newUser.save();

          case 24:
            savedUser = _context.sent;
            console.log(savedUser);
            token = _jsonwebtoken["default"].sign({
              id: savedUser._id
            }, _config["default"].SECRET, {
              expiresIn: 86400 //24 hours

            });
            res.status(200).json({
              token: token
            });

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/* *************************************************** */

/* *************************************************** */


exports.signUp = signUp;

var signIn = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var userFound, matchPassword, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User["default"].findOne({
              email: req.body.email
            }).populate("roles");

          case 2:
            userFound = _context2.sent;

            if (userFound) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              messaje: "user not found"
            }));

          case 5:
            _context2.next = 7;
            return _User["default"].comparePassword(req.body.password, userFound.password);

          case 7:
            matchPassword = _context2.sent;

            if (matchPassword) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              token: null,
              messaje: "invalid password"
            }));

          case 10:
            token = _jsonwebtoken["default"].sign({
              id: userFound._id
            }, _config["default"].SECRET, {
              expiresIn: 86400 //24 hours

            });
            res.status(200).json({
              token: token
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signIn(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signIn = signIn;