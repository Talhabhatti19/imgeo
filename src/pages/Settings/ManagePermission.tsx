import React from "react";
import { Select } from "antd";

const ManagePermission = () => {
  const actionSelect = [
    { label: "Operations" },
    { label: "Settings" },
    { label: "Documents" },
    { label: "Account" },
    { label: "Operations" },
    { label: "Settings" },
    { label: "Documents" },
    { label: "Account" },
  ];

  const checkList = [
    {
      label: 'Dashboard Module',
      children: [
        { label: "Show Dashboard",},
        { label: "Application Chart" },
        { label: "Department Chart", },
        { label: "Partner Application Chart" }
      ],
      sublabel: "dash cards module",
      subchild:[
        { label: "Show Dashboard",},
        { label: "Application Chart" },
        { label: "Department Chart", },
        { label: "Partner Application Chart" }
      ],
      secondsub: "Show Dashboard",
    },
    {
      label: 'Dashboard Module',
      children: [
        { label: "Show Dashboard",},
        { label: "Application Chart" },
        { label: "Department Chart", },
        { label: "Partner Application Chart" }
      ],
      sublabel: "dash cards module",
      subchild:[
        { label: "Show Dashboard",},
        { label: "Application Chart" },
        { label: "Department Chart", },
        { label: "Partner Application Chart" }
      ],
      secondsub: "Show Dashboard",
      secondsubchild:[
        { label: "Show Dashboard",},
        { label: "Application Chart" },
        { label: "Department Chart", },
        { label: "Partner Application Chart" }
      ],
    }
  ];

  return (
    <>
      <div className="p-3">
        <div className="col-lg-12 col-12 d-flex align-items-center pb-3 header_layout">
          <h2 className="col-12 fs-6 fw-bold">Assign Permission</h2>
        </div>
        <div className="p-3">
          <div className="col-lg-12 col-12 d-flex align-items-center pb-3">
            <Select className="col-md-12 col-12">
              {actionSelect.map((item, index) => (
                <option>
                  <>
                    <div className="d-flex">{item.label}</div>
                  </>
                </option>
              ))}
            </Select>
          </div>
          <div className="row">
            {checkList.map((item) => (
           <>
                      <div className="col-md-4">
                          <div className="d-flex pb-2" style={{alignItems:"start" , padding:"20px"}}>
                            <input className="" type="checkbox" />
                            <div className="" style={{ fontSize: "16px" , fontWeight: "700" ,  marginLeft: "10px" }}>
                              {item.label}
                            </div>
                          </div>
                      </div>
                        {item.children &&  (
                              <div className="row">
                                  {item.children.map((subitem:any) => (
                                      <div className="col-md-4">
                                        <>
                                          <div className="d-flex pb-2" style={{alignItems:"start" ,  padding:"20px"}}>
                                            <input className="col-1" type="checkbox" />
                                            <div className=" col-11 d-flex" style={{ fontSize: "14px" ,  marginLeft: "10px" }}>
                                            {subitem.label}
                                            
                                            </div>
                                          </div>
                                        </>
                                      </div>
                                    ))}
                              </div>
                          )}
                        {item.subchild && 
                            <>
                                  <div className="col-md-4">
                                        <div className="d-flex pb-2" style={{alignItems:"start", padding:"20px" , marginLeft: "12px"}}>
                                            <input className="" type="checkbox" />
                                            <div className="" style={{ fontSize: "16px" , flexDirection: "column" , fontWeight: "700", marginLeft: "10px" }}>
                                                    {item.sublabel}
                                            </div>
                                        </div>
                                  </div>
                                {item.subchild &&  (
                                    <div className="row">
                                          
                                                {item.subchild.map((subitem:any) => (
                                                    <><div className="col-md-4" style={{marginLeft: "15px"}}>
                                                        <div className="d-flex pb-2" style={{alignItems:"start" , padding:"20px"}}>
                                                          <input className="col-1" type="checkbox" />
                                                          <div className=" col-11 d-flex" style={{ fontSize: "14px" }}>
                                                          {subitem.label}
                                                          </div>
                                                        </div>
                                                        </div>
                                                    </>
                                                  ))}
                                          
                                    </div>
                                )}
                            </> 
                        }
                        {item.secondsub && (
                          <div className="row">
                              <>
                                  <div className="col-md-4" style={{marginLeft: "0px"}}>
                                      <div className="d-flex pb-2" style={{alignItems:"start" , padding:"20px"}}>
                                        <input className="col-1" type="checkbox" />
                                        <div className="col-11 d-flex" style={{ fontSize: "16px" , fontWeight: "700" ,  marginLeft: "0px" }}>
                                        {item.secondsub}
                                        </div>
                                      </div>
                                  </div>
                                  {item.secondsubchild &&  (
                              <div className="row">
                                  {item.secondsubchild.map((subitem:any) => (
                                      <div className="col-md-4">
                                        <>
                                          <div className="d-flex pb-2" style={{alignItems:"start" ,  padding:"20px"}}>
                                            <input className="col-1" type="checkbox" />
                                            <div className=" col-11 d-flex" style={{ fontSize: "14px" ,  marginLeft: "10px" }}>
                                            {subitem.label}
                                            
                                            </div>
                                          </div>
                                        </>
                                      </div>
                                    ))}
                              </div>
                          )}
                              </>
                          </div>
                        )
                    }
              </>
            ))}
          </div>
          <div className="d-flex justify-content-end mt-2">
            <button className="theme-btn">Update</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ManagePermission;
