import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import TableView from "../../components/TableView/TableView";
import { Types_Reasons_Header } from "../../components/Config/TableHeaders";

const data = [
  {
    Name: "kajbdsf",
    Reasons: "ajdhbs",
    Status: "1234",
    Action: "--",
  },
];

const TypesReasons = () => {
  const checkReduxState = useSelector((state: RootState) => state.block.check);
  console.log(checkReduxState, "checkReduxState");
  return (
    <>
      <div className="cs-table">
        <div className="col-lg-12 col-12 d-flex align-items-center pb-3">
          <h2 className="col-lg-6 col-12 fs-6 fw-bold">Check Types</h2>
          <div className="col-lg-6 col-12 d-flex justify-content-end align-items-center">
            <div className="d-flex">
              <input
                type="search"
                placeholder="Search by Reason"
                className="search-icon form-control search-bar"
              />
            </div>
            <div className="theme-btn">+ add New Record</div>
          </div>
        </div>
        <TableView header={Types_Reasons_Header} data={data} />
      </div>
    </>
  );
};
export default TypesReasons;
