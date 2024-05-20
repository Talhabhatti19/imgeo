import { useEffect, useState } from "react";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { authSlice } from "../../redux/apis/apisSlice";
import { RootState } from "../../redux/rootReducer";
import { Images } from "../Config/Images";
import SuperAdmin from "./SuperAdmin";

const DasbhboardHeader = () => {
  const themeBuilder = useSelector((state: RootState) => state.block.theme);
  const [showSuperAdmin, setShowSuperAdmin] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const dispatch = useDispatch();
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const GlobalStyle = createGlobalStyle`
  .header_layout{
    background: ${themeBuilder?.sideBarmenuBackgroundColor} !important;
  }
  `;
  return (
    <>
      <div className="header_layout">
        <div className="d-flex align-items-center ">
          {isMobile && (
            <div>
              <button
                className="bar-btn"
                onClick={() => dispatch(authSlice.actions.toggleSidebar())}
              >
                {<FaBars />}
              </button>
            </div>
          )}
          <h2 className="col-md-6 navbar-brand " style={{ color: "white" }}>
            Welcome !
          </h2>

          <div className="d-flex col-md-6 justify-content-end ">
            <div
              onClick={() => {
                setShowSuperAdmin(!showSuperAdmin);
              }}
              className="d-flex bold align-items-center"
              style={{
                color: themeBuilder?.color?.headingTextColor,
                fontSize: "13px",
              }}
            >
              <div className=" d-flex align-items-center justify-content-end">
                <img
                  className="profile-logo"
                  src={Images.profileUser}
                  width={"40px"}
                  height={"40px"}
                />
              </div>
              <h4 style={{ color: "white" }}>Logout</h4>
              <FaAngleDown />
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
