import React from "react";
import { Select } from "antd";
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import BoardView from "./BoardView";

const ApplicationBoard = () => {
  const actionBoard = useSelector(
    (state: RootState) => state.block.actionBoard
  );
  const actionSelect = [
    { label: "Operations" },
    { label: "Settings" },
    { label: "Documents" },
    { label: "Account" },
    { label: "Operations" },
    { label: "Settings" },
    { label: "Documents" },
    { label: "Account" },
  ];

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
      <BoardView header={actionBoard} data={subdata} />
    </>
  );
};

export default ApplicationBoard;
