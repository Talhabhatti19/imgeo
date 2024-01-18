import React from "react";
import TableView from "../../components/TableView/TableView";
import { Recent_Application_Header } from "../Config/TableHeaders";

const data = [
  {
    ApplicationNo: "",
    cusotmerName: "",
    phoneNo: "",
    date: "",
    amount: "",
    parentStatus: "",
    status: "",
    Action: "",
  },
];

const RecentApplication = () => {
  return (
    <>
      <div className="cs-table">
        <div className="d-flex align-items-center">
          <h2 className="col-6 fs-6 fw-bold mt-5 text-dark">
            Recent Applications
          </h2>
        </div>
        <TableView header={Recent_Application_Header} data={data} />
      </div>
    </>
  );
};
export default RecentApplication;
