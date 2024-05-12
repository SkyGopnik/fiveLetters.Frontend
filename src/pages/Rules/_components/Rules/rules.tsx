import classNames from "classnames";
import { FunctionComponent } from "react";

import { Text } from "components/Text";

import { RulesProps } from "./types";

import style from "./rules.module.scss";

export const Rules: FunctionComponent<RulesProps> = (
  { className, rules, ...rest }
) => (
  <div {...rest} className={classNames(style.rules, className)}>
    {rules.map((rule, index) => (
      <div className={style.item} key={index}>
        <div className={style.letter}>
          A
        </div>
        <Text type="b3">{rule}</Text>
      </div>
    ))}
  </div>
);
