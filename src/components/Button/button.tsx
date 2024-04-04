import classNames from "classnames";

import { ButtonProps } from "./types";

import style from "./button.module.scss";

export const Button = ({ className, color = "white", ...props }: ButtonProps) => (
  <button
    {...props}
    className={classNames(style.button, style[`buttonColor_${color}`], className)}
  />
);
