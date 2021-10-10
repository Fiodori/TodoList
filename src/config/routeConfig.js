import { lazy } from "react";

export const routesConfig = [
  {
    path: "/",
    component: lazy(() => import("pages/Task")),
  },
];
