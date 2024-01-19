import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import DasbhboardHeader from "../components/DashboardHeader/Header";
import DasbhboardSidebar from "../components/DashboardSideBar/DashboardSideBar";

const Layout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={`flex ${isMobile ? "sidebar-mobile" : "side-bar"}`}>
        <div className={"d-flex col-md-12"}>
          <div className={`flex ${isMobile ? "" : "colOne"}`}>
            <DasbhboardSidebar />
          </div>
          <div className={`flex ${isMobile ? "" : "colTwo"}`}>
            <DasbhboardHeader />
            <div className="p-3">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
