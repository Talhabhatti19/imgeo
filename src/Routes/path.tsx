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
    ],
  },
]);
