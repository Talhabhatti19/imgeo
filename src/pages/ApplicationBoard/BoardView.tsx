import React from "react";
import { Select } from "antd";
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";

const BoardView = (header: any, data: any) => {
  console.log(header.data, "header");
  const themeBuilder = useSelector((state: RootState) => state.block.theme);
  const GlobalStyle = createGlobalStyle`
    .card-heading.card-heading {
    background: ${themeBuilder?.table?.backgroundColor} !important;
    color:${themeBuilder?.table?.headingColor}!important;
    }
     `;
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

  return (
    <>
      <div className="p-3">
        <div className="p-3">
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
          <div className="kanban-holder kanban-cards">
            <div className="flex-boards">
              {header?.header &&
                header?.header.map((item: any, index: any) => (
                  <div key={index} className="card kanban-col">
                    <div className="card-heading">{item.label}</div>
                    <div className="card-body">
                      <div className="kanban-centered">
                        {header.data &&
                          header.data.map(
                            (subItem: any) =>
                              item.label === subItem.key && (
                                <React.Fragment key={subItem.key}>
                                  {subItem.data.map(
                                    (subDataItem: any, subIndex: any) => (
                                      <article
                                        key={subIndex}
                                        className="kanban-entry grab"
                                      >
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
                                                  themeBuilder?.table
                                                    ?.bodyTextColor,
                                              }}
                                            >
                                              Application:
                                              <span>
                                                {subDataItem.applicationNo}
                                              </span>
                                            </div>

                                            <div
                                              className="k-text"
                                              style={{
                                                color:
                                                  themeBuilder?.table
                                                    ?.bodyTextColor,
                                              }}
                                            >
                                              Customer:
                                              <span>
                                                {subDataItem.customer}
                                              </span>
                                            </div>
                                            <div
                                              className="k-text"
                                              style={{
                                                color:
                                                  themeBuilder?.table
                                                    ?.bodyTextColor,
                                              }}
                                            >
                                              Amount:
                                              <span>{subDataItem.amount}</span>
                                            </div>
                                          </div>
                                        </div>
                                      </article>
                                    )
                                  )}
                                </React.Fragment>
                              )
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

export default BoardView;
