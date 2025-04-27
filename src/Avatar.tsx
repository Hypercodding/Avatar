"use client"
import React, { ReactElement } from "react";

type Variant = "cyan" | "red" | "pink" | "blue" | "green" | "yellow" | "purple" | "orange";
type Size = "sm" | "md" | "lg";
type Border = "sm" | "md" | "lg" | "xl" | "full";

const sizeMap: Record<Size, string> = {
  sm: "24px",
  md: "32px",
  lg: "40px",
};

const bgMap: Record<Variant, string> = {
  cyan: "#67e8f9",
  red: "#f87171",
  pink: "#f9a8d4",
  blue: "#60a5fa",
  green: "#34d399",
  yellow: "#facc15",
  purple: "#a78bfa",
  orange: "#fb923c",
};

const borderMap: Record<Border, string> = {
  sm: "2px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  full: "50%",
};

type AvatarProps = {
  variant?: Variant;
  src?: string;
  size: Size;
  border: Border;
  userName: string;
};

const Avatar = ({
  variant = "cyan",
  src,
  size,
  border,
  userName,
}: AvatarProps): ReactElement => {
  const FirstLetter = (name: string) => {
    return name.split("").at(0)?.toUpperCase();
  };

  const firstLetter = FirstLetter(userName);

  return (
    <div
      className={[
        bgMap[variant],
        borderMap[border],
        "flex items-center justify-center text-white overflow-hidden",
      ].join(" ")}
      style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", background: bgMap[variant], width: sizeMap[size], height: sizeMap[size], borderRadius: borderMap[border], overflow: "hidden" }}
    >
      {src ? (
        <img src={src} alt={userName} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <p>{firstLetter}</p>
      )}
    </div>
  );
};

export default Avatar;
