import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { Images } from "../../components/Config/Images";
import TableView from "../../components/TableView/TableView";
import { DatePicker } from "antd";
import OverView from "../../components/Dashboard/OverView";
import Graphs from "../../components/Dashboard/Graphs";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";

const NotificationTable = () => {
  const notificationStructure = useSelector(
    (state: RootState) => state.block.notificationStructure
  );
  const dashboardStructure = useSelector(
    (state: RootState) => state.block.dashboardStructure
  );
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

  const renderedFinanceOverview =
    notificationStructure?.financeOverview &&
    notificationStructure?.financeOverview.map((item: any, index: any) => (
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
    notificationStructure?.barchart &&
    notificationStructure?.barchart.map((item: any, index: any) => (
      <div key={index} className="col-6 p-2">
        <h2 className="col-12 fs-6 fw-bold mt-5">{item.title}</h2>
        {item.child.map((chart: any, chartIndex: any) => (
          <div className="view-chart" key={chartIndex}>
            <Graphs option={chart} />
          </div>
        ))}
      </div>
    ));
  const tableHeader = Array.isArray(dashboardStructure?.table?.header)
    ? dashboardStructure?.table?.header
    : [];
  const tableData = Array.isArray(notificationStructure?.table?.data)
    ? notificationStructure?.table.data
    : [];
  console.log(tableHeader, "tableHeader");
  return (
    <>
      <div className="cs-table">
        <DynamicHeaderStructure
          title={notificationStructure?.title}
          parentStatus={notificationStructure?.parentStatus}
          status={notificationStructure?.status}
          partner={notificationStructure?.partner}
          filter={notificationStructure?.filter}
          button={notificationStructure?.button}
        />
        <div className="row">
          <div className="col-md-12">
            <OverView cards={notificationStructure.cards} />
            {renderedFinanceOverview}
          </div>
        </div>
        <div className="col-12 d-flex mt-2 flex-wrap">
          {" "}
          {renderedBarOverview}
        </div>
        {notificationStructure?.table?.title && (
          <div className="p-2">{notificationStructure.table.title}</div>
        )}
        <TableView apiHeader={tableHeader} data={tableData} />
      </div>
    </>
  );
};
export default NotificationTable;
