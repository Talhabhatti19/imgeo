import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { Images } from "../../components/Config/Images";
import DataTable from "react-data-table-component";
import {
  Customer_List_Header,
  Departments_Header,
} from "../../components/Config/TableHeaders";
import TableView from "../../components/TableView/TableView";

const data = [
  {
    DepartmentName: "kajbdsf",
    ByDefault: "2235",
    Status: "1234",
    ChnageStatus: "11@gmail.com",
    Action: "--",
  },
];

const Departments = () => {
  const checkReduxState = useSelector((state: RootState) => state.block.check);
  console.log(checkReduxState, "checkReduxState");
  return (
    <>
      <div className="">
        <div className="d-flex align-items-center">
          <h2 className="col-6 fs-6 fw-bold mt-5">Department</h2>
        </div>
        <TableView header={Departments_Header} data={data} />
      </div>
    </>
  );
};
export default Departments;
