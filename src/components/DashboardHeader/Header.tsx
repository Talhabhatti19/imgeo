import { use } from "echarts/core";
import React, { useState } from "react";
import { Images } from "../Config/Images";
import SuperAdmin from "./SuperAdmin";

const DasbhboardHeader = () => {
  const [showSuperAdmin, setShowSuperAdmin] = useState(false);

  return (
    <>
      <div className="header_layout">
        <div className="d-flex align-items-center">
          <h2 className="col-sm-6 navbar-brand">Welcome !</h2>
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
                Super Admin{" "}
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
    </>
  );
};
export default DasbhboardHeader;
