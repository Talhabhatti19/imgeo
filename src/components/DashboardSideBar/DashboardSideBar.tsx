import React from "react";
import SideBarLogo from "../../assets/images/TcLogo.png";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Images } from "../Config/Images";

const DasbhboardSidebar = () => {
  const sidebarItems = [
    { label: "Dashboard", img: Images.dashboardIcon },
    { label: "Compilance Dashboard", img: Images.dashboardIcon },
    { label: "Application Board", img: Images.applicationBoard },
    {
      label: "Customer Management",
      menu: [{ subMenu: "Leads" }, { subMenu: "CustomerList" }],
      img: Images.customerManagement,
    },
    { label: "Product Management", img: Images.bankIcon },
    {
      label: "Department Management",
      img: Images.departmentManagement,
      menu: [{ subMenu: "Departments" }, { subMenu: "Departments permission" }],
    },
    {
      label: "LOV",
      menu: [
        { subMenu: "Source of Revenue" },
        { subMenu: "Departments permission" },
      ],
      img: Images.listIcon,
    },
    {
      label: "Financing Management",
      menu: [
        { subMenu: "Source of Revenue" },
        { subMenu: "Departments permission" },
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
            <MenuItem key={subIndex}>{submenuItem.subMenu}</MenuItem>
          ))}
        </SubMenu>
      </div>
    </>
  );
  return (
    <>
      <Sidebar
        width="275px"
        className="col-12 fw-bold"
        style={{ fontSize: "12px" }}
      >
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
                      prefix={
                        <img src={item.img} style={{ background: "none" }} />
                      }
                    >
                      {item.label}
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
