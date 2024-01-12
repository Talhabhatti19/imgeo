import React from "react";
import Graphs from "./Graphs";
import OverView from "./OverView";

function Dashboard() {
  return (
    <div>
      <div className="d-flex align-items-center p-3">
        <h2 className="col-6 fs-6 fw-bold">Overview</h2>
        <div className="col-6 d-flex">from to</div>
      </div>
      <div className="col-12">
        <div className="col-8">
          <OverView />
        </div>
        <Graphs />
      </div>
    </div>
  );
}

export default Dashboard;
