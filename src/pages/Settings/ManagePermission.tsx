import React, { useState } from "react";
import { Select } from "antd";
interface CheckListItem {
  label: string;
  children: { label: string }[];
  sublabel: string;
  subchild: { label: string }[];
  secondsub?: string;
  secondsubchild?: { label: string }[];
}

const ManagePermission: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleCheckboxChange = (label: string, isChecked: boolean) => {
    setCheckedItems((prev) => {
      const updatedCheckedItems = { ...prev, [label]: isChecked };

      if (isChecked) {
        // Enable all children when the label is checked
        checkList.forEach((item) => {
          if (item.label === label && item.children) {
            item.children.forEach((child) => {
              updatedCheckedItems[child.label] = true;
            });
          }
          if (item.label === label && item.subchild) {
            item.subchild.forEach((subchild) => {
              updatedCheckedItems[subchild.label] = true;
            });
          }
          if (item.label === label && item.secondsubchild) {
            item.secondsubchild.forEach((secondsubchild) => {
              updatedCheckedItems[secondsubchild.label] = true;
            });
          }
        });
        // Enable sublabel when the label is checked
        checkList.forEach((item) => {
          if (item.label === label && item.sublabel) {
            updatedCheckedItems[item.sublabel] = true;
            checkList.forEach((item) => {
              if (item.label === label && item.sublabel) {
                updatedCheckedItems[item.sublabel] = true;
                updatedCheckedItems[item.label] = true;
              }
            });
          }
        });
      } else {
        // Disable all children when the label is unchecked
        checkList.forEach((item) => {
          if (item.label === label && item.children) {
            item.children.forEach((child) => {
              updatedCheckedItems[child.label] = false;
            });
          }
          if (item.label === label && item.subchild) {
            item.subchild.forEach((subchild) => {
              updatedCheckedItems[subchild.label] = false;
            });
          }
          if (item.label === label && item.secondsubchild) {
            item.secondsubchild.forEach((secondsubchild) => {
              updatedCheckedItems[secondsubchild.label] = false;
            });
          }
        });
        // Disable sublabel when the label is unchecked
        checkList.forEach((item) => {
          if (item.label === label && item.sublabel) {
            updatedCheckedItems[item.sublabel] = false;
          }
        });
      }
      return updatedCheckedItems;
    });
  };

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

  const checkList: CheckListItem[] = [
    {
      label: "Dashboard Module",
      children: [
        { label: "Show Dashboard" },
        { label: "Application Chart" },
        { label: "Department Chart" },
        { label: "Partner Application Chart" },
      ],
      sublabel: "dash cards module",
      subchild: [
        { label: "Show Dashboard" },
        { label: "Application Chart" },
        { label: "Department Chart" },
        { label: "Partner Application Chart" },
      ],
      secondsub: "Show Dashboard",
    },
    {
      label: "Dashboard Module",
      children: [
        { label: "Show Dashboard" },
        { label: "Application Chart" },
        { label: "Department Chart" },
        { label: "Partner Application Chart" },
      ],
      sublabel: "dash cards module",
      subchild: [
        { label: "Show Dashboard" },
        { label: "Application Chart" },
        { label: "Department Chart" },
        { label: "Partner Application Chart" },
      ],
      secondsub: "Show Dashboard",
      secondsubchild: [
        { label: "Show Dashboard" },
        { label: "Application Chart" },
        { label: "Department Chart" },
        { label: "Partner Application Chart" },
      ],
    },
  ];

  return (
    <div className="p-3">
      <div className="col-12 d-flex align-items-center pb-3 header_layout">
        <h2 className="col-12 fs-6 fw-bold">Assign Permission</h2>
      </div>
      <div className="col-lg-12 col-12 d-flex align-items-center pb-3">
        <Select className="col-md-12 col-12">
          {actionSelect.map((item, index) => (
            <option key={index}>
              <>
                <div className="d-flex">{item.label}</div>
              </>
            </option>
          ))}
        </Select>
      </div>
      <div className="row">
        {checkList.map((item, index) => (
          <div className="col-md-12" key={index}>
            <div
              className="d-flex pb-2"
              style={{ alignItems: "start", padding: "20px" }}
            >
              <input
                className=""
                type="checkbox"
                checked={checkedItems[item.label] || false}
                onChange={(e) =>
                  handleCheckboxChange(item.label, e.target.checked)
                }
              />
              <div
                className=""
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  marginLeft: "10px",
                }}
              >
                {item.label}
              </div>
            </div>
            {item.children && (
              <div className="row" style={{ marginLeft: "20px" }}>
                {item.children.map((subitem, subIndex) => (
                  <div className="col-md-4" key={subIndex}>
                    <>
                      <div
                        className="d-flex pb-2"
                        style={{
                          alignItems: "center",
                          padding: "20px",
                        }}
                      >
                        <input
                          className="col-1"
                          type="checkbox"
                          checked={checkedItems[subitem.label] || false}
                          onChange={(e) =>
                            handleCheckboxChange(
                              subitem.label,
                              e.target.checked
                            )
                          }
                        />
                        <div
                          className=" col-11 d-flex"
                          style={{ fontSize: "14px", marginLeft: "10px" }}
                        >
                          {subitem.label}
                        </div>
                      </div>
                    </>
                  </div>
                ))}
              </div>
            )}
            {item.subchild && (
              <>
                <div className="col-md-4">
                  <div
                    className="d-flex pb-2"
                    style={{
                      alignItems: "center",
                      padding: "20px",
                      marginLeft: "42px",
                    }}
                  >
                    <input
                      className=""
                      type="checkbox"
                      checked={checkedItems[item.sublabel] || false}
                      onChange={(e) =>
                        handleCheckboxChange(item.sublabel, e.target.checked)
                      }
                    />
                    <div
                      className=""
                      style={{
                        fontSize: "16px",
                        flexDirection: "column",
                        fontWeight: "700",
                        marginLeft: "10px",
                      }}
                    >
                      {item.sublabel}
                    </div>
                  </div>
                </div>
                {item.subchild && (
                  <div className="row">
                    {item.subchild.map((subitem: any, subIndex: number) => (
                      <div
                        className="col-md-4"
                        style={{ marginLeft: "55px" }}
                        key={subIndex}
                      >
                        <div
                          className="d-flex pb-2"
                          style={{
                            alignItems: "center",
                            padding: "20px",
                          }}
                        >
                          <input
                            className="col-1"
                            type="checkbox"
                            checked={checkedItems[subitem.label] || false}
                            onChange={(e) =>
                              handleCheckboxChange(
                                subitem.label,
                                e.target.checked
                              )
                            }
                          />
                          <div
                            className=" col-11 d-flex"
                            style={{ fontSize: "14px" }}
                          >
                            {subitem.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
            {item.secondsub && (
              <div className="row">
                <>
                  <div
                    className="col-md-4"
                    style={{ marginLeft: "0px" }}
                    key={index}
                  >
                    <div
                      className="d-flex pb-2"
                      style={{
                        alignItems: "center",
                        padding: "20px",
                        marginLeft: "57px",
                      }}
                    >
                      <input
                        className="col-1"
                        type="checkbox"
                        checked={checkedItems[item.secondsub] || false}
                        onChange={(e) =>
                          handleCheckboxChange(
                            item.secondsub || "",
                            e.target.checked
                          )
                        }
                      />
                      <div
                        className="col-11 d-flex"
                        style={{
                          fontSize: "16px",
                          fontWeight: "700",
                          marginLeft: "0px",
                        }}
                      >
                        {item.secondsub}
                      </div>
                    </div>
                  </div>
                  {item.secondsubchild && (
                    <div className="row" style={{ marginLeft: "50px" }}>
                      {item.secondsubchild.map(
                        (subitem: any, secondSubIndex: number) => (
                          <div
                            className="col-md-4"
                            key={secondSubIndex}
                            style={{ marginLeft: "20px" }}
                          >
                            <>
                              <div
                                className="d-flex pb-2"
                                style={{
                                  alignItems: "center",
                                  padding: "20px",
                                }}
                              >
                                <input
                                  className="col-1"
                                  type="checkbox"
                                  checked={checkedItems[subitem.label] || false}
                                  onChange={(e) =>
                                    handleCheckboxChange(
                                      subitem.label,
                                      e.target.checked
                                    )
                                  }
                                />
                                <div
                                  className=" col-11 d-flex"
                                  style={{
                                    fontSize: "14px",
                                  }}
                                >
                                  {subitem.label}
                                </div>
                              </div>
                            </>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-end mt-2">
        <button className="theme-btn">Update</button>
      </div>
    </div>
  );
};

export default ManagePermission;
