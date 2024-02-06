import React from "react";
import { Select } from "antd";
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";

const ApplicationBoard = () => {
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

  const headTitles = [
    { label: "Operations" },
    { label: "Settings" },
    { label: "Documents" },
    { label: "Account" },
    { label: "Operation" },
    { label: "Settings" },
    { label: "Documents" },
    { label: "Account" },
  ];
  const subdata = [
    {
      applicationNo: "mln 234dsg",
      customer: " المحدودة XXX شركة",
      amount: "1008",
    },
    {
      applicationNo: "mln 234dsg",
      customer: " المحدودة XXX شركة",
      amount: "1008",
    },
  ];
  const GlobalStyle = createGlobalStyle`
    .card-heading.card-heading {
    background: ${themeBuilder?.table?.backgroundColor} !important;
    color:${themeBuilder?.table?.headingColor}!important;
    }
     `;
  return (
    <>
      <div className="p-3">
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

          <div className="kanban-holder kanban-cards">
            <div className="flex-boards">
              {headTitles.map((item, index) => (
                <div className="card kanban-col">
                  <div className="card-heading">{item.label}</div>
                  <div className="card-body">
                    <div className="kanban-centered">
                      {item.label ? (
                        <>
                          {subdata.map((item, index) => (
                            <>
                              <article className="kanban-entry grab">
                                <div className="kanban-entry-inner">
                                  <div
                                    className="kanban-label"
                                    style={{
                                      marginTop: "10px",
                                      padding: "10px",
                                    }}
                                  >
                                    <div
                                      className="k-text"
                                      style={{
                                        color:
                                          themeBuilder?.table?.bodyTextColor,
                                      }}
                                    >
                                      Application:
                                      <span>{item.applicationNo}</span>
                                    </div>

                                    <div
                                      className="k-text"
                                      style={{
                                        color:
                                          themeBuilder?.table?.bodyTextColor,
                                      }}
                                    >
                                      Costumer:<span>{item.customer}</span>
                                    </div>
                                    <div
                                      className="k-text"
                                      style={{
                                        color:
                                          themeBuilder?.table?.bodyTextColor,
                                      }}
                                    >
                                      Amount:<span>{item.amount}</span>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </>
                          ))}
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-end mt-2">
              <button className="theme-btn">Update</button>
            </div>
          </div>
        </div>
      </div>
      <GlobalStyle />
    </>
  );
};
export default ApplicationBoard;
