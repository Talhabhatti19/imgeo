import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import EnvironmentConfig from "./EnvironmentConfig";
import FeeSetting from "./FeeStting";
import RequestDuration from "./RequestDuration";
import TermCondition from "./TermsCondition";

const Setting = () => {
  const [settingTab, setSettingTab] = useState("terms&condition");
  const settingTabs = [
    {
      title: "Terms & Condition",
      key: "terms&condition",
      folder: <TermCondition />,
    },
    {
      title: "Fee Setting",
      key: "feesetting",
      folder: <FeeSetting />,
    },

    {
      title: "Environment Configuration",
      key: "environmentconfiguration",
      folder: <EnvironmentConfig />,
    },
    {
      title: "Request Duration Settings",
      key: "requestdurationsettings",
      folder: <RequestDuration />,
    },
  ];

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12">
          <h3 className="welcome-heading">Micro Finance Settings</h3>
        </div>
        <div className="col-12 mt-3">
          <Tabs
            id="controlled-tab-example"
            className="mt-30 position-relative"
            activeKey={settingTab}
            onSelect={(tab: any) => {
              setSettingTab(tab);
            }}
          >
            {settingTabs.map((item) => (
              <Tab eventKey={item.key} title={item.title} key={item.key}>
                {settingTab === item.key && item.folder}
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Setting;
