import { lazy } from "react";

export const LazyTopLevelPage = lazy(
  () => import("../pages/TopLevelPage/TopLevelPage"),
);
