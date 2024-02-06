import React from "react";
import { useSelector } from "react-redux";
import TableView from "../../components/TableView/TableView";
import { RootState } from "../../redux/rootReducer";
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
  const themeBuilder = useSelector((state: RootState) => state.block.theme);

  return (
    <>
      <div className="cs-table">
        <div className="d-flex align-items-center">
          <h2
            className="col-6 fs-6 fw-bold mt-5 "
            style={{ color: themeBuilder?.color?.headingTextColor }}
          >
            Recent Applications
          </h2>
        </div>
        <TableView header={Recent_Application_Header} data={data} />
      </div>
    </>
  );
};
export default RecentApplication;
