import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Images } from "../Config/Images";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/rootReducer";
import { authSlice } from "../../redux/apis/apisSlice";

const DasbhboardSidebar = () => {
  const dispatch = useDispatch();
  const themeBuilder = useSelector((state: RootState) => state.block.theme);
  const [activeBar, setActiveBar] = useState();
  const toggled = useSelector((state: RootState) => state.block.toggled);
  const sidebarItems = [{ label: "Imgeo", Link: "imgeo" }];

  const renderSubmenu = (item: any) => (
    <>
      <div className="menu-items">
        <SubMenu
          prefix={
            <img src={item.img} style={{ background: "none", color: "#fff" }} />
          }
          key={item.label}
          label={item.label}
        >
          <>
            {item.menu.map((submenuItem: any, subIndex: any) => (
              <Link
                to={`${submenuItem.Link}`}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "12px",
                }}
              >
                <MenuItem
                  key={subIndex}
                  style={{
                    fontSize: "12px",
                  }}
                >
                  <Link to={item.Link} style={{ color: "#000000" }}>
                    {item.label}
                  </Link>
                </MenuItem>
              </Link>
            ))}
          </>
          {/* )} */}
        </SubMenu>
      </div>
    </>
  );
  return (
    <>
      <div>
        <Sidebar
          transitionDuration={1000}
          onBackdropClick={() => dispatch(authSlice.actions.toggleSidebar())}
          toggled={toggled}
          customBreakPoint="768px"
          collapsedWidth="80px"
          width="100%"
          className="col-12 fw-bold menu-items"
          style={{ backgroundColor: "1px rgb(243 118 5)" }}
        >
          <div className="d-flex justify-content-center p-1 pt-4">
            <svg
              className="pub-logo"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 283.46 116.2"
            >
              <defs>
                <style></style>
                <linearGradient
                  id="linear-gradient-logo"
                  x1="13.57"
                  y1="58.1"
                  x2="269.89"
                  y2="58.1"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#de3593"></stop>
                  <stop offset="1" stop-color="#14377d"></stop>
                </linearGradient>
                <clipPath id="clippath">
                  <path
                    className="pub-logo-2"
                    d="m26.43,80.82c-.8-.26-1.27-1.05-1.06-1.76,5.19-17.53,10.38-36.06,15.57-55.58.21-.79,1.03-1.34,1.83-1.23,12.19,1.72,24.39,3.82,36.58,6.31.79.16,1.27,1.02,1.06,1.9-5.19,21.86-10.38,42.74-15.57,62.61-.21.81-1.03,1.2-1.83.89-12.19-4.76-24.39-9.15-36.58-13.15Z"
                  ></path>
                </clipPath>
              </defs>
              <path
                className="pub-logo-3"
                d="m269.49,45.29c.95-3.5.23-7.38-2.23-10.35-2.09-2.52-4.87-4.44-8.27-5.69-2.74-1.01-5.77-1.52-9.01-1.52s-6.03.53-8.77,1.57c-1.43-.62-2.98-.96-4.58-.96h-6.92c-1.09,0-2.15.15-3.15.44-1.01-.29-2.07-.44-3.15-.44h-6.98c-.59,0-1.17.05-1.73.14-.58-.09-1.18-.14-1.77-.14h-7.17c-1.74,0-3.4.39-4.89,1.09-.3-.1-.61-.19-.91-.28-1.96-.54-4.07-.81-6.29-.81h-8.95c-.56,0-1.11.05-1.65.13-.56-.08-1.13-.13-1.7-.13h-14.24c-.11,0-.22.01-.33.01-.16,0-.31-.01-.47-.01h-7.41c-.94,0-1.85.11-2.73.33-.88-.22-1.8-.33-2.74-.33h-7.32c-.89,0-1.77.1-2.61.3-.84-.2-1.72-.3-2.62-.3h-7.54c-1.13,0-2.24.17-3.3.49-2.3-.69-4.81-1.05-7.47-1.05-3.5,0-6.81.64-9.83,1.89-.68.28-1.34.6-1.99.93-2.99-1.51-6.5-2.27-10.48-2.27h-8.12c-.69,0-1.37.06-2.04.18-.09-1.78-.62-3.52-1.58-5-1.41-2.17-3.56-3.64-6.05-4.12-1.1-.22-2.19-.43-3.28-.63-.22-1.06-.63-2.07-1.23-2.97-1.26-1.89-3.25-3.18-5.47-3.54-6.09-1-12.26-1.93-18.34-2.75-.37-.05-.75-.07-1.12-.07-2.91,0-5.61,1.52-7.24,3.86-1.31-.18-2.61-.36-3.92-.53-.42-.05-.84-.08-1.25-.08-4.57,0-8.74,3.2-9.93,7.61-5.55,20.73-11.19,40.65-16.75,59.21-1.47,4.9,1.39,10.09,6.53,11.83,13.22,4.44,26.64,9.38,39.88,14.69,1.19.48,2.42.72,3.68.72h0c4.3,0,7.92-2.82,9-7.01l2.28-9.24c1.27,2.21,2.98,4.09,5.1,5.6,1.94,1.38,4.17,2.42,6.65,3.08,2.11.57,4.39.85,6.78.85,2.83,0,5.48-.4,7.88-1.19.19-.06.38-.13.56-.2,1.35.54,2.8.83,4.29.83h7.07c4.35,0,8.2-2.44,10.15-6.12.38.71.83,1.39,1.36,2.02,2.18,2.6,5.4,4.1,8.8,4.1h10.12c2.24,0,4.4-.25,6.42-.75,1.28.49,2.66.75,4.06.75h6.86c.89,0,1.76-.1,2.6-.3.84.2,1.71.3,2.6.3h8c.15,0,.3,0,.46-.01.18,0,.35.01.53.01h7.17c1.2,0,2.36-.2,3.45-.54,1.11.35,2.28.54,3.47.54h7.14c.1,0,.19-.01.29-.01.13,0,.26.01.39.01h7.94c1.64,0,3.24-.35,4.69-1,1.44.64,3.03,1,4.69,1h7.38c.22,0,.43,0,.65-.02.21.01.43.02.65.02h7.17c.59,0,1.17-.05,1.73-.14.58.09,1.18.14,1.77.14h6.92c1.06,0,2.08-.14,3.06-.41.98.27,2.01.41,3.06.41h7.17c5.57,0,10.34-4,11.31-9.49l3.84-21.78c.5-2.82-.08-5.71-1.59-8.1l1.75-9.94c.29-1.65.21-3.32-.2-4.9Z"
              ></path>
              <path
                className="pub-logo-8"
                d="m235.81,62.62s.03-.05.04-.07c.04.03.08.07.13.1-.06,0-.11-.02-.17-.02Z"
              ></path>
              <path
                className="pub-logo-4"
                d="m62.62,100.45c-13.41-5.38-26.81-10.32-40.22-14.82-2.01-.68-3.21-2.63-2.68-4.39,5.6-18.69,11.2-38.48,16.8-59.38.53-1.97,2.58-3.38,4.59-3.12,13.41,1.75,26.81,3.94,40.22,6.57,2.01.39,3.21,2.55,2.68,4.8-5.6,23.81-11.2,46.52-16.8,68.12-.53,2.04-2.58,3.02-4.59,2.21Z"
              ></path>
              <path
                className="pub-logo-8"
                d="m62.62,100.45c-13.41-5.38-26.81-10.32-40.22-14.82-2.01-.68-3.21-2.63-2.68-4.39,5.6-18.69,11.2-38.48,16.8-59.38.53-1.97,2.58-3.38,4.59-3.12,13.41,1.75,26.81,3.94,40.22,6.57,2.01.39,3.21,2.55,2.68,4.8-5.6,23.81-11.2,46.52-16.8,68.12-.53,2.04-2.58,3.02-4.59,2.21Z"
              ></path>
              <path
                className="pub-logo-8"
                d="m72.16,25.9c-7.65-1.44-15.3-2.73-22.95-3.88.38-1.46.75-2.92,1.13-4.39.35-1.36,1.7-2.32,3.02-2.14,6.06.82,12.11,1.73,18.17,2.72,1.32.22,2.11,1.57,1.76,3.02-.38,1.56-.75,3.12-1.13,4.68Z"
              ></path>
              <g className="pub-logo-1">
                <g>
                  <polygon
                    className="pub-logo-6"
                    points="39.76 43.5 11.91 38.25 18.51 25.12 39.72 43.47 39.76 43.5"
                  ></polygon>
                  <polygon
                    className="pub-logo-5"
                    points="45.49 44.55 19.88 22.4 22.56 17.08 22.72 17.11 57.01 46.75 45.53 44.59 45.49 44.55"
                  ></polygon>
                  <polygon
                    className="pub-logo-6"
                    points="28.92 64.42 -5.19 72.22 1.35 59.22 28.92 64.42"
                  ></polygon>
                  <polygon
                    className="pub-logo-5"
                    points="57.93 69.89 57.36 70.02 1.97 82.73 -9.4 80.59 -9.3 80.39 46.27 67.69 57.93 69.89"
                  ></polygon>
                  <polygon
                    className="pub-logo-6"
                    points="7.74 83.82 55.99 72.74 46.72 91.17 7.74 83.82"
                  ></polygon>
                  <polygon
                    className="pub-logo-5"
                    points="78.12 76.78 108.03 102.73 68.79 95.33 78.12 76.78"
                  ></polygon>
                  <polygon
                    className="pub-logo-6"
                    points="69.51 45.86 40.03 20.37 78.67 27.66 69.51 45.86"
                  ></polygon>
                  <polygon
                    className="pub-logo-5"
                    points="139.65 39.15 91.52 50.15 100.74 31.82 139.65 39.15"
                  ></polygon>
                  <polygon
                    className="pub-logo-5"
                    points="89.88 52.95 90.14 52.89 145.42 40.24 156.96 42.41 101.39 55.12 89.88 52.95"
                  ></polygon>
                  <polygon
                    className="pub-logo-5"
                    points="153.04 50.45 146.41 63.61 118.54 58.35 153.04 50.45"
                  ></polygon>
                  <polygon
                    className="pub-logo-5"
                    points="108.25 79.37 135.86 84.58 129.31 97.61 108.25 79.37"
                  ></polygon>
                  <polygon
                    className="pub-logo-5"
                    points="102.48 78.28 127.94 100.33 125.2 105.78 90.95 76.11 102.48 78.28"
                  ></polygon>
                  <g>
                    <polygon
                      className="pub-logo-7"
                      points="127.94 100.33 125.2 105.78 90.95 76.11 102.48 78.28 127.94 100.33"
                    ></polygon>
                    <polygon
                      className="pub-logo-7"
                      points="127.94 100.33 125.2 105.78 90.95 76.11 102.48 78.28 127.94 100.33"
                    ></polygon>
                  </g>
                  <g>
                    <polygon
                      className="pub-logo-9"
                      points="57.01 46.75 45.53 44.59 45.49 44.55 19.88 22.4 22.56 17.08 22.72 17.11 57.01 46.75"
                    ></polygon>
                    <polygon
                      className="pub-logo-9"
                      points="57.01 46.75 45.53 44.59 45.49 44.55 19.88 22.4 22.56 17.08 22.72 17.11 57.01 46.75"
                    ></polygon>
                  </g>
                  <g>
                    <polygon
                      className="pub-logo-9"
                      points="57.93 69.89 57.36 70.02 1.97 82.73 -9.4 80.59 -9.3 80.39 46.27 67.69 57.93 69.89"
                    ></polygon>
                    <polygon
                      className="pub-logo-9"
                      points="57.93 69.89 57.36 70.02 1.97 82.73 -9.4 80.59 -9.3 80.39 46.27 67.69 57.93 69.89"
                    ></polygon>
                  </g>
                  <g>
                    <polygon
                      className="pub-logo-7"
                      points="89.88 52.95 90.14 52.89 145.42 40.24 156.96 42.41 101.39 55.12 89.88 52.95"
                    ></polygon>
                    <polygon
                      className="pub-logo-7"
                      points="156.96 42.41 101.39 55.12 89.88 52.95 90.14 52.89 145.42 40.24 156.96 42.41"
                    ></polygon>
                  </g>
                  <polygon
                    className="pub-logo-8"
                    points="57.47 69.8 57.93 69.89 57.36 70.02 57.47 69.8"
                  ></polygon>
                  <polygon
                    className="pub-logo-8"
                    points="90.14 52.89 90.09 52.99 89.88 52.95 90.14 52.89"
                  ></polygon>
                  <polygon
                    className="pub-logo-9"
                    points="144.52 67.38 137.91 80.5 77.28 69.07 64.48 94.52 50.71 91.92 63.51 66.48 3.4 55.15 10.01 42.03 70.11 53.36 82.67 28.41 96.43 31 83.88 55.95 144.52 67.38"
                  ></polygon>
                </g>
              </g>
              <path
                className="pub-logo-8"
                d="m94.42,60.85h-7.29l3.96-22.43h8.36c2.89,0,5.11.6,6.64,1.81,1.53,1.2,2.3,2.86,2.3,4.97,0,1.44-.24,2.68-.71,3.74-.48,1.06-1.17,1.92-2.07,2.6-.91.68-2.01,1.18-3.29,1.5-1.29.33-2.76.49-4.4.49h-2.15l-1.33,7.32Zm3.45-12.83c1.01,0,1.81-.17,2.38-.51s.86-.87.86-1.58c0-.68-.23-1.14-.7-1.39-.46-.25-1.1-.38-1.9-.38h-1.11l-.7,3.86h1.17Z"
              ></path>
              <path
                className="pub-logo-8"
                d="m119.92,61.42c-1.8,0-3.38-.25-4.77-.74-1.38-.5-2.55-1.2-3.48-2.11-.94-.91-1.65-1.99-2.14-3.23-.49-1.25-.73-2.62-.73-4.12,0-1.86.33-3.6.98-5.23.65-1.63,1.57-3.04,2.76-4.25,1.18-1.2,2.61-2.15,4.29-2.85,1.68-.7,3.54-1.05,5.59-1.05,1.82,0,3.42.25,4.8.74s2.54,1.2,3.48,2.11c.94.91,1.65,1.99,2.14,3.23.49,1.25.73,2.62.73,4.12,0,1.86-.32,3.6-.97,5.23-.64,1.63-1.56,3.04-2.76,4.24-1.19,1.2-2.63,2.15-4.31,2.85-1.68.7-3.55,1.05-5.62,1.05Zm6.02-12.83c0-.57-.09-1.1-.27-1.6-.18-.5-.44-.93-.79-1.3s-.78-.66-1.3-.87c-.52-.21-1.1-.32-1.76-.32-.82,0-1.57.17-2.23.52-.67.35-1.23.81-1.69,1.38-.46.57-.82,1.23-1.08,1.96-.25.74-.38,1.49-.38,2.25,0,.57.09,1.1.27,1.6.18.5.44.93.79,1.3.35.37.78.66,1.3.87.52.21,1.11.32,1.79.32.82,0,1.56-.17,2.22-.51.65-.34,1.21-.79,1.68-1.36.46-.57.82-1.22,1.08-1.96.25-.74.38-1.5.38-2.28Z"
              ></path>
              <path
                className="pub-logo-8"
                d="m156.89,60.85h-7.54l-.63-12.92h-.13l-5.89,12.92h-7.44l-1.74-22.43h7.76v12.83h.13l5.26-12.83h7.54l.25,12.83h.13l5.26-12.83h7.63l-10.58,22.43Z"
              ></path>
              <path
                className="pub-logo-8"
                d="m164.34,60.85l3.96-22.43h14.67l-1.08,6.11h-7.76l-.38,2.15h7.41l-1.01,5.7h-7.41l-.41,2.34h8.68l-1.08,6.11h-15.59Z"
              ></path>
              <path
                className="pub-logo-8"
                d="m194.87,60.85l-3.07-8.21h-.89l-1.39,8.21h-7.06l3.96-22.43h9.22c1.22,0,2.33.14,3.33.41.99.27,1.84.68,2.53,1.2.7.53,1.23,1.18,1.6,1.95.37.77.55,1.65.55,2.65,0,1.86-.44,3.39-1.32,4.59s-2.07,2.03-3.59,2.47l4.37,9.15h-8.24Zm-1.62-12.86c.97,0,1.73-.16,2.28-.49.55-.33.82-.85.82-1.57,0-.65-.23-1.1-.68-1.35-.45-.24-1.07-.36-1.85-.36h-1.36l-.67,3.77h1.46Z"
              ></path>
              <path
                className="pub-logo-8"
                d="m204.12,60.85l3.96-22.43h7.38l-3.96,22.43h-7.38Z"
              ></path>
              <path
                className="pub-logo-8"
                d="m228.55,60.85l-4.44-11.12h-.13l-1.74,11.12h-7.13l3.96-22.43h7.19l4.53,11.69h.13l1.84-11.69h7.13l-3.96,22.43h-7.38Z"
              ></path>
              <path
                className="pub-logo-8"
                d="m257.37,46.12c-.36-.55-.84-.99-1.44-1.33-.6-.34-1.38-.51-2.33-.51-.74,0-1.45.15-2.14.46-.69.31-1.29.74-1.81,1.3-.52.56-.93,1.24-1.25,2.04-.32.8-.48,1.71-.48,2.72,0,1.25.36,2.28,1.08,3.09.72.81,1.86,1.22,3.42,1.22.36,0,.72-.03,1.09-.1s.67-.15.9-.25l.35-1.96h-3.67l1.01-5.77h10.17l-2.15,12.23c-1.16.61-2.48,1.14-3.94,1.57-1.47.43-3.03.65-4.67.65s-3.22-.22-4.59-.65c-1.37-.43-2.55-1.07-3.53-1.92-.98-.84-1.74-1.88-2.28-3.12-.54-1.24-.81-2.65-.81-4.23,0-1.92.33-3.72.98-5.39.65-1.67,1.57-3.12,2.74-4.37,1.17-1.25,2.58-2.23,4.21-2.95,1.64-.72,3.44-1.08,5.4-1.08s3.67.28,5.2.84c1.52.56,2.68,1.33,3.48,2.3l-4.94,5.2Z"
              ></path>
              <path
                className="pub-logo-8"
                d="m102.79,83.43c-.56,1.09-1.3,2.01-2.22,2.77s-2.02,1.35-3.31,1.77c-1.29.42-2.77.63-4.44.63-1.44,0-2.75-.16-3.93-.48-1.18-.32-2.2-.78-3.04-1.38-.85-.6-1.5-1.34-1.96-2.2-.46-.87-.7-1.85-.7-2.95,0-.3.02-.64.06-1.03.04-.39.08-.74.13-1.06l2.38-13.91h7.25l-2.31,12.96c-.04.17-.06.35-.06.54v.51c0,.7.21,1.31.63,1.84.42.53,1.14.79,2.15.79.65,0,1.19-.11,1.6-.32.41-.21.74-.49,1-.82s.44-.72.57-1.14c.13-.42.23-.84.32-1.27l2.38-13.08h7.13l-2.44,14.19c-.23,1.33-.63,2.54-1.19,3.63Z"
              ></path>
              <path
                className="pub-logo-8"
                d="m113.23,88.04h-7.29l3.96-22.43h8.36c2.89,0,5.11.6,6.64,1.81,1.53,1.2,2.3,2.86,2.3,4.97,0,1.44-.24,2.68-.71,3.74-.48,1.06-1.17,1.92-2.07,2.6-.91.68-2.01,1.18-3.29,1.5-1.29.33-2.76.49-4.4.49h-2.15l-1.33,7.32Zm3.45-12.83c1.01,0,1.81-.17,2.38-.51s.86-.87.86-1.58c0-.68-.23-1.14-.7-1.39-.46-.25-1.1-.38-1.9-.38h-1.11l-.7,3.86h1.17Z"
              ></path>
              <path
                className="pub-logo-8"
                d="m148.36,65.61c.78,0,1.56.08,2.34.25.78.17,1.49.45,2.12.84.63.39,1.15.9,1.54,1.52.39.62.59,1.39.59,2.3,0,1.54-.43,2.8-1.28,3.76-.86.96-1.94,1.62-3.25,1.98v.06c.51.11.99.28,1.44.54.45.25.86.59,1.2,1s.62.89.82,1.44c.2.55.3,1.15.3,1.8,0,1.14-.24,2.14-.71,3-.48.86-1.14,1.59-2,2.17-.86.58-1.87,1.02-3.06,1.31-1.18.3-2.47.44-3.86.44h-10.42l3.96-22.43h10.26Zm-5.8,13.34l-.6,3.39h1.87c.4,0,.79-.03,1.17-.08.38-.05.71-.15,1-.28.28-.14.51-.33.68-.57.17-.24.25-.55.25-.93,0-.49-.19-.86-.57-1.12-.38-.26-.93-.4-1.65-.4h-2.15Zm1.3-7.67l-.51,3.1h2.03c.27,0,.55-.02.84-.06.28-.04.54-.13.78-.26.23-.13.42-.3.57-.53.15-.22.22-.52.22-.88,0-.49-.2-.84-.59-1.06-.39-.21-.89-.32-1.5-.32h-1.84Z"
              ></path>
              <path
                className="pub-logo-8"
                d="m167.78,88.04l-3.07-8.21h-.89l-1.39,8.21h-7.06l3.96-22.43h9.22c1.23,0,2.33.14,3.33.41.99.27,1.84.68,2.53,1.2.7.53,1.23,1.18,1.6,1.95.37.77.56,1.65.56,2.65,0,1.86-.44,3.39-1.32,4.59s-2.08,2.03-3.59,2.47l4.37,9.15h-8.24Zm-1.62-12.86c.97,0,1.73-.16,2.28-.49.55-.33.82-.85.82-1.57,0-.65-.23-1.1-.68-1.35-.45-.24-1.07-.36-1.85-.36h-1.36l-.67,3.77h1.46Z"
              ></path>
              <path
                className="pub-logo-8"
                d="m177.03,88.04l3.96-22.43h7.38l-3.96,22.43h-7.38Z"
              ></path>
              <path
                className="pub-logo-8"
                d="m201.74,71.79l-2.85,16.25h-7.35l2.85-16.25h-5.67l1.11-6.18h18.5l-1.11,6.18h-5.48Z"
              ></path>
              <path
                className="pub-logo-8"
                d="m217.42,88.04l-.51-3.42h-7.29l-1.87,3.42h-8.17l13.78-22.43h7.73l3.93,22.43h-7.6Zm-1.77-14.79l-3.2,5.77h3.86l-.67-5.77Z"
              ></path>
              <path
                className="pub-logo-8"
                d="m226.35,88.04l3.96-22.43h7.38l-3.96,22.43h-7.38Z"
              ></path>
              <path
                className="pub-logo-8"
                d="m250.78,88.04l-4.44-11.12h-.13l-1.74,11.12h-7.13l3.96-22.43h7.19l4.53,11.69h.13l1.84-11.69h7.13l-3.96,22.43h-7.38Z"
              ></path>
            </svg>
          </div>

          <Menu>
            {sidebarItems.map((item: any, index: any) => (
              <>
                <React.Fragment key={index}>
                  {item.menu ? (
                    renderSubmenu(item)
                  ) : (
                    <>
                      <div className="menu-items">
                        <Link
                          to={`${item.Link}`}
                          style={{
                            color: themeBuilder?.sidebarTextColor,
                            textDecoration: "none",
                          }}
                        >
                          <MenuItem
                            // onClick={() => {
                            //   dispatch(authSlice.actions.toggleSidebar());
                            //   onSmash(item.label);
                            // }}
                            prefix={
                              <img
                                width={16}
                                height={16}
                                src={item.img ? item.img : Images.BlackIcon}
                                style={{ background: "none" }}
                              />
                            }
                          >
                            {item.label}
                          </MenuItem>
                        </Link>
                      </div>
                    </>
                  )}
                </React.Fragment>
              </>
            ))}
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};
export default DasbhboardSidebar;
