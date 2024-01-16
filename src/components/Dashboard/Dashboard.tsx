import React from "react";
import Graphs from "./Graphs";
import OverView from "./OverView";
import RecentApplication from "./RecentApplication";
import NotificationBar from "./Notification";
import { DatePicker } from "antd";

function Dashboard() {
  return (
    <div>
      <div className="col-lg-12 search-bar col-12 d-flex align-items-center">
        <h2 className="col-lg-6 col-12 fs-6 fw-bold">Overview</h2>
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
      <div className="col-12 d-flex">
        <div className="col-8">
          <OverView />
          <Graphs />
        </div>
        <div className="col-4">
          <NotificationBar />
        </div>
      </div>
      <div className="col-12 d-flex">
        <div className="col-6">
          <h2 className="col-12 fs-6 fw-bold mt-5">
            Department Wise Applications
          </h2>

          <Graphs />
        </div>
        <div className="col-6">
          <h2 className="col-12 fs-6 fw-bold mt-5">
            Compliance Credit Approval Average
          </h2>

          <Graphs />
        </div>
      </div>
      <div className="col-12">
        <RecentApplication />
      </div>
    </div>
  );
}

export default Dashboard;
