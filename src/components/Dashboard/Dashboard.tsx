import React from "react";
import Graphs from "./Graphs";
import OverView from "./OverView";
import RecentApplication from "./RecentApplication";
import NotificationBar from "./Notification";
import { DatePicker, Select } from "antd";
import { EChartsOption } from "echarts";
import * as echarts from "echarts/core";
import { RootState } from "../../redux/rootReducer";
import { useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { Images } from "../Config/Images";

function Dashboard() {
  const dashboardStructure = useSelector(
    (state: RootState) => state.block.dashboardStructure
  );

  const renderedFinanceOverview =
    dashboardStructure?.financeOverview &&
    dashboardStructure?.financeOverview.map((item: any, index: any) => (
      <div key={index} className="view-chart mb-4">
        <div className="chart-header d-flex justify-content-between align-items-center">
          <h3 className="welcome-heading">{item.title}</h3>
          <div className="d-flex align-items-center">
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
        </div>
        {item?.child &&
          item?.child.map((chart: any, chartIndex: any) => (
            <div style={{ marginTop: "20px" }}>
              <Graphs key={chartIndex} option={chart} />
            </div>
          ))}
      </div>
    ));
  const renderedBarOverview =
    dashboardStructure?.barchart &&
    dashboardStructure?.barchart.map((item: any, index: any) => (
      <div key={index} className="col-6 p-2">
        <h2 className="col-12 fs-6 fw-bold mt-5">{item.title}</h2>
        {item.child.map((chart: any, chartIndex: any) => (
          <div className="view-chart" key={chartIndex}>
            <Graphs option={chart} />
          </div>
        ))}
      </div>
    ));
  // const dashbaordTables =
  //   dashboardStructure?.table &&
  //   dashboardStructure?.table.map((item: any, index: any) => (
  //     <div className="col-12">
  //       <RecentApplication data={item} />
  //     </div>
  //   ));
  const actionSelect = [
    { label: "View", img: Images.listIcon, Link: "detail" },
    {
      label: "Documents",
      img: Images.settingIcon,
      Link: "application-document",
    },
    { label: "Activity Logs", img: Images.settingIcon, Link: "activity-log" },
    { label: "Resend Login Email", img: Images.settingIcon, Link: "edit" },
  ];
  return (
    <div>
      <div className="col-xl-12 col-12 d-flex align-items-center pb-3">
        {dashboardStructure?.title && (
          <h2 className="col-xl-4 col-12 fs-6 fw-bold">
            {dashboardStructure?.title}
          </h2>
        )}
        <div className="col-xl-8 col-12 d-flex justify-content-end align-items-center">
          {dashboardStructure?.parentStatus && (
            <div className="d-grid pb-2 search-bar">
              <label htmlFor="" className="label-theme">
                Parent Status
              </label>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Select
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {dashboardStructure?.parentStatus &&
                    dashboardStructure?.parentStatus.map((item: any) => (
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
          {dashboardStructure?.status && (
            <div className="d-grid pb-2 search-bar">
              <label htmlFor="" className="label-theme">
                Status
              </label>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Select
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {dashboardStructure?.status &&
                    dashboardStructure?.status.map((item: any) => (
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
          {dashboardStructure?.partner && (
            <div className="d-grid pb-2 search-bar">
              <label htmlFor="" className="label-theme">
                Partner
              </label>
              <Select style={{ width: "130px" }}>
                {dashboardStructure?.partner &&
                  dashboardStructure?.partner.map((item: any) => (
                    <option value="1">{item.label}</option>
                  ))}
              </Select>
            </div>
          )}
          {dashboardStructure?.filter && (
            <form
              action=""
              className=" d-flex justify-content-end pb-2 search-bar"
            >
              <div className="d-flex justify-content-between ">
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
          {dashboardStructure?.button &&
            dashboardStructure?.button.map((item: any) => (
              <div className="theme-btn mt-1 button-margin">{item.title}</div>
            ))}
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <OverView cards={dashboardStructure.cards} />
          {renderedFinanceOverview}
        </div>
        <div className="col-md-4">
          <NotificationBar />
        </div>
      </div>
      <div className="col-12 d-flex mt-2 flex-wrap"> {renderedBarOverview}</div>
      {/* {dashbaordTables} */}
      <RecentApplication data={dashboardStructure?.table} />
    </div>
  );
}

export default Dashboard;
