import { FunctionComponent } from "react";
import { Outlet, useNavigate } from "react-router";
import { useGameStore } from "store";

import { Background } from "components/Background";
import { Close } from "components/Close";
import { Container } from "components/Container";
import { Score } from "components/Score";

import { GameStatusLayoutProps } from "./types";

import style from "./index.module.scss";

export const GameStatusLayout: FunctionComponent<GameStatusLayoutProps> = (
  { type }
) => {
  const { game } = useGameStore();

  const navigate = useNavigate();

  return (
    <Background type={type}>
      <Container className={style.page}>
        <Close type={type} onClick={() => navigate(-1)} />
        <Score type="info" value={game?.score || 0} />
        <Outlet />
      </Container>
    </Background>
  );
};
