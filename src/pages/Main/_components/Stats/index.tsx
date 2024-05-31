import { FunctionComponent } from "react";

import { Text } from "components/Text";

import StarIcon from "assets/star.svg";

import { StatsProps } from "./types";

import style from "./index.module.scss";

export const Stats: FunctionComponent<StatsProps> = ({ record, position }) => (
  <div className={style.stats}>
    <div className={style.item}>
      <Text type="h2" tag="h2">Твой рекорд</Text>
      <Text className={style.description} type="b1">
        <span>{record}</span>
        <StarIcon />
      </Text>
    </div>
    <div className={style.item}>
      <Text type="h2" tag="h2">Твоя позиция</Text>
      <Text className={style.description} type="b1">
        {position}
      </Text>
    </div>
  </div>
);
