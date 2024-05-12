import { useMemo } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

import { Button } from "components/Button";
import { Placeholder } from "components/Placeholder";

import Icon from "./_assets/icon.svg";

import style from "./index.module.scss";

export const GameSuccessPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const word = useMemo(
    () => searchParams.get("word") ?? "",
    [searchParams]
  );

  const scoreDelta = useMemo(
    () => searchParams.get("delta") ?? "",
    [searchParams]
  );

  return (
    <>
      <Placeholder
        className={style.placeholder}
        word={word}
        title="Слово отгадано"
        description={`${scoreDelta} звездочка в твой счет`}
        icon={Icon}
      />
      <div className={style.actions}>
        <Button onClick={() => navigate(-1)}>
          Следующий раунд
        </Button>
        <Button
          color="green"
          onClick={() => navigate("/rating")}
        >
          Рейтинг
        </Button>
      </div>
    </>
  );
};
