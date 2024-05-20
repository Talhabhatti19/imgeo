import React from "react";
import { Images } from "../Config/Images";
import { FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { RootState } from "../../redux/rootReducer";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import axios from "axios";
const AdminModal = () => {
  const navigate = useNavigate();
  const themeBuilder = useSelector((state: RootState) => state.block.theme);
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
    width: 100%;
    display: flex;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    animation: ${gradientAnimation} 10s ease infinite;
    -webkit-animation: ${gradientAnimation} 10s ease infinite;
    border-radius: 0px 0px 0px 0px;
    align-items: center;
  `;

  const login = async () => {
    const emailLogout = localStorage.getItem("email");
    const response = await axios.post(
      `https://honeysuckle-merciful-store.glitch.me/api/logout`,
      {
        email: emailLogout,
      }
    );
    navigate("");
    localStorage.clear();
    console.log(response, "response123");
    // const emailLogout = localStorage.getItem("email");
    // const passwordLogout = localStorage.getItem("password");
    // console.log(emailLogout, passwordLogout);
    // let data: any = localStorage.getItem("match");
    // let dummyValue: any = JSON.parse(data);
    // console.error("Error parsing data from localStorage:", dummyValue);
    // if (data) {
    //   try {
    //     // Attempt to parse the data as JSON
    //     dummyValue = JSON.parse(data);
    //   } catch (error) {
    //     // Log and handle any parsing errors
    //     console.error("Error parsing data from localStorage:", error);
    //   }
    // }
    // // Check if dummyValue is an array
    // if (dummyValue) {
    //   dummyValue.status = false; // Store the updated array back to localStorage
    //   if (dummyValue.status == false) {
    //     console.log("logout", dummyValue);
    //     navigate("");
    //     localStorage.clear();
    //   }
    // } else {
    //   console.log("logout", dummyValue, emailLogout, passwordLogout);
    //   toast.error("not match");
    // }
  };

  return (
    <>
      <div className="login-form-data">
        <div
          onClick={login}
          className="d-flex justify-content-start align-items-center ms-2 border-bottom"
        >
          <div className="p-3">
            <FaSignOutAlt />
          </div>
          <div style={{ textDecoration: "none", color: "black" }}>
            <p className="mb-0 ms-3  fs-12">Log Out</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminModal;
