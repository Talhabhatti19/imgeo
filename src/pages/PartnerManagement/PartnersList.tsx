import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import TableView from "../../components/TableView/TableView";
import { Types_Reasons_Header } from "../../components/Config/TableHeaders";
import { DatePicker } from "antd";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";

const data = [
  {
    Name: "kajbdsf",
    Reasons: "ajdhbs",
    Status: "1234",
    Action: "--",
  },
];

const PartnerList = () => {
  const checkReduxState = useSelector((state: RootState) => state.block.check);
  console.log(checkReduxState, "checkReduxState");
  const button = [
    {
      title: "+ add partner",
    },
  ];
  return (
    <>
      <div className="cs-table">
        {/* <div className="col-lg-12 col-12 d-flex align-items-center">
          <h2 className="col-lg-6 col-12 fs-6 fw-bold">Partner List</h2>
          <div className="col-lg-6 col-12 d-flex justify-content-end align-items-center">
            <form
              action=""
              className="d-flex justify-content-end pb-2 search-bar"
            >
              <div className="d-flex">
                <div className="d-grid">
                  <label htmlFor="" className="label-theme">
                    From
                  </label>
                  <DatePicker
                    style={{
                      width: "200px",
                      height: "36px",
                      marginRight: "10px",
                    }}
                  />
                </div>

                <div className="d-grid">
                  <label htmlFor="" className="label-theme">
                    To
                  </label>
                  <DatePicker
                    style={{
                      width: "200px",
                      height: "36px",
                    }}
                  />
                </div>
              </div>
            </form>
            <div className="theme-btn mt-1">+ add partner</div>
          </div>
        </div> */}
        <DynamicHeaderStructure
          title={"Partner List"}
          button={button}
          filter={true}
        />
        <TableView header={Types_Reasons_Header} data={data} />
      </div>
    </>
  );
};
export default PartnerList;
