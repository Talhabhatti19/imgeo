import React from "react";
import Graphs from "./Graphs";
import OverView from "./OverView";
import RecentApplication from "./RecentApplication";
import NotificationBar from "./Notification";
import { DatePicker } from "antd";
import { RootState } from "../../redux/rootReducer";
import { useSelector } from "react-redux";

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
  return (
    <div>
      <div className="col-lg-12 search-bar col-12 d-flex align-items-center">
        <h2 className="col-lg-6 col-12 fs-6 fw-bold">
          {dashboardStructure?.title}
        </h2>
        <form
          action="search-bar"
          className="col-lg-6 col-12 d-flex justify-content-end pb-2"
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
