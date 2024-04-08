import { createElement, FunctionComponent } from "react";

import { ICONS } from "./constants";

import { CloseProps } from "./types";

import style from "./close.module.scss";

export const Close: FunctionComponent<CloseProps> = ({ type = "blue" }) => (
  <div className={style.close}>
    {createElement(ICONS[type], {
      className: style.icon
    })}
  </div>
);
