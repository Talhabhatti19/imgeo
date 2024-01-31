import {
  FaList,
  FaBug,
  FaBullhorn,
  FaHeartbeat,
  FaTimesCircle,
  FaExclamationTriangle,
  FaExclamationCircle,
  FaInfoCircle,
  FaLifeRing,
} from "react-icons/fa";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts/core";

const DashboardSystem = () => {
  const systemCards = [
    { icon: <FaList />, percentage: "100%", title: "All 35 entries" },
    {
      icon: <FaBug />,
      percentage: "100%",
      title: "Debug 0 entries",
    },
    {
      icon: <FaBullhorn />,
      percentage: "100%",
      title: "Emergency 0 entries",
    },
    {
      icon: <FaHeartbeat />,
      percentage: "100%",
      title: "Alert 0 entries",
    },
    {
      icon: <FaTimesCircle />,
      percentage: "100%",
      title: "Critical 0 entries",
    },
    {
      icon: <FaExclamationTriangle />,
      percentage: "100%",
      title: "Error 28 entries",
    },
    {
      icon: <FaExclamationCircle />,
      percentage: "100%",
      title: "Warning 0 entries",
    },
    {
      icon: <FaInfoCircle />,
      percentage: "100%",
      title: "Notice 0 entries",
    },
    {
      icon: <FaLifeRing />,
      percentage: "100%",
      title: "Info 7 entries",
    },
  ];
  const BackgroundColors: any = [
    "#A1A1A1",
    "#B71C1C",
    "#D32F2F",
    "#F44336",
    "#FF5722",
    "#FF9100",
    "#4CAF50",
    "#1976D2",
    "#90CAF9",
  ];
  const systemPieGraph = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "95%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["42%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 484, name: "Emergency" },
          { value: 735, name: "alert" },
          { value: 580, name: "critical" },
          { value: 1084, name: "error" },
          { value: 300, name: "warning" },
          { value: 300, name: "notice" },
          { value: 300, name: "info" },
          { value: 300, name: "info" },
        ],
      },
    ],
  };
  return (
    <div className="text-white">
      <div className="col-md-12">
        <div className="row container-fluid">
          <h3 className="text-dark mb-4">Dashboard</h3>
          {systemCards.map((item, index) => {
            return (
              <div className="col-md-2">
                <div
                  className="system-card"
                  style={{ backgroundColor: BackgroundColors[index] }}
                >
                  <div className="d-flex justify-content-end">{item.icon}</div>
                  <div className="fw-1">
                    <div className="number-heading">{item.percentage}</div>
                    <p className="mt-2" style={{ fontSize: "12px" }}>
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div>
            <>
              <ReactECharts
                echarts={echarts}
                option={systemPieGraph}
                style={{ height: "700px", width: "100%" }}
              />
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSystem;
