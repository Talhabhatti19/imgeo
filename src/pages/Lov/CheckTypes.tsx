import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { Images } from "../../components/Config/Images";
import TableView from "../../components/TableView/TableView";
import { Check_Types_Header } from "../../components/Config/TableHeaders";

const data = [
  {
    Name: "kajbdsf",
    Status: "1234",
    Action: "--",
  },
];

const CheckTypes = () => {
  const checkReduxState = useSelector((state: RootState) => state.block.check);
  console.log(checkReduxState, "checkReduxState");
  return (
    <>
      <div className="">
        <div className="d-flex align-items-center">
          <h2 className="col-6 fs-6 fw-bold mt-5">Check Types</h2>
        </div>
        <TableView header={Check_Types_Header} data={data} />
      </div>
    </>
  );
};
export default CheckTypes;
