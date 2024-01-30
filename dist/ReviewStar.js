"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _FaRegStar = _interopRequireDefault(require("./FaRegStar"));
var _FaStar = _interopRequireDefault(require("./FaStar"));
require("./reviewStar.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var ReviewStar = function ReviewStar(_ref) {
  var reviewCount = _ref.reviewCount,
    reviewClick = _ref.reviewClick;
  var reviewArry = _toConsumableArray(Array(reviewClick).keys());
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-1"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    onClick: function onClick() {
      return reviewCount(1);
    },
    className: "cursor-pointer"
  }, /*#__PURE__*/_react["default"].createElement(_FaRegStar["default"], null)), /*#__PURE__*/_react["default"].createElement("span", {
    onClick: function onClick() {
      return reviewCount(2);
    },
    className: "cursor-pointer"
  }, /*#__PURE__*/_react["default"].createElement(_FaRegStar["default"], null)), /*#__PURE__*/_react["default"].createElement("span", {
    onClick: function onClick() {
      return reviewCount(3);
    },
    className: "cursor-pointer"
  }, /*#__PURE__*/_react["default"].createElement(_FaRegStar["default"], null)), /*#__PURE__*/_react["default"].createElement("span", {
    onClick: function onClick() {
      return reviewCount(4);
    },
    className: "cursor-pointer"
  }, /*#__PURE__*/_react["default"].createElement(_FaRegStar["default"], null)), /*#__PURE__*/_react["default"].createElement("span", {
    onClick: function onClick() {
      return reviewCount(5);
    },
    className: "cursor-pointer"
  }, /*#__PURE__*/_react["default"].createElement(_FaRegStar["default"], null))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute left-0 top-0"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex gap-1"
  }, reviewArry === null || reviewArry === void 0 ? void 0 : reviewArry.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      onClick: function onClick() {
        return reviewCount(i + 1);
      },
      className: "cursor-pointer"
    }, /*#__PURE__*/_react["default"].createElement(_FaStar["default"], null));
  })))));
};
var _default = exports["default"] = ReviewStar;