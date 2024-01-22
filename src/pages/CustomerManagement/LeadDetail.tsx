import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import Switch from "react-switch";
import { Images } from "../../components/Config/Images";
import TableView from "../../components/TableView/TableView";
import { DatePicker } from "antd";
import { Button, Dropdown, Modal, Tab, Tabs } from "react-bootstrap";
import Leads from "./Leads";
import ManagePermission from "../Settings/ManagePermission";
import LeadOverView from "./LeadOverView";

const LeadDetail = () => {
  const actionOptions = [
    { label: "Customer Name", value: "المحدودة XXX شركة" },
    { label: "CR Number", value: "1010XXXX29" },
    { label: "Customer Name", value: "المحدودة XXX شركة" },
    { label: "CR Number", value: "1010XXXX29" },
    { label: "Customer Name", value: "المحدودة XXX شركة" },
    { label: "CR Number", value: "1010XXXX29" },
  ];
  const tapOptions = [
    { title: "OverView", key: "OverView", folder: <LeadOverView /> },
    {
      title: "Loan Application",
      key: "LoanApplication",
      folder: <ManagePermission />,
    },
    {
      title: "Company manager's list",
      key: "managerlist",
      folder: "",
    },
    {
      title: "Compliance Check",
      key: "complianceCheck",
      folder: "",
    },
    { title: "Bayaan Check", key: "bayancheck", folder: "" },
  ];
  const midpoint = Math.ceil(actionOptions.length / 2);
  const firstHalf = actionOptions.slice(0, midpoint);
  const secondHalf = actionOptions.slice(midpoint);
  const [selectTab, setSelectedTab] = useState("OverView");
  return (
    <>
      <div className="cs-table">
        <div className="col-lg-12 search-bar col-12 d-flex align-items-center">
          <h2 className="col-lg-6 col-12 fs-6 fw-bold">Lead Detail</h2>
        </div>
        <div className="col-12 mt-3 myTab">
          <div className="card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  {firstHalf.map((item: any) => (
                    <>
                      <div className="flex-mode">
                        <div className="flex-heading">{item.label}</div>
                        <div className="flex-text">{item.value}</div>
                      </div>
                    </>
                  ))}
                </div>
                <div className="col-md-6">
                  {secondHalf.map((item: any) => (
                    <>
                      <div className="flex-mode">
                        <div className="flex-heading">{item.label}</div>
                        <div className="flex-text">{item.value}</div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Tabs
            id="controlled-tab-example"
            className="mt-30 position-relative"
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
    </>
  );
};
export default LeadDetail;
