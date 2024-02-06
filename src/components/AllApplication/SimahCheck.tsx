import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

const SimahCheck = () => {
  const [selectTab, setSelectedTab] = useState();
  const tapOptions = [
    {
      title: "Consumer Inquiry",
      key: "ConsumerInquiry",
      folder: "",
    },
    {
      title: "Upload Simah Consumer Document",
      key: "UploadSimahConsumerDocument",
      folder: "",
    },
  ];
  return (
    <>
      <div className="">
        <div className="col-12 myTab">
          <div className="card mb-4">
            <div className="card-body">
              <div className="row p-3">
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
      </div>
    </>
  );
};
export default SimahCheck;
