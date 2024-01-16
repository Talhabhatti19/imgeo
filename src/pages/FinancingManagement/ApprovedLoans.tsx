import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { Images } from "../../components/Config/Images";
import DataTable from "react-data-table-component";
import {
  All_Application_Header,
  Approved_Loans_Header,
} from "../../components/Config/TableHeaders";
import TableView from "../../components/TableView/TableView";
import { Dropdown } from "react-bootstrap";
import { DatePicker, Select } from "antd";

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

const ApprovedLoans = () => {
  const checkReduxState = useSelector((state: RootState) => state.block.check);
  console.log(checkReduxState, "checkReduxState");
  const actionSelect = [
    { label: "Partners", img: Images.listIcon, Link: "partner" },
    { label: "Settings", img: Images.settingIcon, Link: "setting" },
    { label: "Documents", img: Images.settingIcon, Link: "document" },
    { label: "Edit", img: Images.settingIcon, Link: "edit" },
  ];
  return (
    <>
      <div className="cs-table">
        <div className="col-xl-12 col-12 d-flex align-items-center pb-3">
          <h2 className="col-xl-4 col-12 fs-6 fw-bold">
            Approved Financing Applications
          </h2>
          <div className="col-xl-8 col-12 d-flex justify-content-end align-items-center">
            <div className="d-grid pb-2 search-bar">
              <label htmlFor="" className="label-theme">
                Status
              </label>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Select
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {actionSelect.map((item, index) => (
                    <Dropdown.Item>
                      <>
                        <div className="d-flex">
                          <div className="col-3"></div>

                          {item.label}
                        </div>
                      </>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-grid pb-2 search-bar">
              <label htmlFor="" className="label-theme">
                Partner
              </label>
              <Select style={{ width: "130px" }}>
                <option value="1">Test</option>
                <option value="1">Test</option>
                <option value="1">Test</option>
              </Select>
            </div>
            <form
              action=""
              className=" d-flex justify-content-end pb-2 search-bar"
            >
              <div className="d-flex justify-content-between ">
                <div className="d-grid">
                  <label htmlFor="" className="label-theme">
                    From
                  </label>
                  <DatePicker
                    style={{
                      width: "200px",
                      height: "36px",
                      marginRight: "10px",
                    }}
                  />
                </div>

                <div className="d-grid">
                  <label htmlFor="" className="label-theme">
                    To
                  </label>
                  <DatePicker
                    style={{
                      width: "200px",
                      height: "36px",
                    }}
                  />
                </div>
              </div>
            </form>
            <div className="theme-btn mt-1">Export CSV</div>
          </div>
        </div>
        <TableView header={Approved_Loans_Header} data={data} />
      </div>
    </>
  );
};
export default ApprovedLoans;
