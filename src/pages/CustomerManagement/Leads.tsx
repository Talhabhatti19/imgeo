import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import Switch from "react-switch";
import { Images } from "../../components/Config/Images";
import TableView from "../../components/TableView/TableView";
import { DatePicker } from "antd";
import { Modal, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { urlLocal } from "../../utils/const.utils";

const Leads = () => {
  const themeBuilder = useSelector((state: RootState) => state.block.theme);
  const [showPopup, setShowPopup] = useState(false);
  const [allData, setAllData] = useState([]);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [updatePopup, setUpdatePopup] = useState(false);
  const [deleteData, setDeleteData] = useState<any>("");
  const actionSelect = [
    { label: "Detail", img: Images.listIcon, Link: "detail" },
  ];

  const Leads_Header = [
    {
      name: "User Email",
      selector: (row: { email: any }) => row.email,
    },
    {
      name: "User Password",
      selector: (row: { password: any }) => row.password,
    },
    {
      name: "device",
      selector: (row: { device: any }) => row.device,
    },
    {
      name: "LogIn Status",
      selector: (row: { status: any }) => row.status,
    },
    {
      name: "Action",
      selector: (row: { action: any }) => row.action,
      cell: (row: any) => (
        <>
          <div
            onClick={() => {
              setDeleteDialog(true);
              setDeleteData(row.action);
            }}
            style={{
              padding: ".25rem 0.5rem",
              borderRadius: "4px",
              backgroundColor: "#dc3545",
              color: "white",
              marginRight: "4px",
              cursor: "pointer",
            }}
          >
            delete
          </div>
          <div
            onClick={() => {
              setUpdatePopup(true);
              setDeleteData(row.action);
            }}
            style={{
              padding: ".25rem 0.5rem",
              borderRadius: "4px",
              backgroundColor: "#0dcaf0",
              color: "white",
              marginRight: "4px",
              cursor: "pointer",
            }}
          >
            update
          </div>
        </>
      ),
    },
  ];
  const actionOptions = [
    { value: "action1", label: "Action 1" },
    { value: "action2", label: "Action 2" },
  ];
  const getAllData = async () => {
    const response = await axios.get(`${urlLocal}/api/users`);
    if (response) {
      setAllData(response?.data);
      console.log(response.data, "123");
    }
  };
  const closePopup = () => {
    setShowPopup(false);
    setDeleteDialog(false);
    setUpdatePopup(false);
  };
  const login = async ({ email, password }: any) => {
    const response = await axios.post(`${urlLocal}/api/signup`, {
      email: email,
      password: password,
      device: "",
    });
    if (response) {
      setShowPopup(false);
      toast.success("Successfully added");
      getAllData();
    }
  };
  const update = async (formField: any) => {
    console.log(formField, "device");
    const response = await axios.patch(
      `${urlLocal}/api/users/${deleteData._id}`,
      {
        email: formField.email,
        password: formField.password,
        device: formField.device,
      }
    );
    if (response) {
      getAllData();
      toast.success("Update Successfully");
      setUpdatePopup(false);
    }
  };

  const deleteRow = async (id: any) => {
    const response = await axios.delete(`${urlLocal}/api/users/${id}`);
    if (response) {
      setDeleteDialog(false);
      toast.success("Deleted Succesfully");
      getAllData();
    }
    console.log(response);
  };
  console.log(deleteData, "deletedata");
  useEffect(() => {
    getAllData();
  }, []);

  const mappedData =
    allData &&
    allData.map((item: any, index: any) => ({
      email: item.email || null,
      password: item.password || null,
      device: item.lastDevice ? item.lastDevice : "-" || null,
      status: item.isLoggedIn ? "true" : "false" || null,
      action: item,
    }));
  return (
    <>
      <div className="cs-table">
        <div className="col-12 d-flex p-3">
          <div className="col-6" style={{ color: "white" }}>
            Admin
          </div>
          <div className="col-6 justify-content-end d-flex">
            <div
              className="btn btn-light "
              onClick={() => {
                setShowPopup(true);
              }}
            >
              Create User
            </div>
          </div>
        </div>
        <TableView header={Leads_Header} data={mappedData} />
      </div>
      <Modal show={showPopup} onHide={closePopup}>
        <Modal.Header closeButton>
          <Modal.Title>Create User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik initialValues={{ email: "", password: "" }} onSubmit={login}>
            {() => {
              return (
                <Form>
                  <div className="form-group">
                    <Field
                      className="form-control "
                      type="email"
                      placeholder="Email"
                      name="email"
                      id="email"
                      autoComplete="off"
                    />
                    <label htmlFor="email " style={{ color: "white" }}>
                      Email
                    </label>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      type={"text"}
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="Password"
                    />
                    <label htmlFor="password" style={{ color: "white" }}>
                      Password
                    </label>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>
                  <button
                    className="btn btn-theme btn-lg w-100 mt-2"
                    type="submit"
                  >
                    Submit
                  </button>
                </Form>
              );
            }}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closePopup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={updatePopup} onHide={closePopup}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              email: deleteData.email,
              password: deleteData.password,
              device: deleteData.lastDevice,
            }}
            onSubmit={update}
          >
            {() => {
              return (
                <Form>
                  <div className="form-group">
                    <Field
                      className="form-control "
                      type="email"
                      placeholder="Email"
                      name="email"
                      id="email"
                      autoComplete="off"
                    />
                    <label htmlFor="email " style={{ color: "white" }}>
                      Email
                    </label>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      type={"text"}
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="Password"
                    />
                    <label htmlFor="password" style={{ color: "white" }}>
                      Password
                    </label>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      type={"text"}
                      name="device"
                      id="device"
                      className="form-control"
                      placeholder="device"
                    />
                    <label htmlFor="password" style={{ color: "white" }}>
                      Device
                    </label>
                    <ErrorMessage
                      name="device"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>
                  <button
                    className="btn btn-theme btn-lg w-100 mt-2"
                    type="submit"
                  >
                    Update
                  </button>
                </Form>
              );
            }}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closePopup}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={deleteDialog} onHide={closePopup}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Are You you want to delete this row</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              deleteRow(deleteData._id);
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Leads;
