import classNames from "classnames";
import { FunctionComponent } from "react";

import { BackgroundProps } from "components/Background/types";

import BackgroundImage from "./_assets/pattern.svg";

import style from "./background.module.scss";

export const Background: FunctionComponent<BackgroundProps> = (
  {
    className,
    type = "cyan",
    children,
    ...props
  }
) => (
  <div
    className={classNames(
      style.background,
      style[`backgroundType_${type}`],
      className
    )}
    {...props}
  >
    <BackgroundImage className={style.pattern} />
    <div className={style.shadow} />
    <div className={style.content}>
      {children}
    </div>
  </div>
);
