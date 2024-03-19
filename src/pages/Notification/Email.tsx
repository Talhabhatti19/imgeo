import React from "react";

import TableView from "../../components/TableView/TableView";

import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";

import { getAllEmails } from "./NotificationCrud";

const Email = () => {
  const allEmailsInfo = () => {
    getAllEmails()
      .then((response) => {
        console.log(response, "resposne");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  allEmailsInfo();
  const Header = [
    {
      name: "Template Name",
      selector: (row: { ApplicationNo: any }) => row.ApplicationNo,
    },
    {
      name: "Receiver",
      selector: (row: { KastleContractNo: any }) => row.KastleContractNo,
    },
    {
      name: "Status",
      selector: (row: { KastleApplicationNo: any }) => row.KastleApplicationNo,
    },
    {
      name: "Action",
      selector: (row: { KastleStatus: any }) => row.KastleStatus,
    },
  ];
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
  return (
    <>
      <div className="cs-table">
        <DynamicHeaderStructure searchPlaceHolder={"Search"} />
        <TableView header={Header} data={data} />
      </div>
    </>
  );
};
export default Email;
