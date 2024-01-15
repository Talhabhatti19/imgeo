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
import { DatePicker } from "antd";

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
      <div className="cs-table">
        <div className="col-lg-12 col-12 d-flex align-items-center pb-3">
          <h2 className="col-lg-6 col-12 fs-6 fw-bold">Department</h2>
          <div className="col-lg-6 col-12 d-flex justify-content-end align-items-center">
            <div className="d-flex">
              <input
                type="search"
                placeholder="Search by name"
                className="search-icon form-control search-bar"
              />
            </div>
            <div className="theme-btn">+ add Departments</div>
          </div>
        </div>
        <TableView header={Departments_Header} data={data} />
      </div>
    </>
  );
};
export default Departments;
