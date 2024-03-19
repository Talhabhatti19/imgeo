import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import DasbhboardHeader from "../components/DashboardHeader/Header";
import DasbhboardSideBar from "../components/DashboardSideBar/DashboardSideBar";

import Loader from "../components/Loader/Loader";
import { RootState } from "../redux/rootReducer";

const Layout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [loading, setLoading] = useState(true);
  const themeBuilder = useSelector((state: RootState) => state.block.theme);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : ( */}
      <div className={`flex ${isMobile ? "sidebar-mobile" : "side-bar"}`}>
        <div
          className={`flex ${isMobile ? "" : "colOne"}`}
          style={{
            backgroundColor: themeBuilder?.sideBarmenuBackgroundColor,
          }}
        >
          <DasbhboardSideBar />
        </div>
        <div className={`flex ${isMobile ? "" : "colTwo"}`}>
          <DasbhboardHeader />
          <div
            className="p-3"
            style={{ backgroundColor: themeBuilder?.appBackgroundColor }}
          >
            <Outlet />
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};
export default Layout;
