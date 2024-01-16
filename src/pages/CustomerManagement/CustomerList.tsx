import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { Images } from "../../components/Config/Images";
import DataTable from "react-data-table-component";
import { Customer_List_Header } from "../../components/Config/TableHeaders";
import TableView from "../../components/TableView/TableView";
import { DatePicker } from "antd";

const data = [
  {
    Customer: "jhdbfs",
    ProductName: "kajbdsf",
    ApplicationNo: "2235",
    CrNumber: "1234",
    Email: "11@gmail.com",
    Phone: "123456",
    Date: "12.34.2044",
    ParentStatus: "---",
    Status: "active",
    Action: "--",
  },
];

const CustomerList = () => {
  const checkReduxState = useSelector((state: RootState) => state.block.check);
  console.log(checkReduxState, "checkReduxState");
  return (
    <>
      <div className="cs-table">
        <div className="col-lg-12 search-bar col-12 d-flex align-items-center">
          <h2 className="col-lg-6 col-12 fs-6 fw-bold">Customers</h2>
          <form
            action="search-bar"
            className="col-lg-6 col-12 d-flex justify-content-end pb-2"
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
        </div>
        <TableView header={Customer_List_Header} data={data} />
      </div>
    </>
  );
};
export default CustomerList;
