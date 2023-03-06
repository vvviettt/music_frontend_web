import MainLayout from "@layouts/MainLayout";
import { lazy } from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
const HomePage = lazy(() => import("@pages/home/HomePage"));

const routesConfig: RouteObject[] = [
  {
    path: "",
    element: <MainLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
];

export const routes = createBrowserRouter(routesConfig);
