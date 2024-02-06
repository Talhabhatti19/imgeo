import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import * as Yup from "yup";
const TermCondition = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter email in proper format e.g. johndoes@hotmail.com")
      .required("Please enter your registered email"),
    Contact: Yup.number().required("Please enter your contact number"),
  });
  const handleSubmit = () => {};
  return (
    <>
      <div className="setting-card-bg ">
        <div className="container-fluid">
          <Formik
            initialValues={{ email: "", Contact: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form>
                <div className="row">
                  <div className="col-md-6 mt-4">
                    <div className="form-group form-label-group">
                      <label htmlFor="email">Email</label>
                      <Field
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"
                        autoComplete="off"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mt-4 ">
                    <div className="form-group form-label-group">
                      <label htmlFor="Contact">Contact</label>
                      <Field
                        type="number"
                        name="Contact"
                        id="Contact"
                        className="form-control"
                        placeholder="Contact"
                        onBlur={(e: any) => e.target.value}
                      />
                      <ErrorMessage
                        name="Contact"
                        component="div"
                        className="invalid-feedback text-danger"
                      />
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col-md-6">
              <div>
                <label htmlFor="">Disclaimer</label>
                <CKEditor
                  editor={ClassicEditor}
                  data="<p> <h1>Disclaimer Text</h1> This Privacy Notice is not intended to, nor does it, create any contractual rights whatsoever or any other legal rights, nor does it create any obligations on us in respect of any other party or on behalf of any party. When you log in to third parties’ websites, you will not be subject or under this Privacy Notice. Moreover, we are not responsible for their websites’ content, and we do not represent third parties. Therefore, we recommend you review the privacy and security policy of each link you log in to.</p>"
                />
              </div>
            </div>

            <div className="col-md-6">
              <div>
                <label htmlFor="" className="d-flex justify-content-end">
                  إبراء ذمة
                </label>
                <CKEditor
                  editor={ClassicEditor}
                  data="
                     
                      <p>لا يهدف إشعار الخصوصية هذا إلى إنشاء أي حقوق تعاقدية من أي نوع أو أي حقوق قانونية أخرى، أو ينشئ أي التزامات علينا فيما يتعلق بأي طرف آخر أو نيابة عن أي طرف. عندما تقوم بتسجيل الدخول إلى مواقع الانترنت الخاصة بأي طرف ثالث، لن يسري إشعار الخصوصية هذا. إضافة إلى ذلك، نحن لسنا مسؤولين عن محتوى مواقع الويب الخاصة بأي طرف ثالث ولا نمثل أي طرف ثالث. لذلك، نوصيك بمراجعة سياسة الخصوصية والأمان لكل رابط تقوم بتسجيل الدخول إليه</p>"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div>
                <label htmlFor="">Disclaimer</label>
                <CKEditor
                  editor={ClassicEditor}
                  data="<p> <h1>Disclaimer Text</h1> This Privacy Notice is not intended to, nor does it, create any contractual rights whatsoever or any other legal rights, nor does it create any obligations on us in respect of any other party or on behalf of any party. When you log in to third parties’ websites, you will not be subject or under this Privacy Notice. Moreover, we are not responsible for their websites’ content, and we do not represent third parties. Therefore, we recommend you review the privacy and security policy of each link you log in to.</p>"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <label htmlFor="" className="d-flex justify-content-end">
                  إبراء ذمة
                </label>
                <CKEditor
                  editor={ClassicEditor}
                  data="
                      <p>لا يهدف إشعار الخصوصية هذا إلى إنشاء أي حقوق تعاقدية من أي نوع أو أي حقوق قانونية أخرى، أو ينشئ أي التزامات علينا فيما يتعلق بأي طرف آخر أو نيابة عن أي طرف. عندما تقوم بتسجيل الدخول إلى مواقع الانترنت الخاصة بأي طرف ثالث، لن يسري إشعار الخصوصية هذا. إضافة إلى ذلك، نحن لسنا مسؤولين عن محتوى مواقع الويب الخاصة بأي طرف ثالث ولا نمثل أي طرف ثالث. لذلك، نوصيك بمراجعة سياسة الخصوصية والأمان لكل رابط تقوم بتسجيل الدخول إليه</p>"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TermCondition;
