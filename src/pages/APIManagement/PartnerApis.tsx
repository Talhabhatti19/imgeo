import React from "react";
import { Images } from "../../components/Config/Images";
import TableView from "../../components/TableView/TableView";
import { Dropdown } from "react-bootstrap";

const PartnerApis = () => {
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
      name: "Enable/Disable API",
      selector: (row: { Status: any }) => row.Status,
    },
  ];

  return (
    <>
      <div className="cs-table">
        <div className="col-lg-12 search-bar col-12 d-flex align-items-center pb-2">
          <h2 className="col-lg-6 col-12 fs-6 fw-bold">All Apis</h2>
          <div className="col-lg-6 col-12 d-flex justify-content-end">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Test
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {actionSelect.map((item, index) => (
                  <Dropdown.Item>
                    <>
                      <div className="d-flex">
                        <div className="col-3">
                          <img src={item.img} alt="" />
                        </div>

                        {item.label}
                      </div>
                    </>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <TableView header={Header} data={data} />
      </div>
    </>
  );
};
export default PartnerApis;
