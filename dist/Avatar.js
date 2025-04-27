"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/Avatar.tsx
var Avatar_exports = {};
__export(Avatar_exports, {
  default: () => Avatar_default
});
module.exports = __toCommonJS(Avatar_exports);
var import_react = __toESM(require("react"));
var sizeMap = {
  sm: "24px",
  md: "32px",
  lg: "40px"
};
var bgMap = {
  cyan: "#67e8f9",
  red: "#f87171",
  pink: "#f9a8d4",
  blue: "#60a5fa",
  green: "#34d399",
  yellow: "#facc15",
  purple: "#a78bfa",
  orange: "#fb923c"
};
var borderMap = {
  sm: "2px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  full: "50%"
};
var Avatar = ({
  variant = "cyan",
  src,
  size,
  border,
  userName
}) => {
  const FirstLetter = (name) => {
    var _a;
    return (_a = name.split("").at(0)) == null ? void 0 : _a.toUpperCase();
  };
  const firstLetter = FirstLetter(userName);
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: [
        bgMap[variant],
        borderMap[border],
        "flex items-center justify-center text-white overflow-hidden"
      ].join(" "),
      style: { display: "flex", justifyContent: "center", alignItems: "center", color: "white", background: bgMap[variant], width: sizeMap[size], height: sizeMap[size], borderRadius: borderMap[border], overflow: "hidden" }
    },
    src ? /* @__PURE__ */ import_react.default.createElement("img", { src, alt: userName, style: { width: "100%", height: "100%", objectFit: "cover" } }) : /* @__PURE__ */ import_react.default.createElement("p", null, firstLetter)
  );
};
var Avatar_default = Avatar;
//# sourceMappingURL=Avatar.js.map