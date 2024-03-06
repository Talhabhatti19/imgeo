import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { Purpose_Of_Revenue_Header } from "../../components/Config/TableHeaders";
import TableView from "../../components/TableView/TableView";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";

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
  const button = [
    {
      title: "+ add New Record",
    },
  ];
  return (
    <>
      <div className="cs-table">
        <DynamicHeaderStructure title={"Purpose of Finance"} button={button} />
        <TableView header={Purpose_Of_Revenue_Header} data={data} />
      </div>
    </>
  );
};
export default PurposeOfRevenue;
