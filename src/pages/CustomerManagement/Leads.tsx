import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import Switch from "react-switch";
import { Images } from "../../components/Config/Images";
import DataTable from "react-data-table-component";
import TableView from "../../components/TableView/TableView";
import { Calendar, DatePicker } from "antd";
import { Col, Row, Modal, Button } from "react-bootstrap";




const Leads = () => {
  const checkReduxState = useSelector((state: RootState) => state.block.check);
  const [showPopup, setShowPopup] = useState(false);

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
      Status: "inactive",
      Action: "--",
    },
  ]);
 
  const handleToggleChange = (index:any,e:any) => {
    console.log(index,e,"check")
    const updatedData = [...rowData];
    updatedData[index].Status = updatedData[index].Status === "active" ? "inactive" : "active";
    setRowData(updatedData);

    if(e===false || e===true){
    setShowPopup(!showPopup);
    }

  };
   const Leads_Header = [
    {
      name: "Customer Name",
      selector: (row: { Customer: any }) => row.Customer,
    },
    {
      name: "Application No.",
      selector: (row: { ApplicationNo: any }) => row.ApplicationNo,
    },
    {
      name: "Product Name",
      selector: (row: { ProductName: any }) => row.ProductName,
    },
    {
      name: "Cr Number.",
      selector: (row: { CrNumber: any }) => row.CrNumber,
    },
    {
      name: "Email",
      selector: (row: { Email: any }) => row.Email,
    },
    {
      name: "Phone",
      selector: (row: { Phone: any }) => row.Phone,
    },
    {
      name: "Date",
      selector: (row: { Date: any }) => row.Date,
    },
    {
      name: "Parent Status",
      selector: (row: { ParentStatus: any }) => row.ParentStatus,
    },
    {
      name: "Status",
      selector: (row: { Status: any }) => row.Status,
      cell:(row:any,index:any)=>(
        <div>
                <Switch
        onChange={(e: any) => handleToggleChange(index, e)}
        checked={row.Status === "active"}
      />
        </div>
      
    )
      },
    {
      name: "Action",
      selector: (row: { Action: any }) => row.Action,
    },
  ];
  const actionOptions = [
    { value: "action1", label: "Action 1" },
    { value: "action2", label: "Action 2" },
  ];

  const handleActionChange = (index:any, selectedAction:any) => {

    const updatedData = [...rowData];
    updatedData[index] = { ...updatedData[index], Action: selectedAction };
    setRowData(updatedData);
    console.log(updatedData);
  }
  let handleSubmit = (fields: any) => {
    console.log("submit:", fields);
  };


  const handleStatusClick = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="cs-table">
        <div className="col-lg-12 search-bar col-12 d-flex align-items-center">
          <h2 className="col-lg-6 col-12 fs-6 fw-bold">Leads</h2>
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
       <Modal show={showPopup} onHide={closePopup}>
        <Modal.Header closeButton>
          <Modal.Title>Popup Content</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Additional content goes here */}
          {showPopup && (
            <div>
              <p>Status: </p>
              {/* Add more details as needed */}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closePopup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Leads;
