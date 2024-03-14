import React from "react";
import { Select } from "antd";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";
import { RootState } from "../../redux/rootReducer";
import { useSelector } from "react-redux";

const DepartmentsPermission = () => {
  const themeBuilder = useSelector((state: RootState) => state.block.theme);
  const actionSelect = [
    { label: "Operations" },
    { label: "Settings" },
    { label: "Documents" },
    { label: "Account" },
    { label: "Operations" },
    { label: "Settings" },
    { label: "Documents" },
    { label: "Account" },
  ];
  const checkList = [
    { label: "KYC" },
    { label: "KYB" },
    { label: "GET MANAGER " },
    { label: "BAYAN" },
    { label: "LOAN INFO" },
    { label: "REVENUE DEYTAIL" },
    { label: "SIMAH" },
    { label: "CREDIT CHECK" },
    { label: "E-PROMISORY" },
    { label: "COMPLIANCE" },
    { label: "APPROVAL" },
    { label: "Account" },
    { label: "Operations" },
    { label: "Settings" },
    { label: "Documents" },
    { label: "Account" },
  ];
  return (
    <>
      <div className="">
        <DynamicHeaderStructure
          title={"Departments Permissions"}
          filter={true}
        />
        <div className="col-lg-12 col-12 align-items-center pb-3">
          <div className="col-12 fs-6 pb-1">Department</div>
          <Select className="col-md-6 col-12">
            {actionSelect.map((item, index) => (
              <option>
                <>
                  <div className="d-flex">{item.label}</div>
                </>
              </option>
            ))}
          </Select>
        </div>
        <div
          className="d-flex flex-wrap-reverse
         col-12"
        >
          {checkList.map((item, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="d-flex pb-2">
                <input className="col-1" type="checkbox" />
                <div className=" col-11 d-flex" style={{ fontSize: "14px" }}>
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-end mt-2">
          <button
            className="theme-btn"
            style={{ backgroundColor: themeBuilder?.table?.backgroundColor }}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
};
export default DepartmentsPermission;
