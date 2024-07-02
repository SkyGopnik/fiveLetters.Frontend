import { useMemo } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

import { Info } from "components";
import { Button } from "components/Button";
import { Placeholder } from "components/Placeholder";

import { useGufoSearch } from "hooks";

import { declareNumber } from "utils/declare-number";

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

  const starStringFormat = useMemo(
    () => declareNumber(
      Number(scoreDelta),
      ["звездочка", "звездочки", "звездочек"]
    ),
    [scoreDelta]
  );

  const { handleSearch } = useGufoSearch(word);

  return (
    <>
      <Info onClick={handleSearch} />
      <Placeholder
        className={style.placeholder}
        type="success"
        word={word}
        title="Слово отгадано"
        description={`${starStringFormat} в твой счет`}
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
