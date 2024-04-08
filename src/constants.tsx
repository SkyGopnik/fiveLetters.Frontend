import { RouteObject } from "react-router";

import { DefaultLayout } from "layouts/Default";

import GamePage from "pages/Game";
import MainPage from "pages/Main";
import OnboardPage from "pages/Onboard";
import RulesPage from "pages/Rules";
import StartPage from "pages/Start";

export const ROUTES: Array<RouteObject> = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <StartPage />
      },
      {
        path: "/onboard",
        element: <OnboardPage />
      },
      {
        path: "/main",
        element: <MainPage />
      },
      {
        path: "/rules",
        element: <RulesPage />
      },
      {
        path: "/game",
        element: <GamePage />
      }
    ]
  }
];
