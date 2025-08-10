import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import App from "../components/App/App";
import paths from "./paths";
import TopLevelPage from "../pages/TopLevelPage/TopLevelPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={`${paths.topLevel}`} replace />,
      },
      {
        path: `${paths.topLevel}`,
        element: (
          <Suspense>
            <TopLevelPage />
          </Suspense>
        ),
      },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
