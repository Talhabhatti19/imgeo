import React, { useState } from "react";
import { Images } from "../Config/Images";
import { useNavigate } from "react-router-dom";

const HomePageManage = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const navigate = useNavigate();
  const handleEditTemplate=()=>{
    setShowEditModal(true)
    navigate("/home-page/setting");
  }
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
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="py-2">
                  <div >
                    <img
                      className="p-relative"
                      src={Images.template1}
                      height={600}
                    />
                  </div>
                  <div className="over-lay">
                  <div className="template-default">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked/>
                  </div>
                  <div
                      className=""
                      onClick={handleEditTemplate}
                    >
                      <button className="btn btn-theme">
                      Edit Template
                      </button>
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
