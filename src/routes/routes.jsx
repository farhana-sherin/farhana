import {
    createBrowserRouter,
  } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/home";
import { ProjectsPage } from "../pages/projects";
import { ContactPage } from "../pages/contact";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/projects",
          element:<ProjectsPage/>
        },
        {
          path:"/contact",
          element:<ContactPage/>
        },
      ],
    },
  ]);