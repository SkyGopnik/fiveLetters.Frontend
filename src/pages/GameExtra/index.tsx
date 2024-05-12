import { useNavigate } from "react-router";

import { Button } from "components/Button";
import { Placeholder } from "components/Placeholder";

import Icon from "./_assets/icon.svg";

import style from "./index.module.scss";

export const GameExtraPage = () => {
  const navigate = useNavigate();

  const handleWatch = () => {
    navigate(-1);
  };

  const handleEnd = () => {
    navigate("/main");
  };

  return (
    <>
      <Placeholder
        className={style.placeholder}
        title="Слово не отгадано"
        description="Посмотри рекламу и получи 2 попытки"
        icon={Icon}
      />
      <div className={style.actions}>
        <Button onClick={handleWatch}>
          Смотреть рекламу
        </Button>
        <Button
          color="blue"
          onClick={handleEnd}
        >
          Завершить игру
        </Button>
      </div>
    </>
  );
};
