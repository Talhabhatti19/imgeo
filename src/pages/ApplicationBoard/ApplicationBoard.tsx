import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import BoardView from "./BoardView";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";

const ApplicationBoard = () => {
  const actionBoard = useSelector(
    (state: RootState) => state.block.actionBoard
  );

  const subdata = [
    {
      key: "Operations",
      data: [
        {
          applicationNo: "hlo1",
          customer: " المحدودة XXX شركة",
          amount: "1008",
        },
        {
          applicationNo: "hlo1",
          customer: " المحدودة XXX شركة",
          amount: "1008",
        },
      ],
    },

    {
      key: "Documents",
      data: [
        {
          applicationNo: "hlo1",
          customer: " المحدودة XXX شركة",
          amount: "1008",
        },
        {
          applicationNo: "hlo1",
          customer: " المحدودة XXX شركة",
          amount: "1008",
        },
      ],
    },
  ];
  return (
    <>
      <DynamicHeaderStructure
        title={actionBoard?.title}
        parentStatus={actionBoard?.parentStatus}
        status={actionBoard?.status}
        partner={actionBoard?.partner}
        filter={actionBoard?.filter}
        button={actionBoard?.button}
      />
      <BoardView header={actionBoard} data={subdata} />
    </>
  );
};

export default ApplicationBoard;
