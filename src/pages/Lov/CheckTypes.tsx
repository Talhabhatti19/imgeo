import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import TableView from "../../components/TableView/TableView";
import { Check_Types_Header } from "../../components/Config/TableHeaders";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";

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
  const button = [
    {
      title: "+ add New Record",
    },
  ];
  return (
    <>
      <div className="cs-table">
        <DynamicHeaderStructure title={"Check Types"} button={button} />
        <TableView header={Check_Types_Header} data={data} />
      </div>
    </>
  );
};
export default CheckTypes;
