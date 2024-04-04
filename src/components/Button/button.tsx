import classNames from "classnames";
import { FunctionComponent } from "react";

import { ButtonProps } from "./types";

import style from "./button.module.scss";

export const Button: FunctionComponent<ButtonProps> = (
  { className, color = "white", ...props }
) => (
  <button
    {...props}
    className={classNames(
      style.button,
      style[`buttonColor_${color}`],
      className
    )}
  />
);
