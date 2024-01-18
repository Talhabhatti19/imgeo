import React from "react";
import { DatePicker, Select } from "antd";
import Graphs from "../Dashboard/Graphs";
import { Images } from "../Config/Images";
import { EChartsOption } from "echarts-for-react";

function ComplianceDashboard() {
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
        type: "bar",
      },
    ],
  };
  const cardBlocks = [
    { icon: Images.Person, title: "Total Customers", value: "23,500" },
    {
      icon: Images.Doc,
      title: "Total Application",
      value: "10,500",
    },
    {
      icon: Images.Cash,
      title: "Total Approved Applications",
      value: "425,000,000",
    },
    {
      icon: Images.Distribute,
      title: "Total Disbursed Amount",
      value: "425,000,000",
    },
    { icon: Images.Person, title: "Total Customers", value: "23,500" },
    {
      icon: Images.Doc,
      title: "Total Application",
      value: "10,500",
    },
    {
      icon: Images.Cash,
      title: "Total Approved Applications",
      value: "425,000,000",
    },
    {
      icon: Images.Distribute,
      title: "Total Disbursed Amount",
      value: "425,000,000",
    },
  ];
  return (
    <div>
      <div className="col-lg-12 search-bar col-12 d-flex align-items-center">
        <h2 className="col-lg-6 col-12 fs-6 fw-bold">Compliance Dashboard</h2>
      </div>
      <div className="col-12">
        <div className="card-blocks">
          <div className="">
            <div className="row">
              {cardBlocks.map((card, index) => (
                <div className="col-md-3">
                  <div className="card" style={{ backgroundColor: card.icon }}>
                    <img src={card.icon} alt={card.title} />
                    <div className="card-body">
                      <div className="card-title" style={{ fontSize: "12px" }}>
                        {card.title}
                      </div>
                      <p className="card-text" style={{ fontSize: "12px" }}>
                        {card.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 d-flex">
        <div className="col-6">
          <h2 className="col-12 fs-6 fw-bold mt-5">All Statistics</h2>

          <Graphs option={financeOverview} />
        </div>
        <div className="col-6">
          <div className="d-flex">
            <h2 className="col-6 fs-6 fw-bold mt-5">Pie Chart</h2>
            <h2 className="col-6 d-flex justify-content-end fs-6 fw-bold mt-5">
              <div style={{ marginRight: "15px" }}>
                <Select style={{ width: "120px" }}>
                  <option value="1">Test</option>
                  <option value="1">Test</option>
                  <option value="1">Test</option>
                </Select>
              </div>
              <div style={{ marginRight: "15px" }}>
                <Select style={{ width: "100px" }}>
                  <option value="1">Test</option>
                  <option value="1">Test</option>
                  <option value="1">Test</option>
                </Select>
              </div>
            </h2>
          </div>
          <Graphs option={financeOverview} />
        </div>
      </div>
    </div>
  );
}

export default ComplianceDashboard;
