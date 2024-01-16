import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { Images } from "../../components/Config/Images";
import DataTable from "react-data-table-component";
import { Leads_Header } from "../../components/Config/TableHeaders";
import TableView from "../../components/TableView/TableView";



const Leads = () => {
  const checkReduxState = useSelector((state: RootState) => state.block.check);
  console.log(checkReduxState, "checkReduxState");

  const [rowData, setRowData] = useState([
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
  ]);
  const actionOptions = [
    { value: "action1", label: "Action 1" },
    { value: "action2", label: "Action 2" },
  ];

  const handleActionChange = (index:any, selectedAction:any) => {

    const updatedData = [...rowData];
    updatedData[index] = { ...updatedData[index], Action: selectedAction };
    setRowData(updatedData);
    console.log(updatedData);
  };
  return (
    <>
      <div className="cs-table">
        <div className="d-flex align-items-center">
          <h2 className="col-6 fs-6 fw-bold mt-5">Leads</h2>
          <div className="col-6 d-flex">from to</div>
        </div>
        <TableView
          header={Leads_Header}
          data={rowData.map((item:any, index:any) => ({
            ...item,
            Action: (
              <select
                value={item.Action}
                onChange={(e) => handleActionChange(index, e.target.value)}
              >
                <option value="" disabled>Select Action</option>
                {actionOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ),
          }))}
        />
      </div>
    </>
  );
};
export default Leads;
