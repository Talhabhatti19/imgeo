import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { Images } from "../../components/Config/Images";
import TableView from "../../components/TableView/TableView";
import { DatePicker, Select } from "antd";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

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

const AllApplication = () => {
  const checkReduxState = useSelector((state: RootState) => state.block.check);
  console.log(checkReduxState, "checkReduxState");
  const actionSelect = [
    { label: "View", img: Images.listIcon, Link: "detail" },
    {
      label: "Documents",
      img: Images.settingIcon,
      Link: "application-document",
    },
    { label: "Activity Logs", img: Images.settingIcon, Link: "activity-log" },
    { label: "Resend Login Email", img: Images.settingIcon, Link: "edit" },
  ];

  const All_Application_Header = [
    {
      name: "Application No",
      selector: (row: { ApplicationNo: any }) => row.ApplicationNo,
    },
    {
      name: "Kastle Contract No",
      selector: (row: { KastleContractNo: any }) => row.KastleContractNo,
    },
    {
      name: "Kastle Application No",
      selector: (row: { KastleApplicationNo: any }) => row.KastleApplicationNo,
    },
    {
      name: "Kastle Status",
      selector: (row: { KastleStatus: any }) => row.KastleStatus,
    },
    {
      name: "Contract Status",
      selector: (row: { ContractStatus: any }) => row.ContractStatus,
    },
    {
      name: "Customer Name",
      selector: (row: { CustomerName: any }) => row.CustomerName,
    },
    {
      name: "CR No.",
      selector: (row: { CRNo: any }) => row.CRNo,
    },

    {
      name: "Product",
      selector: (row: { Product: any }) => row.Product,
    },
    {
      name: "Loan Tenure",
      selector: (row: { LoanTenure: any }) => row.LoanTenure,
    },
    {
      name: "Loan Amount",
      selector: (row: { LoanAmount: any }) => row.LoanAmount,
    },
    {
      name: "Application Date",
      selector: (row: { ApplicationDate: any }) => row.ApplicationDate,
    },
    {
      name: "Status",
      selector: (row: { Status: any }) => row.Status,
    },
    {
      name: "Reason",
      selector: (row: { Reason: any }) => row.Reason,
    },
    {
      name: "Action",
      selector: (row: { Action: any }) => row.Action,
      cell: (row: any) => (
        <div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {actionSelect.map((item, index) => (
                <Dropdown.Item>
                  <>
                    <Link to={`${item.Link}`} className="a-link">
                      <div className="d-flex">
                        <div className="col-2">
                          <img src={item.img} alt="" />
                        </div>

                        <div className="col-10">{item.label}</div>
                      </div>
                    </Link>
                  </>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="cs-table">
        <div className="col-xl-12 col-12 d-flex align-items-center pb-3">
          <h2 className="col-xl-2 col-12 fs-6 fw-bold">
            Financing Application List
          </h2>
          <div className="col-xl-10 col-12 d-flex justify-content-end align-items-center">
            <div className="d-grid pb-2 search-bar">
              <label htmlFor="" className="label-theme">
                Parent Status
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
                          <div className="col-3">
                            <input type="radio" />
                          </div>

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
        <TableView header={All_Application_Header} data={data} />
      </div>
    </>
  );
};
export default AllApplication;
