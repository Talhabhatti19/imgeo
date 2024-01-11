import React from "react";
import { Outlet } from "react-router-dom";
import DasbhboardHeader from "../components/DashboardHeader/Header";
import DasbhboardSidebar from "../components/DashboardSideBar/DashboardSideBar";

const Lander = () => {
  return (
    <>
      <div className="side-bar">
        <div className="d-flex col-md-12">
          <div className="flex" style={{ flex: 2.5 }}>
            <DasbhboardSidebar />
          </div>
          <div className="flex" style={{ flex: 9.5 }}>
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
export default Lander;
