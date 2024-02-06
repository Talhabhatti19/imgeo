import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Images } from "../Config/Images";
import { ErrorMessage, Field, Form, Formik } from "formik";
import AuthService from "../../services/AuthService";
import * as Yup from "yup";
import { authSlice } from "../../redux/apis/apisSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [change, setChange] = useState<any>();
  const [swapPassword, setSwapPassword] = useState(false);
  const [loginState, setLoginState] = useState(false);
  const handleToggleView = () => {
    setIsForgotPassword((prev) => !prev);
  };

  let login = async (formField: any) => {
    console.log(formField, "formField");
    let response = await AuthService.post(
      "http://192.168.6.123:3003/admin-user/login",
      formField
    );
    if (response) {
      console.log(response?.data, "response");
      navigate("/dashboard");
      // window.location.pathname = "/dashboard";
      // localStorage.clear();
      // let user = response.data.data;
      // localStorage.setItem("userID", user.id);
      // localStorage.setItem("email", user.email);
      // if (user.requiresPasswordChange || user.firstLogin) {
      //   // localStorage.setItem("isFirstLogin", true);
      //   window.location.pathname = "new-password";
      // } else {
      //   // localStorage.setItem("access", btoa(JSON.stringify(dummyRoutes)))
      //   localStorage.setItem(
      //     "access",
      //     btoa(JSON.stringify(user.role?.capabilites))
      //   );
      //   localStorage.setItem("token", user.authToken);
      //   localStorage.setItem("role", user.role?.title);
      //   localStorage.setItem(
      //     "profileImage",
      //     user.profileImageUrl
      //       ? user.profileImageUrl
      //       : process.env.PUBLIC_URL + `/images/user.png`
      //   );
      //   localStorage.setItem("fullName", user.fullName);
      //   if (user.role?.capabilites.indexOf("/dashboard") > -1) {
      //     // window.location.pathname = "/dashboard";
      //   } else {
      //     window.location.pathname = `${user.role?.capabilites[0]}`;
      //   }
      // }
      /* if (formField.rememberMe) {
          localStorage.setItem("rememberMe", true);
        } */
    }
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter email in proper format e.g. johndoes@hotmail.com")
      .required("Please enter your registered email"),
    password: Yup.string().required("Please enter your password"),
    /* .min(8, "Password must be at least 8 characters")
      .max(15, "Password not more than 15 characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Min 8 and Max 15 character with at least (one capital, one special symbol and one number"
      ) */
  });
  return (
    <>
      <div className="login-form">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="overlay-container">
                <div className="overlay">
                  <div
                    className={`overlay-panel overlay-right ${
                      isForgotPassword ? "l" : ""
                    }`}
                  >
                    <div className="text-center l mb-2">
                      <img src={Images.sidebarLogo} height="60" alt="" />
                    </div>
                    <h1>{isForgotPassword ? "Welcome !" : "One Step Away"}</h1>
                    <p>
                      {isForgotPassword
                        ? "To keep connected with us please login with your personal info."
                        : "Enter your account email to recover your password."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className={`form-container ${
                  isForgotPassword ? "forgot-container" : "sign-in-container"
                }`}
              >
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={validationSchema}
                  onSubmit={login}
                >
                  {() => {
                    return (
                      <Form>
                        <div className="form-group form-label-group">
                          <Field
                            className="form-control"
                            type="email"
                            placeholder="Email"
                            name="email"
                            id="email"
                            autoComplete="off"
                          />
                          <label htmlFor="email">Email</label>
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="invalid-feedback text-danger"
                          />
                        </div>
                        <div className="form-group new_password form-label-group">
                          <Field
                            type={swapPassword ? "text" : "password"}
                            name="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            onFocus={() => setChange(false)}
                            onBlur={(e: any) =>
                              e.target.value == ""
                                ? setChange(true)
                                : setChange(false)
                            }
                          />
                          <label htmlFor="password">Password</label>
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
                          Login
                        </button>
                        <div className="text-end mt-3">
                          <span
                            id="forgot-password"
                            onClick={handleToggleView}
                            className="pointer"
                          >
                            {isForgotPassword
                              ? "Sign In Instead?"
                              : "Forgot Password?"}
                          </span>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
