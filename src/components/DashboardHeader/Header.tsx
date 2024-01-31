import { useState } from "react";
import { useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { RootState } from "../../redux/rootReducer";
import { Images } from "../Config/Images";
import SuperAdmin from "./SuperAdmin";

const DasbhboardHeader = () => {
  const themeBuilder = useSelector((state: RootState) => state.block.theme);

  const [showSuperAdmin, setShowSuperAdmin] = useState(false);
  const GlobalStyle = createGlobalStyle`
  .header_layout{
    background: ${themeBuilder?.headerColor} !important;
    color:${themeBuilder?.sidebarTextColor}!important;
  }
  
  `;
  return (
    <>
      <div className="header_layout">
        <div className="d-flex align-items-center">
          <h2
            className="col-sm-6 navbar-brand"
            style={{ color: themeBuilder?.color?.headingTextColor }}
          >
            Welcome !
          </h2>
          <div className="col-6 d-flex">
            <div className="col-6"></div>
            <div className="d-flex col-sm-6">
              <div className="col-7 d-flex justify-content-end align-items-center">
                <img
                  className="profile-logo"
                  src={Images.profileUser}
                  alt=""
                  width={"40px"}
                  height={"40px"}
                />
              </div>

              <div
                onClick={() => {
                  setShowSuperAdmin(!showSuperAdmin);
                }}
                className="ms-3 col-5 d-flex justify-content-start align-items-center bold"
                style={{ fontSize: "13px" }}
              >
                Super Admin
                <button className="dropdown-toogle"></button>
              </div>
            </div>
          </div>
        </div>
        {showSuperAdmin && (
          <>
            <div className="d-flex">
              <SuperAdmin />
            </div>
          </>
        )}
      </div>
      <GlobalStyle />
    </>
  );
};
export default DasbhboardHeader;
