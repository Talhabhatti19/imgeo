import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import TableView from "../../components/TableView/TableView";
import { Types_Reasons_Header } from "../../components/Config/TableHeaders";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";

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
  const button = [
    {
      title: "+ add New Record",
    },
  ];
  return (
    <>
      <div className="cs-table">
        <DynamicHeaderStructure title={"Check types"} button={button} />
        <TableView header={Types_Reasons_Header} data={data} />
      </div>
    </>
  );
};
export default TypesReasons;
