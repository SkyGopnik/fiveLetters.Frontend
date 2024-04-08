import { Button } from "components/Button";
import { Close } from "components/Close";
import { Text } from "components/Text";

import { Rules } from "./_components/Rules";

import style from "./index.module.scss";

export default function RulesPage() {
  return (
    <div className={style.page}>
      <Close />
      <Text className={style.title} type="h1" tag="h1">
        Правила игры
      </Text>
      <Rules className={style.rules} />
      <div className={style.actions}>
        <Button>Начать игру</Button>
        <Button color="cyan">Больше не показывать</Button>
      </div>
    </div>
  );
}
