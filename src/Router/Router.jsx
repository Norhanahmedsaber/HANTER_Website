import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Playground from "../Pages/Playground/Playground";
import NewRule from "../Pages/NewRule/NewRule";
import ViewRule from "../Pages/ViewRule/ViewRule";
import NewProject from "../Pages/NewProject/NewProject";
import Reports from "../Pages/Reports/Reports";
import Rules from "../Pages/Rules/Rules";
import { ServerDown } from "../Pages/ServerDown/ServerDown";
import Projects from "../Pages/Projects/Projects";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ProjectLocally from "../Pages/Projects/ProjectLocally";
export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/playground",
      element: <Playground />,
    },
    {
      path: "/new_rule",
      element: <NewRule />,
    },
    {
      path: "/rule/:id",
      element: <ViewRule />,
    },
    {
      path: "/new_project",
      element: <NewProject />,
    },
    {
      path: "/reports/:id",
      element: <Reports />,
    },
    {
      path: "projects",
      element: <Projects />,
    },
    {
      path: "/server_error",
      element: <ServerDown />,
    },
    {
      path: "/rules",
      element: <Rules />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/local",
      element: <ProjectLocally />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}
