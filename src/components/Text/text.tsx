import classNames from "classnames";
import { createElement, FunctionComponent } from "react";
import { DivProps } from "react-html-props";

import { TextProps } from "./types";

import style from "./text.module.scss";

export const Text: FunctionComponent<TextProps> = (
  { className, type, hasEllipsis, tag = "p", ...props }
) => createElement(
  tag as unknown as FunctionComponent<DivProps>,
  {
    ...props,
    className: classNames(
      type,
      { [style.ellipsis]: hasEllipsis },
      className
    )
  }
);
