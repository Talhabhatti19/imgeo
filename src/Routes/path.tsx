import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Lander";
import Leads from "../pages/CustomerManagement/Leads";
import CustomerList from "../pages/CustomerManagement/CustomerList";
import ProductManagement from "../pages/ProductManagement/ProductManagement";
import Departments from "../pages/DepartmentManagement/Departments";
import SourceOfRevenue from "../pages/Lov/SourceOfRevenue";
import PurposeOfRevenue from "../pages/Lov/PurposeOfRevenue";
import CheckTypes from "../pages/Lov/CheckTypes";
import TypesReasons from "../pages/Lov/TypesReasons";
import HomePageManage from "../components/HomePageManagement/HomePageManagement";
import ManagementForm from "../components/HomePageManagement/ManagementForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/leads",
        element: <Leads />,
      },
      {
        path: "/customer-list",
        element: <CustomerList />,
      },
      {
        path: "/products",
        element: <ProductManagement />,
      },
      {
        path: "/all-departments",
        element: <Departments />,
      },
      {
        path: "/source-of-revenue",
        element: <SourceOfRevenue />,
      },
      {
        path: "/check-type",
        element: <CheckTypes />,
      },
      {
        path: "/purpose-of-finance",
        element: <PurposeOfRevenue />,
      },
      {
        path: "/type-reason",
        element: <TypesReasons />,
      },
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
