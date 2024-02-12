import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { Images } from "../../components/Config/Images";
import TableView from "../../components/TableView/TableView";
import { DatePicker, Select } from "antd";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import OverView from "../../components/Dashboard/OverView";
import Graphs from "../../components/Dashboard/Graphs";

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

const NotificationTable = () => {
  const notificationStructure = useSelector(
    (state: RootState) => state.block.notificationStructure
  );
  const dashboardStructure = useSelector(
    (state: RootState) => state.block.dashboardStructure
  );
  console.log(notificationStructure, "notificationStructure");
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
  const renderedFinanceOverview =
    notificationStructure?.financeOverview &&
    notificationStructure?.financeOverview.map((item: any, index: any) => (
      <div key={index} className="view-chart mb-4">
        <div className="chart-header d-flex justify-content-between align-items-center">
          <h3 className="welcome-heading">{item.title}</h3>
          <div className="d-flex align-items-center">
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
        </div>
        {item?.child &&
          item?.child.map((chart: any, chartIndex: any) => (
            <div style={{ marginTop: "20px" }}>
              <Graphs key={chartIndex} option={chart} />
            </div>
          ))}
      </div>
    ));
  const renderedBarOverview =
    notificationStructure?.barchart &&
    notificationStructure?.barchart.map((item: any, index: any) => (
      <div key={index} className="col-6 p-2">
        <h2 className="col-12 fs-6 fw-bold mt-5">{item.title}</h2>
        {item.child.map((chart: any, chartIndex: any) => (
          <div className="view-chart" key={chartIndex}>
            <Graphs option={chart} />
          </div>
        ))}
      </div>
    ));
  const tableHeader = Array.isArray(dashboardStructure?.table?.header)
    ? dashboardStructure?.table?.header
    : [];
  const tableData = Array.isArray(notificationStructure?.table?.data)
    ? notificationStructure?.table.data
    : [];
  console.log(tableHeader, "tableHeader");
  return (
    <>
      <div className="cs-table">
        <div className="col-xl-12 col-12 d-flex align-items-center pb-3">
          {notificationStructure?.title && (
            <h2 className="col-xl-4 col-12 fs-6 fw-bold">
              {notificationStructure?.title}
            </h2>
          )}
          <div className="col-xl-8 col-12 d-flex justify-content-end align-items-center">
            {notificationStructure?.parentStatus && (
              <div className="d-grid pb-2 search-bar">
                <label htmlFor="" className="label-theme">
                  Parent Status
                </label>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {notificationStructure?.parentStatus &&
                      notificationStructure?.parentStatus.map((item: any) => (
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
            )}
            {notificationStructure?.status && (
              <div className="d-grid pb-2 search-bar">
                <label htmlFor="" className="label-theme">
                  Status
                </label>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {notificationStructure?.status &&
                      notificationStructure?.status.map((item: any) => (
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
            )}
            {notificationStructure?.partner && (
              <div className="d-grid pb-2 search-bar">
                <label htmlFor="" className="label-theme">
                  Partner
                </label>
                <Select style={{ width: "130px" }}>
                  {notificationStructure?.partner &&
                    notificationStructure?.partner.map((item: any) => (
                      <option value="1">{item.label}</option>
                    ))}
                </Select>
              </div>
            )}
            {notificationStructure?.filter && (
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
            )}
            {notificationStructure?.button &&
              notificationStructure?.button.map((item: any) => (
                <div className="theme-btn mt-1 button-margin">{item.title}</div>
              ))}
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <OverView cards={notificationStructure.cards} />
            {renderedFinanceOverview}
          </div>
        </div>
        <div className="col-12 d-flex mt-2 flex-wrap">
          {" "}
          {renderedBarOverview}
        </div>
        {notificationStructure?.table?.title && (
          <div className="p-2">{notificationStructure.table.title}</div>
        )}
        <TableView apiHeader={tableHeader} data={tableData} />
      </div>
    </>
  );
};
export default NotificationTable;
