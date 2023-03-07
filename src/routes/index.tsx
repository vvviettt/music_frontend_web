import { AuthLayout } from "@layouts/AuthLayout";
import MainLayout from "@layouts/MainLayout";
import { lazy } from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
const HomePage = lazy(() => import("@pages/home/HomePage"));
const LoginPage = lazy(() => import("@pages/Login/LoginPage"));

const routesConfig: RouteObject[] = [
  {
    path: "",
    element: <MainLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
];

export const routes = createBrowserRouter(routesConfig);
