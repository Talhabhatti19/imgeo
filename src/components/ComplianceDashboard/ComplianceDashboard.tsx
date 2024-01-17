import React from "react";
import { DatePicker, Select } from "antd";
import Graphs from "../Dashboard/Graphs";
import { Images } from "../Config/Images";

function ComplianceDashboard() {
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

          <Graphs />
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
          <Graphs />
        </div>
      </div>
    </div>
  );
}

export default ComplianceDashboard;
