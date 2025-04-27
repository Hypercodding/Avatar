"use client";

// src/Avatar.tsx
import React from "react";
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
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: [
        bgMap[variant],
        borderMap[border],
        "flex items-center justify-center text-white overflow-hidden"
      ].join(" "),
      style: { display: "flex", justifyContent: "center", alignItems: "center", color: "white", background: bgMap[variant], width: sizeMap[size], height: sizeMap[size], borderRadius: borderMap[border], overflow: "hidden" }
    },
    src ? /* @__PURE__ */ React.createElement("img", { src, alt: userName, style: { width: "100%", height: "100%", objectFit: "cover" } }) : /* @__PURE__ */ React.createElement("p", null, firstLetter)
  );
};
var Avatar_default = Avatar;
export {
  Avatar_default as default
};
//# sourceMappingURL=Avatar.mjs.map