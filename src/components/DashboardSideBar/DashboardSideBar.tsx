import React from "react";
import SideBarLogo from "../assets/images/TcLogo.png";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Images } from "../Config/Images";
import { useDispatch } from "react-redux";
import { authSlice } from "../../redux/apis/apisSlics";
import { Link } from "react-router-dom";

const DasbhboardSidebar = () => {
  const dispatch = useDispatch();

  dispatch(authSlice.actions.checkRedux("14"));

  const sidebarItems = [
    { label: "Dashboard", img: Images.dashboardIcon, Link: "dashbaord" },
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
        { subMenu: "All Applications" },
        { subMenu: "Pending Loans" },
        { subMenu: "In Progress Loans" },
        { subMenu: "Approved Loans" },
        { subMenu: "Rejected Loans" },
        { subMenu: "Incomplete Loans" },
        { subMenu: "Cancelled Loans" },
        { subMenu: "Activity Logs" },
      ],
      img: Images.loanIcon,
    },
    {
      label: "Partner Management",
      menu: [
        { subMenu: "Source of Revenue" },
        { subMenu: "Departments permission" },
      ],
      img: Images.partnerManagement,
    },
    {
      label: "Settings",
      menu: [
        { subMenu: "Source of Revenue" },
        { subMenu: "Departments permission" },
      ],
      img: Images.settingIcon,
    },
    { label: "Home Page Management", img: Images.landingPageIcon },
    { label: "Landing Page Management", img: Images.landingPageIcon },
    {
      label: "System Logs",
      menu: [
        { subMenu: "Source of Revenue" },
        { subMenu: "Departments permission" },
      ],
      img: Images.logsIcon,
    },
    {
      label: "API Management",
      menu: [
        { subMenu: "Source of Revenue" },
        { subMenu: "Departments permission" },
      ],
      img: Images.sheildCheckIcon,
    },
  ];
  const renderSubmenu = (item: any) => (
    <>
      <div className="menu-items">
        <SubMenu
          prefix={<img src={item.img} style={{ background: "none" }} />}
          key={item.label}
          label={item.label}
        >
          {item.menu.map((submenuItem: any, subIndex: any) => (
            <MenuItem key={subIndex}>
              <Link
                to={`${submenuItem.Link}`}
                style={{ color: "#000000", textDecoration: "none" }}
              >
                {submenuItem.subMenu}
              </Link>
            </MenuItem>
          ))}
        </SubMenu>
      </div>
    </>
  );
  return (
    <>
      <Sidebar width="275px" className="col-12 sidebar-wrapper fw-bold">
        <div className="d-flex justify-content-center p-1 pt-4">
          <img src={Images.sidebarLogo} alt="" />
        </div>
        <Menu>
          {sidebarItems.map((item, index) => (
            <>
              <React.Fragment key={index}>
                {item.menu ? (
                  renderSubmenu(item)
                ) : (
                  <div className="menu-items">
                    {" "}
                    <MenuItem
                      active={item.label === "Dashboard"}
                      prefix={
                        <img src={item.img} style={{ background: "none" }} />
                      }
                    >
                      <Link to={`${item.Link}`} style={{ color: "#000000" }}>
                        {item.label}
                      </Link>
                    </MenuItem>
                  </div>
                )}
              </React.Fragment>
            </>
          ))}
        </Menu>
      </Sidebar>
    </>
  );
};
export default DasbhboardSidebar;
