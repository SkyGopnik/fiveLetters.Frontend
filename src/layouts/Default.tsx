import { Outlet } from "react-router";

import { Background } from "components/Background";

export const BackgroundLayout = () => (
  <Background>
    <Outlet />
  </Background>
);
