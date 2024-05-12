import classNames from "classnames";
import { createElement, FunctionComponent } from "react";

import { Text } from "components/Text";

import { PlaceholderProps } from "./types";

import style from "./placeholder.module.scss";

export const Placeholder: FunctionComponent<PlaceholderProps> = (
  {
    className,
    type = "failed",
    word,
    title,
    description,
    icon,
    ...props
  }
) => (
  <div
    className={classNames(
      style.placeholder,
      style[`placeholderType_${type}`],
      className
    )}
    {...props}
  >
    {word && (
      <Text
        className={style.word}
        type="h1"
        tag="span"
      >
        {word}
      </Text>
    )}
    <Text className={style.title} type="h1" tag="h1">
      {title}
    </Text>
    <Text className={style.description} type="b3">
      {description}
    </Text>
    {createElement(icon, {
      className: style.icon
    })}
  </div>
);
