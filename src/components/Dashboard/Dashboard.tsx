import React from "react";
import Graphs from "./Graphs";
import OverView from "./OverView";
import RecentApplication from "./RecentApplication";
import NotificationBar from "./Notification";
import { DatePicker } from "antd";
import { EChartsOption } from "echarts";
import * as echarts from "echarts/core";
import { RootState } from "../../redux/rootReducer";
import { useSelector } from "react-redux";

function Dashboard() {
  const dashboardStructure = useSelector(
    (state: RootState) => state.block.dashboardStructure
  );
  console.log(dashboardStructure, "dashboardStructure");
  const financeOverview: EChartsOption = {
    xAxis: {
      type: "category",
      data: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
        "32",
      ],
      axisTick: {
        show: true, // Display tick marks
        alignWithLabel: true, // Align tick marks with axis labels
      },
      axisLabel: {
        interval: 0,
        rotate: 0,
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: true, // Display the axis line
        lineStyle: {
          color: "grey", // Set the color of the axis line
          width: 2, // Set the width of the axis line
          type: "solid", // Set the type of the axis line
        },
      },
    },
    series: [
      {
        data: [0, 4000, 8000, 12000, 16000, 20000],
        type: "line",
      },
    ],
  };

  const barChart: EChartsOption = {
    dataset: [
      {
        dimensions: ["name", "age"],
        source: [
          ["operations", 23],
          ["Account", 56],
          ["Compilance ", 5],
          ["HR", 75],
          ["Sales", 34],
          ["Risk", 25],
          ["Credit", 89],
          ["Marketing", 91],
          ["operations", 22],
          ["Account", 14],
          ["Compilance ", 10],
          ["HR", 42],
          ["Sales", 20],
          ["Risk", 15],
          ["Credit", 17],
          ["Marketing", 54],
        ],
      },
      {
        transform: {
          type: "sort",
        },
      },
    ],
    xAxis: {
      type: "category",
      data: [
        "operations",
        "Account",
        "Compilance ",
        "HR",
        "Sales",
        "Risk",
        "Credit",
        "Marketing",
      ],
      axisLabel: { interval: 0, rotate: 30 },
      boundaryGap: true,
    },
    yAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "grey",
          width: 1,
          type: "solid",
        },
      },
      axisTick: {
        show: true,
        interval: 0.2,
      },
      axisLabel: {
        interval: 0,
        formatter: (value: any) => (value * 0.01).toFixed(1),
      },
    },
    series: {
      type: "bar",
    },
  };
  const approvaGraph: EChartsOption = {
    dataset: [
      {
        dimensions: ["name", "age"],
        source: [
          ["jan", 23],
          ["feb", 56],
          ["march", 5],
          ["april", 75],
          ["may", 34],
          ["june", 25],
          ["july", 89],
          ["aug", 91],
          ["sep", 22],
          ["oct", 14],
          ["nov ", 10],
          ["dec", 42],
        ],
      },
      {
        transform: {
          type: "sort",
        },
      },
    ],
    xAxis: {
      type: "category",
      axisLabel: { interval: 0, rotate: 0 },
      boundaryGap: true,
    },
    yAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "grey",
          width: 1,
          type: "solid",
        },
      },
      axisTick: {
        show: true,
        interval: 0.2, // Set the interval for ticks on the y-axis
      },
      axisLabel: {
        interval: 0, // Set the interval for labels on the y-axis
        formatter: (value: any) => (value * 0.01).toFixed(1), // Format labels as percentages
      },
    },
    series: {
      type: "bar",
    },
  };
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
