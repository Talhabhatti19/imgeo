import React, { useState } from "react";
import { Images } from "../Config/Images";

const LandingPageManage = () => {
  const [showButton, setShowButton] = useState(false);

  const Image = [
    {
      img: Images.template1,
    },
    {
      img: Images.template2,
    },
    {
      img: Images.template3,
    },
    {
      img: Images.template4,
    },
    {
      img: Images.template4,
    },
  ];

  return (
    <>
      <div className="container-fluid ">
        <div className="col-md-12">
          <div className="page-header align-items-center">
            <h3 className="welcome-heading">Landing Page Management</h3>
            <div className="d-flex ">
              <a href="home-page/setting">
                <button className="btn-theme float-end">
                  Preview Home Page
                </button>
              </a>
              <a href="home-page/setting">
                <button className="btn-theme float-end">
                  Preview Home Page
                </button>
              </a>
            </div>
          </div>
          <div className="row">
            {Image.map((item, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 " key={index}>
                <div className="py-2">
                  <img
                    onMouseEnter={() => setShowButton(true)}
                    onMouseLeave={() => setShowButton(false)}
                    src={item.img}
                    style={{ width: "100%", height: "600px" }}
                  />
                </div>
              </div>
            ))}
            <div className="middle">
              <div className="flex-100">
                {showButton && (
                  <button className="btn-hover">Use Template</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageManage;
