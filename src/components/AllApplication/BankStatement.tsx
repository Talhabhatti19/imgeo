import { ErrorMessage, Field, Form, Formik } from "formik";

const BankStatement = () => {
  const submit = () => {};
  return (
    <>
      <div className="col-12 myTab">
        <Formik initialValues={{ email: "", password: "" }} onSubmit={submit}>
          {() => {
            return (
              <Form>
                <div className="col-md-12 row pt-3">
                  <div className="form-group form-label-group col-md-6">
                    <label className="pb-1" htmlFor="AccountHolderName">
                      Account Holder Name
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
export default BankStatement;
