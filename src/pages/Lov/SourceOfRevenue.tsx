import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import TableView from "../../components/TableView/TableView";
import { Source_Of_Revenue_Header } from "../../components/Config/TableHeaders";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";

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
  const button = [
    {
      title: "+ add New Record",
    },
  ];
  return (
    <>
      <div className="cs-table">
        <DynamicHeaderStructure title={"Source of Revenue"} button={button} />
        <TableView header={Source_Of_Revenue_Header} data={data} />
      </div>
    </>
  );
};
export default SourceOfRevenue;
