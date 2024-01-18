import React from "react";
import { Outlet } from "react-router-dom";
import DasbhboardHeader from "../components/DashboardHeader/Header";
import DasbhboardSidebar from "../components/DashboardSideBar/DashboardSideBar";

const Lander = () => {
  const [broken, setBroken] = React.useState(
    window.matchMedia("(max-width: 200px)").matches
  );
  console.log(broken, "appss");

  return (
    <>
      <div className="side-bar">
        <div className="d-flex col-md-12">
          <div className={"flex colOne"}>
            <DasbhboardSidebar />
          </div>
          <div className="flex colTwo" style={{ width: "100%" }}>
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
