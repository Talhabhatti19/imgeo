import { createBrowserRouter } from "react-router-dom";

import Imgeo from "../components/Imgeo";
import Login from "../components/Login/Login";
import Layout from "../Layout/Layout";
import ManageRoles from "../pages/Settings/ManageRoles";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/imgeo",
        element: <Imgeo />,
      },
    ],
  },
]);
