import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { Images } from "../../components/Config/Images";
import DataTable from "react-data-table-component";
import {
  Activity_Loans_Header,
  All_Application_Header,
  InComplete_Loans_Header,
} from "../../components/Config/TableHeaders";
import TableView from "../../components/TableView/TableView";

const data = [
  {
    Id: "kajbdsf",
    ApplicationNo: "2235",
    Time: "--",
    Date: "--",
    UpdatedBy: "11@gmail.com",
    Event: "--",
    Changes: "11@gmail.com",
  },
];

const ActivityLoans = () => {
  const checkReduxState = useSelector((state: RootState) => state.block.check);
  console.log(checkReduxState, "checkReduxState");
  return (
    <>
      <div className="">
        <div className="d-flex align-items-center">
          <h2 className="col-6 fs-6 fw-bold mt-5">Activity Log</h2>
        </div>
        <TableView header={Activity_Loans_Header} data={data} />
      </div>
    </>
  );
};
export default ActivityLoans;
