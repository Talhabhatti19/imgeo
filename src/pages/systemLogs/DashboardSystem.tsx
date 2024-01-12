import React from "react";
import { Images } from "../../components/Config/Images";
import Cards from "../../components/Dashboard/Cards";

const DashboardSystem = () => {
  const systemCards = [
    { icon: Images.Person, percentage: "100%", title: "All 33 entries" },
    {
      icon: Images.Doc,
      percentage: "100%",
      title: "All 33 entries",
    },
    {
      icon: Images.Cash,
      percentage: "100%",
      title: "All 33 entries",
    },
    {
      icon: Images.Distribute,
      percentage: "100%",
      title: "All 33 entries",
    },
    {
      icon: Images.Doc,
      percentage: "100%",
      title: "All 33 entries",
    },
    {
      icon: Images.Cash,
      percentage: "100%",
      title: "All 33 entries",
    },
    {
      icon: Images.Distribute,
      percentage: "100%",
      title: "All 33 entries",
    },
    {
      icon: Images.Doc,
      percentage: "100%",
      title: "All 33 entries",
    },
    {
      icon: Images.Cash,
      percentage: "100%",
      title: "All 33 entries",
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
  return (
    <div className="text-white">
      <div className="col-md-12">
        <div className="row">
          {systemCards.map((item, index) => {
            return (
              <div className="col-md-2">
                <div
                  className="system-card"
                  style={{ backgroundColor: BackgroundColors[index] }}
                >
                  <img src={item.icon} alt={item.percentage} />
                  <div className="fw-1">
                    <div className="card-title" style={{ fontSize: "12px" }}>
                      {item.percentage}
                    </div>
                    <p className="card-text" style={{ fontSize: "12px" }}>
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardSystem;
