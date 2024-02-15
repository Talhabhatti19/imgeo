import React from "react";
import { DatePicker, Select } from "antd";
import { useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { RootState } from "../redux/rootReducer";

function DynamicHeaderStructure({
  title,
  parentStatus,
  status,
  partner,
  filter,
  button,
  searchPlaceHolder,
}: any) {
  const themeBuilder = useSelector((state: RootState) => state.block.theme);
  return (
    <div className="col-xl-12 d-flex align-items-center pb-3 structure">
      {title && <h2 className="fs-6 col-xl-4 col-3 fw-bold">{title}</h2>}
      <div className="d-flex structure col-xl-8 col-12 align-items-center ">
        <div className="d-flex">
          {parentStatus && (
            <div className="d-grid pb-2 search-bar">
              <label htmlFor="" className="label-theme">
                Parent Status
              </label>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Select
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {parentStatus &&
                    parentStatus.map((item: any) => (
                      <Dropdown.Item>
                        <>
                          <div className="d-flex">
                            <div className="col-3">
                              <input type="radio" />
                            </div>
                            {item.label}
                          </div>
                        </>
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
          {status && (
            <div className="d-grid pb-2 search-bar">
              <label htmlFor="" className="label-theme">
                Status
              </label>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Select
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {status &&
                    status.map((item: any) => (
                      <Dropdown.Item>
                        <>
                          <div className="d-flex">
                            <div className="col-3"></div>
                            {item.label}
                          </div>
                        </>
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
        </div>
        {partner && (
          <div className="d-grid pb-2 search-bar ">
            <label htmlFor="" className="label-theme">
              Partner
            </label>
            <Select style={{ width: "130px" }}>
              {partner &&
                partner.map((item: any) => (
                  <option value="1">{item.label}</option>
                ))}
            </Select>
          </div>
        )}
        {filter && (
          <form action="" className=" d-flex pb-2  search-bar">
            <div className="d-flex  structure justify-content-between">
              <div className="d-grid">
                <label htmlFor="" className="label-theme">
                  From
                </label>
                <DatePicker
                  style={{
                    width: "200px",
                    height: "36px",
                    marginRight: "10px",
                  }}
                />
              </div>

              <div className="d-grid">
                <label htmlFor="" className="label-theme">
                  To
                </label>
                <DatePicker
                  style={{
                    width: "200px",
                    height: "36px",
                  }}
                />
              </div>
            </div>
          </form>
        )}
        {searchPlaceHolder && (
          <div className="d-flex">
            <input
              type="search"
              placeholder="Search by name"
              className="search-icon form-control search-bar"
            />
          </div>
        )}
        {button &&
          button.map((item: any) => (
            <div
              className="theme-btn mt-1 button-margin"
              style={{
                backgroundColor: themeBuilder?.table?.backgroundColor,
              }}
            >
              {item.title}
            </div>
          ))}
      </div>
    </div>
  );
}

export default DynamicHeaderStructure;
