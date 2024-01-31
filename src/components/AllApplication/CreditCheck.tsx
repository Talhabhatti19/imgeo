import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import CreditInfo from "./CreditInfo";

const CreditCheck = () => {
  const [selectTab, setSelectedTab] = useState("CreditWeightagesInfoas");
  const tapOptions = [
    {
      title: "Credit Weightages Info as",
      key: "CreditWeightagesInfoas",
      folder: <CreditInfo />,
    },
    {
      title: "Approve Credit Info",
      key: "ApproveCreditInfo",
      folder: "",
    },
  ];
  return (
    <>
      <div className="col-12 myTab">
        <div className="card mb-4">
          <div className="card-body">
            <div className="p-2">
              <Tabs
                id="controlled-tab-example"
                className="mt-30 position-relative tabs-overflow"
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
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};
export default CreditCheck;
