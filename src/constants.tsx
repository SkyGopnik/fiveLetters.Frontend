import { RouteObject } from "react-router";

import { DefaultLayout } from "layouts/Default";

import MainPage from "pages/Main";
import OnboardPage from "pages/Onboard";
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
      }
    ]
  }
];
