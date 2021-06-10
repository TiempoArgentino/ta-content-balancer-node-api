"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clientApiKeyValidation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apykeyAuthController = require("../controllers/apykey.auth.controller.js");

var clientApiKeyValidation = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var clientApiKey, clientDetails;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // let clientApiKey = req.get("api_key");
            clientApiKey = req.headers["api_key"];

            if (clientApiKey) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", res.status(400).send({
              status: false,
              response: "Missing Api Key"
            }));

          case 3:
            _context.prev = 3;
            _context.next = 6;
            return (0, _apykeyAuthController.getClientDetails)(clientApiKey);

          case 6:
            clientDetails = _context.sent;

            if (!clientDetails) {
              _context.next = 11;
              break;
            }

            next();
            _context.next = 12;
            break;

          case 11:
            return _context.abrupt("return", res.status(400).send({
              status: false,
              response: "Invalid Api Key"
            }));

          case 12:
            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](3);
            console.log("%%%%%%%% error :", _context.t0);
            return _context.abrupt("return", res.status(400).send({
              status: false,
              response: "Invalid Api Key"
            }));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 14]]);
  }));

  return function clientApiKeyValidation(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.clientApiKeyValidation = clientApiKeyValidation;