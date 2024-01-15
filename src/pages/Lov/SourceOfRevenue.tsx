import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import TableView from "../../components/TableView/TableView";
import { Source_Of_Revenue_Header } from "../../components/Config/TableHeaders";

const data = [
  {
    Name: "kajbdsf",
    Status: "1234",
    ChnageStatus: "11@gmail.com",
    Action: "--",
  },
];

const SourceOfRevenue = () => {
  const checkReduxState = useSelector((state: RootState) => state.block.check);
  console.log(checkReduxState, "checkReduxState");
  return (
    <>
      <div className="cs-table">
        <div className="col-lg-12 col-12 d-flex align-items-center pb-3">
          <h2 className="col-lg-6 col-12 fs-6 fw-bold">Source of Revenue</h2>
          <div className="col-lg-6 col-12 d-flex justify-content-end align-items-center">
            <div className="d-flex">
              <input
                type="search"
                placeholder="Search by name"
                className="search-icon form-control search-bar"
              />
            </div>
            <div className="theme-btn">+ add New Record</div>
          </div>
        </div>
        <TableView header={Source_Of_Revenue_Header} data={data} />
      </div>
    </>
  );
};
export default SourceOfRevenue;
