import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Images } from "../Config/Images";
import { useDispatch, useSelector } from "react-redux";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { theme } from "../Config/Theme";
import { RootState } from "../../redux/rootReducer";
import { createGlobalStyle } from "styled-components";
import AuthService from "../../services/AuthService";
import { authSlice } from "../../redux/apis/apisSlice";

const DasbhboardSidebar = () => {
  const dispatch = useDispatch();

  dispatch(authSlice.actions.setTheme({ theme }));
  const themeBuilder = useSelector((state: RootState) => state.block.theme);
  const [toggled, setToggled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeBar, setActiveBar] = useState();
  const [sidebarLinksApi, setSidebarLinksApi] = useState([]);
  const [sidebarLinksApiCompliance, setSidebarLinksApiCompliance] = useState(
    []
  );
  const [sidebarLinks, setSidebarLinks] = useState([]);
  const [table, setTable] = useState<any>();

  console.log(sidebarLinks, "side");
  let sidebarmenu = async () => {
    try {
      const userID = "12245";
      let res = await AuthService.get(
        `http://192.168.6.123:3003/admin-user/dashboard/${userID}`
      );
      if (res) {
        console.log(res.data.data.structure.sidebar, "123-===");
        const parsedColumns =
          res?.data?.data?.structure?.sidebar?.sidebarWithdashboard[0]
            ?.dashboard.table.header &&
          res?.data?.data?.structure?.sidebar?.sidebarWithdashboard[0]?.dashboard?.table?.header.map(
            (column: any) => {
              if (typeof column.selector === "string") {
                try {
                  // Use Function constructor instead of eval for better security
                  const renderFunction = new Function(
                    `return ${column.selector}`
                  )();
                  console.log(renderFunction, "renderFunction");
                  column.selector = renderFunction;
                } catch (error) {
                  console.error("Error parsing render function:", error);
                }
              }
              return column;
            }
          );
        console.log(parsedColumns, "......");
        setTable(parsedColumns);
        let data =
          res?.data?.data?.structure?.sidebar?.sidebarWithdashboard[0]
            ?.dashboard;
        dispatch(authSlice.actions.setDashboardStructure({ data }));
        setSidebarLinksApi(
          res.data.data.structure.sidebar.sidebarWithdashboard
        );
        setSidebarLinks(res.data.data.structure.sidebar.sidebarWithdashboard);
        setSidebarLinksApiCompliance(
          res.data.data.structure.sidebar.sidebarwithcompliance
        );
        console.log(sidebarLinksApi, "api");
      }
    } catch (e: any) {
      console.log(e, "eee");
    }
  };
  useEffect(() => {
    sidebarmenu();
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const onSmash = (item: any) => {
    setActiveBar(item);

    // Update the links when Contact is clicked
    {
      item == "Compliance Dashboard"
        ? setSidebarLinksApi(sidebarLinksApiCompliance)
        : setSidebarLinksApi(sidebarLinks);
    }
  };
  const GlobalStyle = createGlobalStyle`
  .menu-items{
    background:${themeBuilder?.sideBarmenuBackgroundColor}!important;
    color:${themeBuilder?.sidebarTextColor}!important;
  }
  .css-1654oxy > .ps-menu-button{
    background:${themeBuilder?.table?.backgroundColor}!important;
  }
  .ps-menu-button:hover {
    background:${themeBuilder?.table?.backgroundColor}!important;
  }
  `;
  const renderSubmenu = (item: any) => (
    <>
      <div className="menu-items">
        <SubMenu
          prefix={
            <img src={item.img} style={{ background: "none", color: "#fff" }} />
          }
          key={item.label}
          label={item.label}
        >
          <>
            {item.menu.map((submenuItem: any, subIndex: any) => (
              <Link
                to={`${submenuItem.Link}`}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "12px",
                }}
              >
                <MenuItem
                  key={subIndex}
                  style={{
                    fontSize: "12px",
                    background: themeBuilder?.sideBarmenuBackgroundColor,
                    color: themeBuilder?.sidebarTextColor,
                  }}
                  onClick={() => {
                    setToggled(false);
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
      <div>
        {isMobile && (
          <button className="bar-btn" onClick={() => setToggled(!toggled)}>
            {<FaBars />}
          </button>
        )}
        <Sidebar
          transitionDuration={1000}
          onBackdropClick={() => setToggled(false)}
          toggled={toggled}
          customBreakPoint="768px"
          collapsedWidth="80px"
          width="100%"
          // color={Theme.TextColor}
          // backgroundColor={Theme.BackgroundColor}
          className="col-12 fw-bold menu-items"
          style={{ fontSize: "14px", color: themeBuilder?.sidebarTextColor }}
        >
          <div className="d-flex justify-content-center p-1 pt-4">
            <img
              src={Images.tanmeyaLogo}
              alt="logo"
              style={{ marginBottom: "20px" }}
            />
          </div>

          <Menu>
            {sidebarLinksApi.map((item: any, index: any) => (
              <>
                <React.Fragment key={index}>
                  {item.menu ? (
                    renderSubmenu(item)
                  ) : (
                    <>
                      <div className="menu-items">
                        <Link
                          to={`${item.Link}`}
                          style={{
                            color: themeBuilder?.sidebarTextColor,
                            textDecoration: "none",
                          }}
                        >
                          <MenuItem
                            active={item.label === activeBar}
                            onClick={() => {
                              setToggled(false);
                              onSmash(item.label);
                            }}
                            prefix={
                              <img
                                width={16}
                                height={16}
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
      <GlobalStyle />
    </>
  );
};
export default DasbhboardSidebar;
