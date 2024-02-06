import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
const EnvironmentConfig = () => {
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
                    <h4>KYC CITIZEN INFO</h4>
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="BaseURL">
                        Base URL
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="BaseURL"
                        id="BaseURL"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="AccountHolderName"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                    <div className="form-group new_password form-label-group col-md-6">
                      <label className="pb-1" htmlFor="EndPoint">
                        End Point
                      </label>
                      <Field
                        type="text"
                        name="EndPoint"
                        id="EndPoint"
                        className="form-control"
                        placeholder="N/A"
                      />

                      <ErrorMessage
                        name="EndPoint"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 row pt-3">
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="Environment">
                        Environment
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="Environment"
                        id="Environment"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="Environment"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="Method">
                        Method
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="Method"
                        id="Method"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="Method"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 row pt-3">
                    <div>Credentials</div>
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="Password">
                        Password
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="Password"
                        id="Password"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="Password"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="UserName">
                        User Name
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="UserName"
                        id="UserName"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="UserName"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                  </div>
                  <div className="form-group form-label-group col-md-6 pt-3">
                    <label className="pb-1" htmlFor="RequestUrl">
                      Request Url
                    </label>
                    <Field
                      className="form-control col-6"
                      type="text"
                      placeholder="N/A"
                      name="RequestUrl"
                      id="RequestUrl"
                      autoComplete="off"
                    />

                    <ErrorMessage
                      name="RequestUrl"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>
                  <div className="col-md-12 row pt-3">
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="Parameters">
                        Parameters
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="Parameters"
                        id="Parameters"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="Parameters"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                    <div className="form-group form-label-group col-md-6 mb-4">
                      <label className="pb-1" htmlFor=""></label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name=""
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
                </div>
                <div className="container-fluid">
                  <div className="col-md-12  row pt-3">
                    <h4>KYC CITIZEN ADDRESS</h4>
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="BaseURL">
                        Base URL
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="BaseURL"
                        id="BaseURL"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="AccountHolderName"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                    <div className="form-group new_password form-label-group col-md-6">
                      <label className="pb-1" htmlFor="EndPoint">
                        End Point
                      </label>
                      <Field
                        type="text"
                        name="EndPoint"
                        id="EndPoint"
                        className="form-control"
                        placeholder="N/A"
                      />

                      <ErrorMessage
                        name="EndPoint"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 row pt-3">
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="Environment">
                        Environment
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="Environment"
                        id="Environment"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="Environment"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="Method">
                        Method
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="Method"
                        id="Method"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="Method"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 row pt-3">
                    <div>Credentials</div>
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="Password">
                        Password
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="Password"
                        id="Password"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="Password"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="UserName">
                        User Name
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="UserName"
                        id="UserName"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="UserName"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                  </div>
                  <div className="form-group form-label-group col-md-6 pt-3">
                    <label className="pb-1" htmlFor="RequestUrl">
                      Request Url
                    </label>
                    <Field
                      className="form-control col-6"
                      type="text"
                      placeholder="N/A"
                      name="RequestUrl"
                      id="RequestUrl"
                      autoComplete="off"
                    />

                    <ErrorMessage
                      name="RequestUrl"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>
                  <div className="col-md-12 row pt-3">
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="Parameters">
                        Parameters
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="Parameters"
                        id="Parameters"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="Parameters"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                    <div className="form-group form-label-group col-md-6 mb-4">
                      <label className="pb-1" htmlFor=""></label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name=""
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
                </div>
                <div className="container-fluid">
                  <div className="col-md-12  row pt-3">
                    <h4>KYC CITIZEN ADDRESS</h4>
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="BaseURL">
                        Base URL
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="BaseURL"
                        id="BaseURL"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="AccountHolderName"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                    <div className="form-group new_password form-label-group col-md-6">
                      <label className="pb-1" htmlFor="EndPoint">
                        End Point
                      </label>
                      <Field
                        type="text"
                        name="EndPoint"
                        id="EndPoint"
                        className="form-control"
                        placeholder="N/A"
                      />

                      <ErrorMessage
                        name="EndPoint"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 row pt-3">
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="Environment">
                        Environment
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="Environment"
                        id="Environment"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="Environment"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="Method">
                        Method
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="Method"
                        id="Method"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="Method"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 row pt-3">
                    <div>Credentials</div>
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="Password">
                        Password
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="Password"
                        id="Password"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="Password"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="UserName">
                        User Name
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="UserName"
                        id="UserName"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="UserName"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                  </div>
                  <div className="form-group form-label-group col-md-6 pt-3">
                    <label className="pb-1" htmlFor="RequestUrl">
                      Request Url
                    </label>
                    <Field
                      className="form-control col-6"
                      type="text"
                      placeholder="N/A"
                      name="RequestUrl"
                      id="RequestUrl"
                      autoComplete="off"
                    />

                    <ErrorMessage
                      name="RequestUrl"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>
                  <div className="col-md-12 row pt-3">
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="Parameters">
                        Parameters
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="Parameters"
                        id="Parameters"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="Parameters"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                    <div className="form-group form-label-group col-md-6 mb-4">
                      <label className="pb-1" htmlFor=""></label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name=""
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
                </div>
                <div className="container-fluid">
                  <div className="col-md-12  row pt-3">
                    <h4>KYC CITIZEN ADDRESS</h4>
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="BaseURL">
                        Base URL
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="BaseURL"
                        id="BaseURL"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="AccountHolderName"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                    <div className="form-group new_password form-label-group col-md-6">
                      <label className="pb-1" htmlFor="EndPoint">
                        End Point
                      </label>
                      <Field
                        type="text"
                        name="EndPoint"
                        id="EndPoint"
                        className="form-control"
                        placeholder="N/A"
                      />

                      <ErrorMessage
                        name="EndPoint"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 row pt-3">
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="Environment">
                        Environment
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="Environment"
                        id="Environment"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="Environment"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="Method">
                        Method
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="Method"
                        id="Method"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="Method"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 row pt-3">
                    <div>Credentials</div>
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="Password">
                        Password
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="Password"
                        id="Password"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="Password"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="UserName">
                        User Name
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="UserName"
                        id="UserName"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="UserName"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                  </div>
                  <div className="form-group form-label-group col-md-6 pt-3">
                    <label className="pb-1" htmlFor="RequestUrl">
                      Request Url
                    </label>
                    <Field
                      className="form-control col-6"
                      type="text"
                      placeholder="N/A"
                      name="RequestUrl"
                      id="RequestUrl"
                      autoComplete="off"
                    />

                    <ErrorMessage
                      name="RequestUrl"
                      component="div"
                      className="invalid-feedback text-danger"
                    />
                  </div>
                  <div className="col-md-12 row pt-3">
                    <div className="form-group form-label-group col-md-6">
                      <label className="pb-1" htmlFor="Parameters">
                        Parameters
                      </label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name="Parameters"
                        id="Parameters"
                        autoComplete="off"
                      />

                      <ErrorMessage
                        name="Parameters"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                    <div className="form-group form-label-group col-md-6 mb-4">
                      <label className="pb-1" htmlFor=""></label>
                      <Field
                        className="form-control col-6"
                        type="text"
                        placeholder="N/A"
                        name=""
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
export default EnvironmentConfig;
