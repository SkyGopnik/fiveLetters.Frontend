import { RouteObject } from "react-router";

import { BackgroundLayout } from "layouts/Default";
import { GameStatusLayout } from "layouts/GameStatus";

import GamePage from "pages/Game";
import { GameExtraPage } from "pages/GameExtra";
import { GameFailedPage } from "pages/GameFailed";
import { GameSuccessPage } from "pages/GameSuccess";
import MainPage from "pages/Main";
import OnboardPage from "pages/Onboard";
import { RatingPage } from "pages/Rating";
import RulesPage from "pages/Rules";
import StartPage from "pages/Start";

export const ROUTES: Array<RouteObject> = [
  {
    element: <BackgroundLayout />,
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
      },
      {
        path: "/rating",
        element: <RatingPage />
      }
    ]
  },
  {
    element: <GameStatusLayout type="red" />,
    children: [
      {
        path: "/game/failed",
        element: <GameFailedPage />
      }
    ]
  },
  {
    element: <GameStatusLayout type="blue" closeHidden />,
    children: [
      {
        path: "/game/extra",
        element: <GameExtraPage />
      }
    ]
  },
  {
    element: <GameStatusLayout type="green" />,
    children: [
      {
        path: "/game/success",
        element: <GameSuccessPage />
      }
    ]
  }
];
