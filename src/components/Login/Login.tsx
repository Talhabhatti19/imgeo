import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Images } from "../Config/Images";
import { ErrorMessage, Field, Form, Formik } from "formik";
import AuthService from "../../services/AuthService";
import * as Yup from "yup";
import { authSlice } from "../../redux/apis/apisSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import Loader from "../Loader/Loader";
import styled, { keyframes } from "styled-components";

const Login = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const navigate = useNavigate();
  const [change, setChange] = useState<any>();
  const [swapPassword, setSwapPassword] = useState(false);
  const [loginState, setLoginState] = useState(false);
  const [themeStatus, setThemeStatus] = useState(false);
  const [loader, setLoader] = useState(false);
  const themeBuilder = useSelector((state: RootState) => state.block.theme);
  const dispatch = useDispatch();
  const handleToggleView = () => {
    setIsForgotPassword((prev) => !prev);
  };
  let setTheme = async () => {
    setLoader(true);
    let response = await AuthService.get(
      "http://192.168.6.123:3003/admin-user/theme"
    );
    if (response) {
      let theme = response?.data?.data;
      dispatch(authSlice.actions.setTheme({ theme }));
      console.log(theme, "theme");
      setThemeStatus(true);
      setLoader(false);
    }
  };

  let login = async (formField: any) => {
    console.log(formField, "formField");
    let response = await AuthService.post(
      "http://192.168.6.123:3003/admin-user/login",
      formField
    );
    if (response) {
      navigate("/dashboard");
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
  useEffect(() => {
    setTheme();
  }, []);
  const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;
  const Overlay = styled.div`
    background: ${themeBuilder.backgroundOne};
    background: ${themeBuilder.backgroundTwo};
    background-size: 400% 400%;
    color: #ffffff;
    position: relative;
    height: 100%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    animation: ${gradientAnimation} 10s ease infinite;
    -webkit-animation: ${gradientAnimation} 10s ease infinite;
    border-radius: 12px 0px 0px 12px;
  `;
  return (
    <>
      {themeStatus && (
        <div className="login-form">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="overlay-container">
                  <Overlay>
                    <div className="overlay">
                      <div
                        className={`overlay-panel overlay-right ${
                          isForgotPassword ? "l" : ""
                        }`}
                      >
                        <div className="text-center l mb-2">
                          <img src={Images.tanmeyaLogo} height="60" alt="" />
                        </div>
                        <h1>
                          {isForgotPassword ? "Welcome !" : "One Step Away"}
                        </h1>
                        <p>
                          {isForgotPassword
                            ? "To keep connected with us please login with your personal info."
                            : "Enter your account email to recover your password."}
                        </p>
                      </div>
                    </div>
                  </Overlay>
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
                            style={{
                              backgroundColor:
                                themeBuilder?.table?.backgroundColor,
                            }}
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
      )}
      {loader && <Loader />}
    </>
  );
};

export default Login;
