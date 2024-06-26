import classNames from "classnames";
import { createElement, FunctionComponent } from "react";
import { DivProps } from "react-html-props";

import { TextProps } from "./types";

export const Text: FunctionComponent<TextProps> = (
  { className, type, tag = "p", ...props }
) => createElement(
  tag as unknown as FunctionComponent<DivProps>,
  {
    ...props,
    className: classNames(type, className)
  }
);
