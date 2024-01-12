import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { Images } from "../../components/Config/Images";
import DataTable from "react-data-table-component";
import { All_Application_Header } from "../../components/Config/TableHeaders";
import TableView from "../../components/TableView/TableView";

const data = [
  {
    ApplicationNo: "kajbdsf",
    KastleContractNo: "2235",
    KastleApplicationNo: "1234",
    KastleStatus: "11@gmail.com",
    ContractStatus: "--",
    CustomerName: "---",
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

const AllApplication = () => {
  const checkReduxState = useSelector((state: RootState) => state.block.check);
  console.log(checkReduxState, "checkReduxState");
  return (
    <>
      <div className="cs-table">
        <div className="d-flex align-items-center">
          <h2 className="col-6 fs-6 fw-bold mt-5">
            Financing Application List
          </h2>
        </div>
        <TableView header={All_Application_Header} data={data} />
      </div>
    </>
  );
};
export default AllApplication;
