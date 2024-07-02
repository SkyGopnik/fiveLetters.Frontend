import classNames from "classnames";
import { FunctionComponent } from "react";

import InfoIcon from "./_assets/info.svg";

import { InfoProps } from "./types";

import style from "./index.module.scss";

export const Info: FunctionComponent<InfoProps> = (
  { className, color = "red", ...props }
) => (
  <div
    className={classNames(
      style.info,
      style[`infoColor_${color}`],
      className
    )}
    {...props}
  >
    <InfoIcon />
  </div>
);
