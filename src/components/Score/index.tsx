import classNames from "classnames";
import { FunctionComponent } from "react";

import { Text } from "components/Text";

import StarIcon from "assets/star.svg";

import { ScoreProps } from "./types";

import style from "./index.module.scss";

export const Score: FunctionComponent<ScoreProps> = (
  { className, type = "game", value, ...props }
) => (
  <div
    className={classNames(
      style.score,
      style[`scoreType_${type}`],
      className
    )}
    {...props}
  >
    <Text type="h5">Общий счет</Text>
    <Text className={style.description} type="b2">
      <span>{value}</span>
      <StarIcon className={style.icon} />
    </Text>
  </div>
);
