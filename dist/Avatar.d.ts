import { ReactElement } from 'react';

type Variant = "cyan" | "red" | "pink" | "blue" | "green" | "yellow" | "purple" | "orange";
type Size = "sm" | "md" | "lg";
type Border = "sm" | "md" | "lg" | "xl" | "full";
type AvatarProps = {
    variant?: Variant;
    src?: string;
    size: Size;
    border: Border;
    userName: string;
};
declare const Avatar: ({ variant, src, size, border, userName, }: AvatarProps) => ReactElement;

export { Avatar as default };
