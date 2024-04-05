import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
export const dummyValue = [
  {
    email: "dummy@example.com",
    password: "pass123",
    status: false,
  },
  {
    email: "test@example.com",
    password: "pass123",
    status: false,
  },
  {
    email: "hello@example.com",
    password: "pass123",
    status: false,
  },
];

const Login = () => {
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const navigate = useNavigate();
  const [swapPassword, setSwapPassword] = useState(false);

  const login = async ({ email, password }: any) => {
    const match = dummyValue.find(
      (dummy) => dummy.email === email && dummy.password === password
    );

    if (match && match.status == false) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      match.status = true;
      const jsonString = JSON.stringify(match);
      localStorage.setItem("match", jsonString);
      navigate("/imgeo");
      console.log("Status", dummyValue);
    } else {
      toast.error("Invalid email or password");
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Please enter your email"),
    password: Yup.string().required("Please enter your password"),
  });

  return (
    <div className="container ">
      <div className="login-container">
        <div className="circle circle-one"></div>
        <div className="circle circle-two"></div>
        <div className="form-container bg-login">
          <img
            src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
            alt="illustration"
            className="illustration"
          />
          <h1 style={{ color: "white" }}>LOGIN</h1>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={login}
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
                      type={swapPassword ? "text" : "password"}
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
                    Login
                  </button>
                  <div className="text-end mt-3">
                    <span
                      id="forgot-password"
                      onClick={() => setIsForgotPassword(!isForgotPassword)}
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
  );
};

export default Login;
