import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { Images } from "../../components/Config/Images";
import DataTable from "react-data-table-component";
import TableView from "../../components/TableView/TableView";
import { Recent_Application_Header } from "../Config/TableHeaders";

const data = [
  {
    ApplicationNo: "kajbdsf",
    ReasonFromPartner: "2235",
    CustomerMobile: "--",
    CRNo: "--",
    Product: "11@gmail.com",
    LoanTenure: "--",
    LoanAmount: "11@gmail.com",
    ApplicationDate: "--",
    Status: "11@gmail.com",
    Reason: "--",
    Action: "11@gmail.com",
  },
];

const RecentApplication = () => {
  return (
    <>
      <div className="cs-table">
        <div className="d-flex align-items-center">
          <h2 className="col-6 fs-6 fw-bold mt-5">Recent Applications</h2>
        </div>
        <TableView header={Recent_Application_Header} data={data} />
      </div>
    </>
  );
};
export default RecentApplication;
