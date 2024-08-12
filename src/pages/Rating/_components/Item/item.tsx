import { FunctionComponent } from "react";

import { Text } from "components/Text";

import StarIcon from "assets/star.svg";

import { ItemProps } from "./types";

import style from "./item.module.scss";

export const Item: FunctionComponent<ItemProps> = (
  { avatar, name, score, position, ...rest }
) => (
  <a className={style.item} {...rest}>
    <img className={style.avatar} src={avatar} alt={`Аватар ${name}`} />
    <div className={style.info}>
      <Text type="h4" tag="h3" hasEllipsis>{name}</Text>
      <Text className={style.score} type="b4">
        <span>{score}</span>
        <StarIcon className={style.icon} />
      </Text>
    </div>
    <Text className={style.position} type="b4">
      {position}
    </Text>
  </a>
);
