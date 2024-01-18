import React from "react";
import { Select } from "antd";

const ManagePermission = () => {
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
    {
      title: "Check",
      label: [
        { labelBold: "check" },
        { labelBold: "check" },
        {
          labelBold: "check",
        },
      ],
    },
    {
      title: "Check",
      label: [
        { labelBold: "check" },
        { labelBold: "check" },
        { labelBold: "check" },
      ],
      subLabel: [
        {
          title: "isdbf",
          label: "kadfbn",
        },
      ],
    },
  ];
  return (
    <>
      <div className="p-3">
        <div className="col-lg-12 col-12 d-flex align-items-center pb-3 header_layout">
          <h2 className="col-12 fs-6 fw-bold">Assign Permission</h2>
        </div>
        <div className="p-3">
          <div className="col-lg-12 col-12 d-flex align-items-center pb-3">
            <Select className="col-md-12 col-12">
              {actionSelect.map((item, index) => (
                <option>
                  <>
                    <div className="d-flex">{item.label}</div>
                  </>
                </option>
              ))}
            </Select>
          </div>
          <div className="d-flex flex-wrap-reverse col-12">
            {checkList.map((item, index) => (
              <div className="col-12" key={index}>
                <div className="d-flex pb-2">
                  <input className="" type="checkbox" />
                  <div className="d-flex" style={{ fontSize: "14px" }}>
                    {item.title}
                  </div>
                </div>
                {item.label && (
                  <div className="d-flex">
                    {item.label.map((item) => (
                      <>
                        <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                          <div className="d-flex">
                            <input className="col-1" type="checkbox" />
                            <div
                              className=" col-11 d-flex"
                              style={{ fontSize: "14px" }}
                            >
                              {item.labelBold}
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                )}
                <div className="">
                  {item.subLabel && (
                    <div className="">
                      {item.subLabel.map((item) => (
                        <>
                          <div className="col-12" key={index}>
                            <div className="d-flex">
                              <input className="" type="checkbox" />
                              <div
                                className=" d-flex"
                                style={{ fontSize: "14px" }}
                              >
                                {item.label}
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-end mt-2">
            <button className="theme-btn">Update</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ManagePermission;
