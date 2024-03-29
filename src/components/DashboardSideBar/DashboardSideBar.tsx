import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Images } from "../Config/Images";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/rootReducer";
import { authSlice } from "../../redux/apis/apisSlice";

const DasbhboardSidebar = () => {
  const dispatch = useDispatch();
  const themeBuilder = useSelector((state: RootState) => state.block.theme);
  const [activeBar, setActiveBar] = useState();
  const toggled = useSelector((state: RootState) => state.block.toggled);
  const sidebarItems = [{ label: "Imgeo", Link: "imgeo" }];

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
                  }}
                >
                  <Link to={item.Link} style={{ color: "#000000" }}>
                    {item.label}
                  </Link>
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
        <Sidebar
          transitionDuration={1000}
          onBackdropClick={() => dispatch(authSlice.actions.toggleSidebar())}
          toggled={toggled}
          customBreakPoint="768px"
          collapsedWidth="80px"
          width="100%"
          className="col-12 fw-bold menu-items"
          style={{ backgroundColor: "1px rgb(243 118 5)" }}
        >
          <div className="d-flex justify-content-center p-1 pt-4">
            <img src={Images.companyLogo} alt="logo" height={100} width={300} />
          </div>

          <Menu>
            {sidebarItems.map((item: any, index: any) => (
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
                            // onClick={() => {
                            //   dispatch(authSlice.actions.toggleSidebar());
                            //   onSmash(item.label);
                            // }}
                            prefix={
                              <img
                                width={16}
                                height={16}
                                src={item.img ? item.img : Images.BlackIcon}
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
