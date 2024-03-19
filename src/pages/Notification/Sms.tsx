import React from "react";

import TableView from "../../components/TableView/TableView";

import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";

import { getAllSms } from "./NotificationCrud";
import { ErrorMessage, Field, Form, Formik } from "formik";

const Sms = () => {
  const allSmsInfo = () => {
    getAllSms()
      .then((response) => {
        console.log(response, "resposne");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  allSmsInfo();
  const Header = [
    {
      name: "Template Name",
      selector: (row: { ApplicationNo: any }) => row.ApplicationNo,
    },
    {
      name: "Receiver",
      selector: (row: { KastleContractNo: any }) => row.KastleContractNo,
    },
    {
      name: "Status",
      selector: (row: { KastleApplicationNo: any }) => row.KastleApplicationNo,
    },
    {
      name: "Action",
      selector: (row: { KastleStatus: any }) => row.KastleStatus,
    },
  ];
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
  const handleSubmitButton = () => {
    window.alert("heloo");
  };
  const button = [
    {
      title: "Create",
      onClick: handleSubmitButton,
    },
  ];
  return (
    <>
      <div className="cs-table">
        <DynamicHeaderStructure button={button} searchPlaceHolder={"Search"} />
        <TableView header={Header} data={data} />
        <Formik initialValues={{}} onSubmit={handleSubmitButton}>
          {() => {
            return (
              <Form>
                <div className="col-md-12 row pt-3">
                  <div className="form-group form-label-group col-md-6">
                    <label className="pb-1" htmlFor="RegistrationInquiry">
                      Template Name
                    </label>
                    <Field
                      className="form-control col-6"
                      type="text"
                      placeholder="N/A"
                      name="Registration Inquiry (Guest)"
                      id="RegistrationInquiry"
                      autoComplete="off"
                    />

                    <ErrorMessage
                      name="AccountHolderName"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>
                  <div className="form-group new_password form-label-group col-md-6">
                    <label className="pb-1" htmlFor="BankName">
                      Bank Name
                    </label>
                    <Field
                      type="text"
                      name="BankName"
                      id="BankName"
                      className="form-control"
                      placeholder="N/A"
                    />

                    <ErrorMessage
                      name="BankName"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>
                </div>
                <div className="col-md-12 row pt-3">
                  <div className="form-group form-label-group col-md-6">
                    <label className="pb-1" htmlFor="AccountNumber">
                      Account Number
                    </label>
                    <Field
                      className="form-control col-6"
                      type="text"
                      placeholder="N/A"
                      name="AccountNumber"
                      id="AccountNumber"
                      autoComplete="off"
                    />

                    <ErrorMessage
                      name="AccountNumber"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>

                  <div className="text-start mt-3">
                    No transactions available.
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};
export default Sms;
