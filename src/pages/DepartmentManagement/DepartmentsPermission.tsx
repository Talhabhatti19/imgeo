import React from "react";
import { DatePicker, Select } from "antd";

const DepartmentsPermission = () => {
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
        <div className="col-lg-12 col-12 d-flex align-items-center pb-3">
          <h2 className="col-12 fs-6 fw-bold">Departments Permissions</h2>
        </div>
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
            <div className="col-sm-6 col-md-4 col-lg-3">
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
          <button className="theme-btn">Update</button>
        </div>
      </div>
    </>
  );
};
export default DepartmentsPermission;
