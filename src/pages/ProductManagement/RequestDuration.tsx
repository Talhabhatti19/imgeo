import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
const RequestDuration = () => {
  const submit = () => {};
  return (
    <>
      <div className="setting-card-bg col-12 myTab">
        <Formik initialValues={{ email: "", password: "" }} onSubmit={submit}>
          {() => {
            return (
              <Form>
                <div className="container-fluid">
                  <div className="col-md-12  row pt-3">
                    <h3>Application Submission Duration:</h3>
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="AccountHolderName">
                        Loan Application Gap (days)
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="AccountHolderName"
                        id="AccountHolderName"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="AccountHolderName"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                  </div>

                  <div className="col-md-12 row pt-3">
                    <div className="form-group new_password form-label-group col-md-6">
                      <label className="pb-1" htmlFor="BankName">
                        Loan Application Idle Duration (days)
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
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="AccountNumber">
                        Department Idle Duration (days)
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
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="AccountNumber">
                        Open Banking Duration (days)
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
                  </div>
                  <div className="col-md-12 row pt-3">
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="AccountNumber">
                        Open Banking Duration (days)
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
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="AccountNumber">
                        Open Banking Duration (days)
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
                  </div>
                  <div className="col-md-12 row pt-3">
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="AccountNumber">
                        SIMAH_CONSUMER Duration (days)
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
                  </div>
                  <div className="d-flex justify-content-end mb-4">
                    <button className="btn-theme" style={{ width: "80px" }}>
                      Update
                    </button>
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
export default RequestDuration;
