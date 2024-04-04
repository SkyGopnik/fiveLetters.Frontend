import classNames from "classnames";
import { createElement, FunctionComponent } from "react";
import { DivProps } from "react-html-props";
import style from "style/mixins/font.scss";

import { TextProps } from "./types";

export const Text: FunctionComponent<TextProps> = ({ className, type, tag = "p", ...props }) => {
  return createElement(
    tag as unknown as FunctionComponent<DivProps>,
    {
      ...props,
      className: classNames(style[type], className)
    }
  );
};
