import { createBrowserRouter } from "react-router-dom";
import DasbhboardHeader from "../components/DashboardHeader/Header";
import HomePageManage from "../components/HomePageManagement/HomePageManagement";
import ManagementForm from "../components/HomePageManagement/ManagementForm";

import Layout from "../Layout/Lander";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home-page-management",
        element: <HomePageManage />,
      },
      {
        path: "home-page/setting",
        element: <ManagementForm />,
      },
    ],
  },
]);
