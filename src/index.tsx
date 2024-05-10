import bridge from "@vkontakte/vk-bridge";
import axios from "axios";
import React from "react";
import { createRoot } from "react-dom/client";
import { createMemoryRouter,
  RouterProvider
} from "react-router-dom";

import { ROUTES } from "./constants";

import "./style/index.scss";

if (document.location.href) {
  axios.defaults.headers.common["Authorization"] =
    `VK ${document.location.href.replace("file", "https")}`;
}

axios.defaults.baseURL = "https://five-letters-api.skgopnik.ru/";
axios.defaults.responseType = "json";

const router = createMemoryRouter(ROUTES, {
  initialEntries: ["/"]
});

bridge.send("VKWebAppInit")
  .catch((err) => console.error(err));

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
