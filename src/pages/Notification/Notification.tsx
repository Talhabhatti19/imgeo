import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { Images } from "../../components/Config/Images";
import TableView from "../../components/TableView/TableView";
import { DatePicker } from "antd";
import OverView from "../../components/Dashboard/OverView";
import Graphs from "../../components/Dashboard/Graphs";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";
import { Customer_List_Header } from "../../components/Config/TableHeaders";
import { Dropdown, Tab, Tabs } from "react-bootstrap";
import Email from "./Email";

const NotificationTable = () => {
  const [selectTab, setSelectedTab] = useState("Email");
  const tapOptions = [
    {
      title: "Email",
      key: "Email",
      folder: <Email/>,
    },
    {
      title: "Sms",
      key: "Sms",
      folder: "",
    },
    {
      title: "Push",
      key: "Push",
      folder: "",
    },
  ];
  return (
    <>
      <div className="cs-table">
       
        <div className="row">
          <h2 className="col-md-2  fs-6 fw-bold">{"Notification"}</h2>
     
        </div>
        <Tabs
            id="controlled-tab-example"
            className="mt-30 position-relative tabs-overflow mt-3"
            activeKey={selectTab}
            onSelect={(tab: any) => {
              setSelectedTab(tab);
            }}
          >
            {tapOptions.map((item: any) => (
              <Tab eventKey={item.key} title={item.title}>
                {selectTab === item.key && item.folder}
              </Tab>
            ))}
          </Tabs>
      </div>
    </>
  );
};
export default NotificationTable;
