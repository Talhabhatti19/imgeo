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
      </div>
      <div className="wrapper" style={{ backgroundColor: "white" }}>
        <div>
          <h1 className="text-center fw-8">Why Choose Merchant Cash Advance</h1>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="d-flex justify-content-center mt-3">
              <img src={Images.timerIcon} alt="" />
            </div>
            <div className="mt-4 text-center">
              <h4 className="mt-3 mb-3">Fast Funding Decisions</h4>
              <p className="mb-3">POS Financing Decision with in 24 hours</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-center mt-3">
              <img src={Images.dollarIcon} alt="" />
            </div>
            <div className="mt-4 text-center">
              <h4 className="mt-3 mb-3">No Orignation Fee</h4>
              <p className="mb-3">Shariah complaint with no hidden charges</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-center mt-3">
              <img src={Images.documentationIcon} alt="" />
            </div>
            <div className="mt-4 text-center ">
              <h4 className="mt-3 mb-3">We Serve Most Industries</h4>
              <p className="mb-3">
                We are the pioneer in shariah complaint <br /> financing
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="padder">
        <div className="row justify-content-center line-height">
          <h1 className="text-center">About Us</h1>
          <div className="mt-5 col-10 text-center">
            Tanmeya Capital is a pioneering sharia-compliant financing platform
            offering a wide range of flexible and innovative solutions, with
            commercial registration (1010337706) licensed by the Saudi Central
            Bank No. 22/أ ش/201410 dated 11/19/1435 AH <br />
            <div className="mt-4">
              Established in 2012, the company, with capital 500,000,000 SR ,
              has a head office in Riyadh and 16 branches located in 13 cities
              across Kingdom, it specializes in providing flexible financial
              leasing, small and medium enterprises financing, productive assets
              and consumer financing, subject to control and supervision The
              Central Bank of Saudi Arabia.
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="row">
          <div className="col-md-6 wrapper">
            <h1>POS Financing</h1>
            <p className="fs-6 mb-4 line-height">
              POS Financing is the fastest financing facility, It is a quick fix
              for your business problems. This facility can be availed within 24
              hours and can be utilised for 30 days. Below are the salient
              features for POS Financing product
            </p>
            <div
              className="d-flex justify-content-start"
              style={{ color: "#004d72" }}
            >
              <ul className="line-height p-1 list-style">
                <li className="pb-3">Shariah Compliance</li>
                <li className="pb-3">Amount: Upto SR 150,000</li>
                <li className="pb-3">Duration: One month financing</li>
                <li className="pb-4">Approval within 24 hours</li>
              </ul>
            </div>
            <button className="btn-theme mt-3 ms-3" style={{ width: "100px" }}>
              Apply
            </button>
          </div>
          <div className="col-md-6 d-flex justify-content-start">
            <img src={Images.formImage} alt="" />
          </div>
        </div>
        <div className="padder">
          <div className="row">
            <h1 className="text-center fs-1 bold">Why choose us?</h1>
            <div className="d-flex justify-content-center">
              <div className="mt-5 col-10 text-center line-height">
                Within our values and the Islamic Shari’a spirit and principles,
                we have started our journey in 2012. And throughout, we have
                been inspired to deal with our clients and partners, and that’s
                how we started. Tanmeya Capital launched its operations
                promoting its financing services for individuals and SME’s in
                compliancy with the Islamic Shari'ah principles, by providing a
                variety of financing products that our individual and corporate
                clients entail.
              </div>
            </div>
          </div>
        </div>
        <div className=" inner-bg">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <button className="btn-theme" style={{ width: "240px" }}>
                change background image
              </button>
            </div>
            <div className="col-md-12 d-flex justify-content-center">
              <h2 className="text-white mb-3">
                Whether you need SR 8000 or SR 250,000 We can help you!
              </h2>
            </div>
          </div>
          <div className="col-md-12 d-flex mt-4 justify-content-center">
            <button className="btn-theme" style={{ width: "240px" }}>
              change background image
            </button>
          </div>
        </div>
        <div className="mt-5 d-flex justify-content-center text-center line-height">
          Copyright Tanmeya Capital Financing Co. <br /> Powered by MYTM LLC
          KSA.
        </div>
      </div>
    </>
  );
};
export default ManagementForm;
