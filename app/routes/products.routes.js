"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var procuctsCtrl = _interopRequireWildcard(require("../controllers/products.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.post("/", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], procuctsCtrl.createProduct);
router.get("/", procuctsCtrl.getProducts);
router.get("/:productId", procuctsCtrl.getProductById);
router.put("/:productId", _middlewares.authJwt.verifyToken, procuctsCtrl.updateProductById);
router["delete"]("/:productId", [_middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin], procuctsCtrl.deleteProductById);
var _default = router;
exports["default"] = _default;