import classNames from "classnames";
import { forwardRef } from "react";

import { ContainerProps } from "./types";

import style from "./container.module.scss";

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    { className, ...props },
    ref
  ) => (
    <div
      className={classNames(style.container, className)}
      ref={ref}
      {...props}
    />
  )
);

Container.displayName = "Container";
