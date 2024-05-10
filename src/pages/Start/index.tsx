import { useState } from "react";
import { Navigate, useNavigate } from "react-router";

import { Button } from "components/Button";
import { Container } from "components/Container";

import { useAsyncEffect } from "hooks/useAsyncEffect";

import { StorageUtil } from "utils/storage/storage";

import LogoIcon from "./_assets/logo.svg";

import style from "./index.module.scss";

export default function StartPage() {
  const [isOnboardWatched, setIsOnboardWatched] = useState(false);
  const [isStorageFetched, setIsStorageFetched] = useState(false);

  const navigate = useNavigate();

  useAsyncEffect(async () => {
    const data = Boolean(await StorageUtil.get("isOnboardWatched"));

    if (data) {
      setIsOnboardWatched(true);
    }

    setIsStorageFetched(true);
  }, []);

  if (!isStorageFetched) {
    return null;
  }

  return (
    <Container className={style.content}>
      <LogoIcon className={style.logo} />
      <Button
        className={style.button}
        onClick={() => navigate("/onboard")}
      >
        Начать игру
      </Button>
      {isOnboardWatched && (
        <Navigate to="/main" replace={true} />
      )}
    </Container>
  );
}
