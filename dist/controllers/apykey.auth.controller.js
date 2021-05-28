"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClientDetails = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = require("mongoose");

var _User = _interopRequireDefault(require("../models/User"));

var getClientDetails = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(clientApiKey) {
    var api_key;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _User["default"].findOne({
              api_key: clientApiKey
            });

          case 3:
            api_key = _context.sent;

            if (!api_key) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", api_key);

          case 6:
            return _context.abrupt("return", false);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log("ERRRRRRROR ", _context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function getClientDetails(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getClientDetails = getClientDetails;