import { ReactElement } from "react";
import { FirstLetter } from "../app/utils/Name";

type Variant = "cyan" | "red" | "pink";
type Size = "sm" | "md" | "lg";
type Border = "sm" | "md" | "lg" | "xl" | "full";

const sizeMap: Record<Size, string> = {
  sm: "32px",
  md: "48px",
  lg: "64px",
};

const bgMap: Record<Variant, string> = {
  cyan: "bg-cyan-300",
  red: "bg-red-400",
  pink: "bg-pink-300",
};

// New: map each Border to its Tailwind class
const borderMap: Record<Border, string> = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
};

type ImageProps = {
  variant?: Variant;
  src?: string; // Original src to fetch
  size: Size;
  border: Border;
  userName: string;
};
export const Avatar = ({
  variant,
  src,
  size,
  border,
  userName,
}: ImageProps): ReactElement => {
  const firstLetter = FirstLetter(userName); // Call the function here to get the string

  return (
    <div
      className={[
        bgMap[variant!],
        borderMap[border],
        "flex items-center justify-center text-white overflow-hidden",
      ].join(" ")}
      style={{ width: sizeMap[size], height: sizeMap[size] }}
    >
      {src ? (
        <img src={src} alt={userName} className="w-full h-full object-cover" />
      ) : (
        <p>{firstLetter}</p>
      )}
    </div>
  );
};
