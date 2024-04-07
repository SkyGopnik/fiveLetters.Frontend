import { Outlet } from "react-router";

import { Background } from "components/Background";

export const DefaultLayout = () => (
  <Background>
    <Outlet />
  </Background>
);
