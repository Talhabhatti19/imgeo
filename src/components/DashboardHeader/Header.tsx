import React from "react";
import { Images } from "../Config/Images";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";

const DasbhboardHeader = () => {
  const checkReduxState = useSelector((state: RootState) => state.block.check);
  console.log(checkReduxState, "checkReduxState");
  return (
    <>
      <div className="header_layout">
        <div className="d-flex align-items-center">
          <h2 className="col-6 navbar-brand">Welcome !</h2>
          <div className="col-6 d-flex">
            <div className="col-6"></div>
            <div className="d-flex col-6">
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
                className="ms-3 col-5 d-flex justify-content-start align-items-center bold"
                style={{ fontSize: "13px" }}
              >
                Super Admin{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DasbhboardHeader;
