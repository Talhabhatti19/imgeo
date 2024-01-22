import React from "react";

const HomePageManage = () => {
  return (
    <>
      <div className="container-fluid container-custom">
        <div className="col-md-12">
          <div className="page-header align-items-center">
            <h3 className="welcome-heading">Home Page Management</h3>
            <div className="d-flex ">
              <a href="home-page/setting">
                <button className="btn-theme float-end">
                  Preview Home Page
                </button>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12"></div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="py-2">
                  <div className="">
                    <img
                      className="p-relative"
                      src="http://mynance.mytmdev.com/images/templates/template1.jpg"
                      height={600}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePageManage;
