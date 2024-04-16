import React from "react";
import { Images } from "../Config/Images";
import { FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { RootState } from "../../redux/rootReducer";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
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

  const handleLogout = async () => {
    // Assuming 'isLoggedIn' is the flag you set in localStorage when logging in
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
      localStorage.clear(); // Clear all local storage items
      navigate(""); // Navigate to the login page
      toast.success("You have been logged out.");
    } else {
      toast.error("You are not logged in.");
    }
  };

  return (
    <>
      <div className="login-form-data">
        <div
          onClick={handleLogout}
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
