import React, { useState } from "react";
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
    {
      label: "Home Page Management",
      img: Images.landingPageIcon,
      Link: "home-page-management",
    },
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
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleSubmenuClick = (label: string) => {
    setOpenSubmenus((prevSubmenus) => ({
      ...Object.fromEntries(
        Object.keys(prevSubmenus).map((key) => [key, false])
      ),
      [label]: !prevSubmenus[label],
    }));
  };
  const renderSubmenu = (item: any) => (
    <>
      <div className="menu-items">
        <SubMenu
          prefix={<img src={item.img} style={{ background: "none" }} />}
          key={item.label}
          label={item.label}
          open={openSubmenus[item.label] || false}
          onClick={() => handleSubmenuClick(item.label)}
        >
          {openSubmenus[item.label] && (
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
          )}
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
    </>
  );
};
export default DasbhboardSidebar;
