import React, { useEffect, useRef, useState } from "react";
import { Images } from "../Config/Images";
import "react-responsive-modal/styles.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18n, { updateUserTranslations } from "../i18n";

const ManagementForm = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [formValue, setFormValue] = useState("");
  const [buttonText, setButtonText] = useState(t(`apply`));
  const [phoneNumber, setPhoneNumber] = useState("810 - 111 -1810");
  const [headingText, setHeadingText] = useState<any>(t(`heading`));
  const [isEditing, setIsEditing] = useState(false);
  const [paragraphContent, setParagraphContent] = useState(
    "Apply now for a decision in 60 seconds.."
  );

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const handleChange = () => {
    setButtonText(formValue);
  };

  const handleParagraphClick = () => {
    setIsEditing(true);
  };
  const headingTextChange = (e: any) => {
    setHeadingText(e.target.value);
  };
  const openDocument = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };
  console.log(t, "tttt");
  useEffect(() => {
    updateUserTranslations("ar", {
      dynamicWelcome: "Hello, dynamic world!",
      dynamicGreeting: "Greetings from the user!",
    });
    i18n.init({
      lng: i18n.language,
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
    });
  }, []);
  console.log(updateUserTranslations);
  return (
    <>
      <div className="m-0" style={{ backgroundColor: "#f6f6f6" }}>
        <div className="col-md-12">
          <button className="btn-theme" style={{ padding: "14px" }}>
            {t(`publish`)}
          </button>
        </div>
        <div className="p-2 ms-2 me-1">
          <div className="d-flex align-items-center home-page-view ">
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
                {t(`imageText`)}
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
              <img src={Images.callIcon} alt="" height={32} width={32} />
              <div className="ps-1 fs-3 ">
                <input
                  className="number-input"
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
        <div className="bg-image-container">
          <div className="dropdown d-flex justify-content-end sticky">
            <label>
              <select
                className="home-management-select p-3"
                onChange={(e) => changeLanguage(e.target.value)}
                value={i18n.language}
              >
                <option value="en">English</option>
                <option value="ar">عربي</option>
                {/* Add more languages as needed */}
              </select>
            </label>
            {/* <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item">English</a>
              </li>
              <li>
                <a className="dropdown-item">عربي</a>
              </li>
            </ul> */}
          </div>
          <div className="ps-2 pe-2">
            <div>
              <h2 className="banner-heading ">
                <textarea
                  className="number-input"
                  style={{ color: "white", fontWeight: "600" }}
                  value={headingText}
                  onChange={headingTextChange}
                  onClick={(e) => e.stopPropagation()} // prevent closing the textarea on click
                />
              </h2>
              <div>
                <div>
                  {isEditing ? (
                    <div>
                      <CKEditor
                        editor={ClassicEditor}
                        data={paragraphContent}
                        onReady={(editor) => {
                          // You can do something when the editor is ready
                        }}
                        onChange={(event, editor) => {
                          const data = editor.getData();
                          setParagraphContent(data);
                        }}
                      />
                    </div>
                  ) : (
                    <p onClick={handleParagraphClick}>{paragraphContent}</p>
                  )}
                </div>
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
                <div className="d-flex justify-content-between">
                  <h2 className="ps-3 m-0 fs-7 ">Edit Button Details</h2>

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
                <div className="ps-3 mt-3">
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
                      {t(`applyB`)}
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
          <h1 className="text-center fw-8">{t(`whyChoose`)}</h1>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <div className="d-flex justify-content-center mt-3">
              <img src={Images.timerIcon} alt="" />
            </div>
            <div className="mt-4 text-center">
              <h4 className="mt-3 mb-3">{t(`fundingHead`)}</h4>
              <p className="mb-3">{t(`fundingText`)}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-center mt-3">
              <img src={Images.dollarIcon} alt="" />
            </div>
            <div className="mt-4 text-center">
              <h4 className="mt-3 mb-3">{t(`orinationHead`)}</h4>
              <p className="mb-3">{t(`orinationText`)}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-center mt-3">
              <img src={Images.documentationIcon} alt="" />
            </div>
            <div className="mt-4 text-center ">
              <h4 className="mt-3 mb-3">{t(`serveHead`)}</h4>
              <p className="mb-3">{t(`serveText`)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="padder">
        <div className="row justify-content-center line-height">
          <h1 className="text-center">{t(`about`)}</h1>
          <div className="mt-5 col-10 text-center">
            {t(`aboutText`)}
            <br />
            <div className="mt-4">{t(`aboutTextOne`)}</div>
          </div>
        </div>
      </div>
      <div className="d-flex structure wrapper">
        <div className="col-md-6">
          <h1>{t(`pos`)}</h1>
          <p className="fs-6 mb-4 line-height">{t(`postext`)}</p>
          <div
            className="d-flex justify-content-start"
            style={{ color: "#004d72" }}
          >
            <ul className="line-height p-1 list-style">
              <li className="pb-3">{t(`pos1`)}</li>
              <li className="pb-3">{t(`pos2`)}</li>
              <li className="pb-3">{t(`pos3`)}</li>
              <li className="pb-4">{t(`pos4`)}</li>
            </ul>
          </div>
          <button className="btn-theme mt-3 ms-3" style={{ width: "100px" }}>
            {t(`applyB`)}
          </button>
        </div>
        <div className="col-md-6 ">
          <img className="form-img" src={Images.formImage} alt="" />
        </div>
      </div>
      <div className="padder">
        <div className="row">
          <h1 className="text-center fs-1 bold">{t(`us`)}</h1>
          <div className="d-flex justify-content-center">
            <div className="mt-5 col-10 text-center line-height">
              {t(`usText`)}
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
                {t(`need`)}
              </h2>

              <div className="col-md-12 d-flex mt-4 justify-content-center">
                <button className="btn-theme" style={{ width: "240px" }}>
                  {t(`imageText`)}
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
