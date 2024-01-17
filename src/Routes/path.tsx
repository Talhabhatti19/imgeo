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
import Dashboard from "../components/Dashboard/Dashboard";
import AllApplication from "../pages/FinancingManagement/AllApplication";
import PendingLoans from "../pages/FinancingManagement/PendingLoans";
import InProgressLoans from "../pages/FinancingManagement/InProgressLoans";
import ApprovedLoans from "../pages/FinancingManagement/ApprovedLoans";
import RejectedLoans from "../pages/FinancingManagement/RejectedLoans";
import InCompleteLoans from "../pages/FinancingManagement/InCompleteLoans";
import CancelledLoans from "../pages/FinancingManagement/CanceledLoans";
import ActivityLoans from "../pages/FinancingManagement/ActivityLoans";
import DashboardSystem from "../pages/systemLogs/DashboardSystem";
import PartnerList from "../pages/PartnerManagement/PartnersList";
import PartnerCommissions from "../pages/PartnerManagement/PartnerCommissions";
import Employees from "../pages/Settings/Employees";
import ManageRoles from "../pages/Settings/ManageRoles";
import Login from "../components/Login/Login";
import ComplianceDashboard from "../components/ComplianceDashboard/ComplianceDashboard";
import DepartmentsPermission from "../pages/DepartmentManagement/DepartmentsPermission";
import ManagePermission from "../pages/Settings/ManagePermission";
import Logs from "../pages/Settings/Logs";

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
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/compliance-dashboard",
        element: <ComplianceDashboard />,
      },
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
        path: "/departments/permissions",
        element: <DepartmentsPermission />,
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
      {
        path: "applications/all",
        element: <AllApplication />,
      },
      {
        path: "applications/pending",
        element: <PendingLoans />,
      },
      {
        path: "applications/in-progress",
        element: <InProgressLoans />,
      },
      {
        path: "applications/approved",
        element: <ApprovedLoans />,
      },
      {
        path: "applications/rejected",
        element: <RejectedLoans />,
      },
      {
        path: "incomplete",
        element: <InCompleteLoans />,
      },
      {
        path: "applications/cancelled",
        element: <CancelledLoans />,
      },
      {
        path: "activity-logs",
        element: <ActivityLoans />,
      },
      {
        path: "/systemlogs",
        element: <DashboardSystem />,
      },
      {
        path: "partners",
        element: <PartnerList />,
      },
      {
        path: "partner-commissions",
        element: <PartnerCommissions />,
      },
      {
        path: "permissions",
        element: <ManagePermission />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
      {
        path: "role",
        element: <ManageRoles />,
      },
      {
        path: "systemlogs/logs",
        element: <Logs />,
      },
    ],
  },
]);
