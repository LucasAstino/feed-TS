import style from "./Avatar.module.css";
import { React, ImgHTMLAttributes } from "react";

interface avatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: avatarProps) {
  return (
    <img
      className={hasBorder ? style.avatarWithBorder : style.avatar}
      {...props}
    />
  );
}
