import React, { useEffect, useState } from "react";
import { Images } from "../Config/Images";
import "react-responsive-modal/styles.css";

const ManagementForm = () => {
  const [open, setOpen] = useState(false);
  const [formValue, setFormValue] = useState("");
  const [buttonText, setButtonText] = useState("Apply For Financing");
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const handleChange = () => {
    setButtonText(formValue);
  };

  return (
    <>
      <div className="m-0" style={{ backgroundColor: "#f6f6f6" }}>
        <div className="col-md-12">
          <button className="btn-theme" style={{ padding: "14px" }}>
            Publish
          </button>
        </div>
        <div className="p-2 ms-2 me-1">
          <div className="row align-items-center ">
            <div className="col-md-4">
              <img
                src={Images.sidebarLogo}
                alt=""
                height={80}
                style={{ background: "#fff" }}
              />
            </div>
            <div className="col-md-4">
              <button
                className="btn-theme fs-9 p-2.5"
                style={{ width: "220px" }}
              >
                Change Bakcground Image
              </button>
            </div>
            <div className="col-md-4 pe-5  d-flex justify-content-end align-items-center">
              <img src={Images.callIcon} alt="" height={32} width={32} />
              <div className="ps-1 fs-3 ">8001248765</div>
            </div>
          </div>
        </div>
        <div className="bg-image-container container">
          <div className="dropdown d-flex justify-content-end sticky">
            <button
              className="btn btn-secondary dropdown-toggle "
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Language
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  English
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  عربي
                </a>
              </li>
            </ul>
          </div>
          <div className="ps-2 pe-2">
            <div>
              <h2 className="banner-heading ">
                A simple way to <br /> finance your business
              </h2>
              <div>
                <p style={{ fontSize: "30px" }}>
                  {" "}
                  Apply now for a decision in 60 seconds..
                </p>
              </div>
              <div className="mt-5">
                <div
                  onClick={onOpenModal}
                  className="btn-theme py-3 fw-2"
                  style={{ width: "230px" }}
                >
                  {buttonText}
                </div>
              </div>
            </div>
          </div>
        </div>
        {open ? (
          <>
            <div className="finance-table show">
              <div className="d-flex table-data">
                <div className="d-flex justify-content-between form-header">
                  <div>
                    <h2 className="ps-3 m-0 fs-7 text-white">
                      Edit Button Details
                    </h2>
                  </div>
                  <div className="cursor-pointer d-flex ">
                    {" "}
                    <img
                      className="me-3"
                      onClick={onCloseModal}
                      src={Images.closeBtn}
                      alt=""
                    />
                  </div>
                </div>
                <div className="ps-3 mt-5">
                  <div>
                    <div className="mb-2 text-secondary">Button text</div>
                    <input
                      placeholder={buttonText}
                      type="text"
                      className="text-dark"
                      onChange={(e: any) => {
                        setFormValue(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <div className="mb-2 text-secondary">Button Url</div>
                    <input type="text" />
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        {
                          handleChange();
                        }
                      }}
                      className="btn-theme mt-3"
                      style={{ width: "80px", height: "40px" }}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        <div className="container">
          <div className="mt-5">
            <h1 className="text-center fw-8">
              Why Choose Merchant Cash Advance
            </h1>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex justify-content-cente">
                <img src={Images.timerIcon} alt="" />
              </div>
              <h4>Fast Funding Decisions</h4>
              <p>POS Financing Decision with in 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ManagementForm;
