import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { Images } from "../../components/Config/Images";
import { Purpose_Of_Revenue_Header } from "../../components/Config/TableHeaders";
import TableView from "../../components/TableView/TableView";

const data = [
  {
    Name: "kajbdsf",
    Status: "1234",
    ChnageStatus: "11@gmail.com",
    Action: "--",
  },
];

const PurposeOfRevenue = () => {
  const checkReduxState = useSelector((state: RootState) => state.block.check);
  console.log(checkReduxState, "checkReduxState");
  return (
    <>
      <div className="">
        <div className="d-flex align-items-center">
          <h2 className="col-6 fs-6 fw-bold mt-5">Purposes of Finance</h2>
        </div>
        <TableView header={Purpose_Of_Revenue_Header} data={data} />
      </div>
    </>
  );
};
export default PurposeOfRevenue;
