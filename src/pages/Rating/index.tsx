import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

import { RatingItem } from "pages/Rating/types";

import { Close } from "components/Close";
import { Container } from "components/Container";
import { Text } from "components/Text";

import { Item } from "./_components/Item";

import { useAsyncEffect } from "hooks/useAsyncEffect";

import style from "./index.module.scss";

export const RatingPage = () => {
  const [rating, setRating] = useState<Array<RatingItem>>();

  const navigate = useNavigate();

  useAsyncEffect(async () => {
    try {
      const { data } = await axios.get("/game/rating");
      setRating(data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Container className={style.rating}>
      <Close onClick={() => navigate(-1)} />
      <Text
        className={style.title}
        type="h1"
        tag="h1"
      >
        Рейтинг
      </Text>
      {rating && (
        <div className={style.list}>
          {rating.map((item, index) => {
            const {
              firstName,
              lastName,
              photoUrl,
              platform
            } = item.user.profile;

            const name = `${firstName} ${lastName}`;

            const VKUrl = `https://vk.com/id${item.user.profile.id}`;

            return (
              <Item
                key={item.user.id}
                avatar={photoUrl}
                name={name}
                score={item.record}
                position={index + 1}
                href={platform === "VK" ? VKUrl : ""}
                target="_blank"
              />
            );
          })}
        </div>
      )}
    </Container>
  );
};
