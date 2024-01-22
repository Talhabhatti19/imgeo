import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import Switch from "react-switch";
import { Images } from "../../components/Config/Images";
import TableView from "../../components/TableView/TableView";
import { DatePicker } from "antd";
import { Tab, Tabs } from "react-bootstrap";
import Leads from "./Leads";
import ManagePermission from "../Settings/ManagePermission";

const LeadOverView = () => {
  const actionOptions = [
    {
      mainHeading: "English ",
      value: "arbi",
      children: [
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
      ],
    },
    {
      mainHeading: "English ",
      value: "arbi",
      children: [
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
      ],
    },
    {
      mainHeading: "English ",
      value: "arbi",
      children: [
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
      ],
    },
    {
      mainHeading: "English ",
      value: "arbi",
      children: [
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
        { label: "Customer Name", value: "المحدودة XXX شركة" },
        { label: "CR Number", value: "1010XXXX29" },
      ],
    },
  ];
  const tapOptions = [
    { title: "Customer Information", key: "CustomerInformation", folder: "" },
    {
      title: "Business Information",
      key: "BusinessInformation",
      folder: "",
    },
  ];
  const midpoint = Math.ceil(actionOptions.length / 2);
  const firstHalf = actionOptions.slice(0, midpoint);
  const secondHalf = actionOptions.slice(midpoint);
  const [selectTab, setSelectedTab] = useState();
  return (
    <>
      <div className="">
        <div className="col-12 myTab">
          <div className="card mb-4">
            <div className="card-body">
              <div className="row p-3">
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
                <div className="col-12 myTab">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        {actionOptions.map((item) => (
                          <>
                            <div className="">
                              <div className="leadoverview-header">
                                <div
                                  className="flex-heading col-md-6"
                                  style={{ color: "#004D72" }}
                                >
                                  {item.mainHeading}
                                </div>
                                <div
                                  className="flex-text col-md-6"
                                  style={{ color: "#004D72" }}
                                >
                                  {item.value}
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              {item.children
                                ?.slice(0, Math.ceil(item.children.length / 2))
                                .map((item: any) => (
                                  <>
                                    <div className="flex-mode">
                                      <div className="flex-heading">
                                        {item.label}
                                      </div>
                                      <div className="flex-text">
                                        {item.value}
                                      </div>
                                    </div>
                                  </>
                                ))}
                            </div>
                            <div className="col-md-6">
                              {item.children
                                ?.slice(Math.ceil(item.children.length / 2))
                                .map((item: any) => (
                                  <>
                                    <div className="flex-mode">
                                      <div className="flex-heading">
                                        {item.label}
                                      </div>
                                      <div className="flex-text">
                                        {item.value}
                                      </div>
                                    </div>
                                  </>
                                ))}
                            </div>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};
export default LeadOverView;
