import React from "react";
import Graphs from "./Graphs";
import OverView from "./OverView";
import RecentApplication from "./RecentApplication";
import NotificationBar from "./Notification";

function Dashboard() {
  return (
    <div>
      <div className="d-flex align-items-center p-3">
        <h2 className="col-6 fs-6 fw-bold">Overview</h2>
        <div className="col-6 d-flex">from to</div>
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
