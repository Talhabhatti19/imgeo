import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import Switch from "react-switch";
import { Images } from "../../components/Config/Images";
import TableView from "../../components/TableView/TableView";
import { DatePicker } from "antd";
import { Modal, Button, Dropdown } from "react-bootstrap";

const AllApis = () => {
  const checkReduxState = useSelector((state: RootState) => state.block.check);
  const [showPopup, setShowPopup] = useState(false);

  console.log(checkReduxState, "checkReduxState");

  const data = [
    {
      Name: "Application Commission",
      URL: "http://mynance.mytmdev.com/api/v1/partner/application/commission",
      Method: "POST",
      Status: "--",
    },
    {
      Name: "Application Commission",
      URL: "http://mynance.mytmdev.com/api/v1/partner/application/commission",
      Method: "get",
      Status: "--",
    },
  ];
  const actionSelect = [
    { label: "Name", img: Images.listIcon, Link: "partner" },
    { label: "Settings", img: Images.settingIcon, Link: "setting" },
    { label: "Documents", img: Images.settingIcon, Link: "document" },
    { label: "Edit", img: Images.settingIcon, Link: "edit" },
  ];
  const Header = [
    {
      name: "Name",
      selector: (row: { Name: any }) => row.Name,
    },
    {
      name: "URL",
      selector: (row: { URL: any }) => row.URL,
    },
    {
      name: "Method",
      selector: (row: { Method: any }) => row.Method,
    },
    {
      name: "Status",
      selector: (row: { Status: any }) => row.Status,
    },
  ];
  const actionOptions = [
    { value: "action1", label: "Action 1" },
    { value: "action2", label: "Action 2" },
  ];
  return (
    <>
      <div className="cs-table">
        <div className="col-lg-12 search-bar col-12 d-flex align-items-center">
          <h2 className="col-lg-6 col-12 fs-6 fw-bold">All Apis</h2>
        </div>
        <TableView header={Header} data={data} />
      </div>
    </>
  );
};
export default AllApis;
