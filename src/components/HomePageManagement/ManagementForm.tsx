import React, { useRef, useState } from "react";
import { Images } from "../Config/Images";
import "react-responsive-modal/styles.css";
import ModalEdit from "./EditModal";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
const ManagementForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [formValue, setFormValue] = useState("");
  const [buttonText, setButtonText] = useState("Apply For Financing");
  const [phoneNumber, setPhoneNumber] = useState("810 - 111 -1810");
  const [Heading, setHeading] = useState("Why Choose Merchant Cash Advance");
  const [editor, setEditor] = useState(false);
  const [headingText, setHeadingText] = useState(
    "A simple way to finance your business"
  );
  const [paragraphContent, setParagraphContent] = useState(
    "Apply now for a decision in 60 seconds.."
  );
  const openDocument = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleEditorChange = (event: any, editor: any) => {
    let editorData = paragraphContent;
    editorData = editor.getData(event);
    setParagraphContent(editorData);
  };
  return (
    <>
      <div style={{ backgroundColor: "#f6f6f6" }}>
        <div className="col-md-12">
          <button className="btn-theme">Publish</button>
        </div>
        <div className="p-2 ms-2 me-1">
          <div className="d-flex align-items-center home-page-view">
            <div className="col-md-4">
              <img
                onClick={openDocument}
                src={Images.tanmeyaLogo}
                alt=""
                height={80}
                style={{ background: "#fff" }}
              />
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <button
                className="btn-theme fs-9 p-2.5"
                style={{ width: "220px" }}
                onClick={openDocument}
              >
                Change Background Image
              </button>
              <input
                type="file"
                accept="image/*"
                id="bgImage0"
                name="content[en][Home][Background Image]"
                className="form-control"
                style={{ display: "none" }}
                ref={fileInputRef}
              />
            </div>
            <div className="col-md-4 d-flex justify-content-end">
              <div className="col-10">
                <div className="col-1 d-flex align-items-center">
                  <img src={Images.callIcon} alt="" height={32} width={32} />
                </div>
                <div className="ps-4 fs-3 d-flex">
                  <input
                    className="number-input col-11"
                    type="text"
                    value={phoneNumber}
                    onChange={(e: any) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-image-container">
          <div className="d-flex justify-content-end">
            <div className="sticky dropdown">
              <select
                className="form-select dropdown"
                aria-label="Language Select"
              >
                <option value="english">English</option>
                <option value="arabic">عربي</option>
              </select>
            </div>
          </div>
          <div className="ps-2 pe-2">
            <h2 className="banner-heading">
              <textarea
                className="number-input"
                style={{ color: "white", fontWeight: "600" }}
                value={headingText}
                onChange={(e: any) => {
                  setHeadingText(e.target.value);
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </h2>
            <div>
              {editor ? (
                <div className="editor-container">
                  <div style={{ background: "#004D72", color: "white" }}>
                    <div className="d-flex col-md-12 justify-space-between">
                      <h2 className="ps-3 col-md-8 fs-7">
                        Edit Button Details
                      </h2>
                      <div className="cursor-pointer d-flex col-md-4 justify-content-end">
                        <img
                          className="me-3"
                          onClick={() => {
                            setEditor(false);
                          }}
                          src={Images.closeBtn}
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      {/* CKEditor */}
                      <CKEditor
                        editor={ClassicEditor}
                        data={paragraphContent}
                        onChange={handleEditorChange}
                      />
                    </div>
                    <div className="d-flex justify-content-start col-4">
                      <button
                        className="btn-theme"
                        onClick={() => {
                          setEditor(false);
                        }}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div
                style={{ fontSize: "20px" }}
                onClick={() => {
                  setEditor(true);
                }}
                dangerouslySetInnerHTML={{ __html: paragraphContent }}
              ></div>
            </div>

            <div className="mt-5">
              <button
                className="btn-theme py-3 fw-2"
                style={{ width: "230px" }}
                onClick={() => {
                  setOpen(true);
                }}
              >
                {buttonText}
              </button>
              <ModalEdit
                open={open}
                setOpen={setOpen}
                buttonText={buttonText}
                setFormValue={setFormValue}
                handleButtonText={() => {
                  setButtonText(formValue);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper" style={{ backgroundColor: "white" }}>
        <h1
          className="text-center fw-8"
          defaultValue={Heading}
          onChange={(e: any) => {
            setHeading(e.target.value);
          }}
        >
          Why Choose Merchant Cash Advance
        </h1>
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
      <div className="d-flex structure wrapper">
        <div className="col-md-6">
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
        <div className="col-md-6 ">
          <img className="form-img" src={Images.formImage} alt="" />
        </div>
      </div>
      <div className="padder">
        <div className="row">
          <h1 className="text-center fs-1 bold">Why choose us?</h1>
          <div className="d-flex justify-content-center">
            <div className="mt-5 col-10 text-center line-height">
              Within our values and the Islamic Shari’a spirit and principles,
              we have started our journey in 2012. And throughout, we have been
              inspired to deal with our clients and partners, and that’s how we
              started. Tanmeya Capital launched its operations promoting its
              financing services for individuals and SME’s in compliancy with
              the Islamic Shari'ah principles, by providing a variety of
              financing products that our individual and corporate clients
              entail.
            </div>
          </div>
        </div>
      </div>
      <div className="inner-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className=" col-md-10">
              {/* <div className="col-md-12 d-flex justify-content-center">
            <button className="btn-theme" style={{ width: "240px" }}>
              change background image
            </button>
          </div> */}

              <h2
                className="text-white text-center mb-3 "
                style={{ fontSize: "2.4rem" }}
              >
                Whether you need SR 8000 or SR 250,000 We can help you!
              </h2>

              <div className="col-md-12 d-flex mt-4 justify-content-center">
                <button className="btn-theme" style={{ width: "240px" }}>
                  change background image
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 d-flex justify-content-center text-center line-height">
        Copyright Tanmeya Capital Financing Co. <br /> Powered by MYTM LLC KSA.
      </div>
    </>
  );
};
export default ManagementForm;
