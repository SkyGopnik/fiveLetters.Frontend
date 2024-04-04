import bridge from "@vkontakte/vk-bridge";
import axios from "axios";
import React from "react";
import { createRoot } from "react-dom/client";
import { createMemoryRouter,
  RouterProvider
} from "react-router-dom";

import MainPage from "pages/Main";
import OnboardPage from "pages/Onboard";

import "./style/index.scss";

if (document.location.href) {
  axios.defaults.headers.common["Authorization"] =
    `VK ${document.location.href.replace("file", "https")}`;
}

axios.defaults.baseURL = "https://googler-api.skyreglis.com/";
axios.defaults.responseType = "json";

const router = createMemoryRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/onboard",
    element: <OnboardPage />
  }
], {
  initialEntries: ["/onboard"]
});

bridge.send("VKWebAppInit")
  .catch((err) => console.error(err));

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
