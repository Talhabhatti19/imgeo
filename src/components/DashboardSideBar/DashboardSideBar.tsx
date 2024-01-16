import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Images } from "../Config/Images";
import { useDispatch } from "react-redux";
import { authSlice } from "../../redux/apis/apisSlics";
import { FaBeer } from "react-icons/fa";
import { Link } from "react-router-dom";

const DasbhboardSidebar = () => {
  const dispatch = useDispatch();
  dispatch(authSlice.actions.checkRedux("14"));
  const [collapsed, setCollapsed] = React.useState(false);

  const sidebarItems = [
    { label: "Dashboard", img: Images.dashboardIcon, Link: "dashboard" },
    {
      label: "Compilance Dashboard",
      img: Images.dashboardIcon,
      Link: "compliance-dashboard",
    },
    {
      label: "Application Board",
      img: Images.applicationBoard,
      Link: "application/board",
    },
    {
      label: "Customer Management",
      menu: [
        { subMenu: "Leads", Link: "leads" },
        { subMenu: "CustomerList", Link: "customer-list" },
      ],
      img: Images.customerManagement,
    },
    { label: "Product Management", img: Images.bankIcon, Link: "products" },
    {
      label: "Department Management",
      img: Images.departmentManagement,
      menu: [
        { subMenu: "Departments", Link: "all-departments" },
        { subMenu: "Departments permission", Link: "departments/permissions" },
      ],
    },
    {
      label: "LOV",
      menu: [
        { subMenu: "Source of Revenue", Link: "source-of-revenue" },
        { subMenu: "Purpose Of Financing", Link: "purpose-of-finance" },
        { subMenu: "Checks Types", Link: "check-type" },
        { subMenu: "Types Reasons", Link: "type-reason" },
      ],
      img: Images.listIcon,
    },
    {
      label: "Financing Management",
      menu: [
        { subMenu: "All Applications", Link: "applications/all" },
        { subMenu: "Pending Loans", Link: "applications/pending" },
        { subMenu: "In Progress Loans", Link: "applications/in-progress" },
        { subMenu: "Approved Loans", Link: "applications/approved" },
        { subMenu: "Rejected Loans", Link: "applications/rejected" },
        { subMenu: "Incomplete Loans", Link: "incomplete" },
        { subMenu: "Cancelled Loans", Link: "applications/cancelled" },
        { subMenu: "Activity Logs", Link: "activity-logs" },
      ],
      img: Images.loanIcon,
    },
    {
      label: "Partner Management",
      menu: [
        { subMenu: "Partners List", Link: "partners" },
        { subMenu: "Partners Commission", Link: "partner-commissions" },
      ],
      img: Images.partnerManagement,
    },
    {
      label: "Settings",
      menu: [
        { subMenu: "Employees", Link: "employees" },
        { subMenu: "Manage Roles", Link: "role" },
        { subMenu: "Manage permission", Link: "permissions" },
      ],
      img: Images.settingIcon,
    },
    {
      label: "Home Page Management",
      img: Images.landingPageIcon,
      Link: "home-page-management",
    },
    {
      label: "Landing Page Management",
      img: Images.landingPageIcon,
      Link: "landingpages",
    },
    {
      label: "System Logs",
      menu: [
        { subMenu: "Dashboard", Link: "systemlogs" },
        { subMenu: "Logs", Link: "systemlogs/logs" },
      ],
      img: Images.logsIcon,
    },
    {
      label: "API Management",
      menu: [
        { subMenu: "All APIs", Link: "apis" },
        { subMenu: "Partner APIs", Link: "apimanagement" },
      ],
      img: Images.sheildCheckIcon,
    },
  ];
  const isMobile = window.innerWidth <= 768;
  const renderSubmenu = (item: any) => (
    <>
      <div className="menu-items">
        <SubMenu
          prefix={<img src={item.img} style={{ background: "none" }} />}
          key={item.label}
          label={item.label}
        >
          <>
            {item.menu.map((submenuItem: any, subIndex: any) => (
              <Link
                to={`${submenuItem.Link}`}
                style={{ color: "#000000", textDecoration: "none" }}
              >
                <MenuItem
                  key={subIndex}
                  onClick={() => {
                    console.log(subIndex, "hello");
                  }}
                >
                  {submenuItem.subMenu}
                </MenuItem>
              </Link>
            ))}
          </>
          {/* )} */}
        </SubMenu>
      </div>
    </>
  );
  return (
    <>
      <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
        <Sidebar
          collapsed={collapsed}
          collapsedWidth="80px"
          width="100%"
          className="col-12 sidebar-wrapper fw-bold"
        >
          <div className="d-flex justify-content-center p-1 pt-4">
            <img src={Images.sidebarLogo} alt="" />
          </div>
          {isMobile && (
            <button
              className="mobile-toggle"
              onClick={() => setCollapsed(!collapsed)}
              style={{
                backgroundColor: "#333",
                color: "#fff",
                marginLeft: "auto",
              }}
            >
              <FaBeer />
            </button>
          )}
          <Menu>
            {sidebarItems.map((item, index) => (
              <>
                <React.Fragment key={index}>
                  {item.menu ? (
                    renderSubmenu(item)
                  ) : (
                    <>
                      <div className="menu-items">
                        <Link
                          to={`${item.Link}`}
                          style={{ color: "#000000", textDecoration: "none" }}
                        >
                          <MenuItem
                            active={item.label === "Dashboard"}
                            prefix={
                              <img
                                src={item.img}
                                style={{ background: "none" }}
                              />
                            }
                          >
                            {item.label}
                          </MenuItem>
                        </Link>
                      </div>
                    </>
                  )}
                </React.Fragment>
              </>
            ))}
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};
export default DasbhboardSidebar;
