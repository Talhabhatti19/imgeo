import React, { useState } from "react";

import { Dropdown, Tab, Tabs } from "react-bootstrap";
import Email from "./Email";
import Sms from "./Sms";

const NotificationTable = () => {
  const [selectTab, setSelectedTab] = useState("Email");
  const tapOptions = [
    {
      title: "Email",
      key: "Email",
      folder: <Email />,
    },
    {
      title: "Sms",
      key: "Sms",
      folder: <Sms />,
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
