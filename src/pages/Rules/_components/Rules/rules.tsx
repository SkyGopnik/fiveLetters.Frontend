import classNames from "classnames";
import { FunctionComponent } from "react";
import { DivProps } from "react-html-props";

import { Text } from "components/Text";

import style from "./rules.module.scss";

export const Rules: FunctionComponent<DivProps> = ({ className, ...rest }) => (
  <div {...rest} className={classNames(style.rules, className)}>
    {[...Array(3)].map((_, index) => (
      <div className={style.item} key={index}>
        <div className={style.letter}>
          A
        </div>
        <Text type="b4">
          правильная позиция <br />
          буквы в слове
        </Text>
      </div>
    ))}
  </div>
);
