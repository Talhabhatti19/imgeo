import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { Images } from "../../components/Config/Images";
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

const PartnerCommissions = () => {
  return (
    <>
      <div className="cs-table">
        <div className="d-flex align-items-center">
          <h2 className="col-6 fs-6 fw-bold mt-5">All Partners</h2>
        </div>
        <TableView header={Types_Reasons_Header} data={data} />
      </div>
    </>
  );
};
export default PartnerCommissions;
