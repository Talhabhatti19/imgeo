import React from "react";
import { Outlet } from "react-router-dom";
import DasbhboardHeader from "../components/DashboardHeader/Header";
import DasbhboardSidebar from "../components/DashboardSideBar/DashboardSideBar";

const Lander = () => {
  return (
    <>
      <div className="side-bar">
        <div className="d-flex col-md-12">
          <div className="flex" style={{ flex: "0 0 20%", maxWidth:"20%" }}>
            <DasbhboardSidebar />
          </div>
          <div className="flex" style={{ flex: "0 0 80%", maxWidth:"80%" }}>
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
