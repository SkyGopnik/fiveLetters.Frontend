import classNames from "classnames";
import { FunctionComponent } from "react";

import { Button as ButtonCore } from "components/Button";

import ArrowRightIcon from "./_assets/arrow-right.svg";

import { ButtonProps } from "./types";

import style from "./button.module.scss";

export const Button: FunctionComponent<ButtonProps> = ({ type, ...props }) => (
  <ButtonCore
    {...props}
    className={classNames(
      style.button,
      style[`buttonType_${type}`],
      props.className
    )}
  >
    {type === "play" ? "Играть" : <ArrowRightIcon />}
  </ButtonCore>
);
