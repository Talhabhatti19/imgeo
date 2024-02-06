import React from "react";
import { useSelector } from "react-redux";
import TableView from "../../components/TableView/TableView";
import { RootState } from "../../redux/rootReducer";
import { Recent_Application_Header } from "../Config/TableHeaders";

const data = [
  {
    ApplicationNo: "ytf",
    customerName: "ejuir",
    phoneNo: "1234",
    date: "1234",
    amount: "1234",
    parentStatus: "56478",
    status: "4677",
    Action: "2356",
  },
];

const RecentApplication = (props: any) => {
  const themeBuilder = useSelector((state: RootState) => state.block.theme);
  console.log(props?.data?.header, "propsssssss");
  const tableData = Array.isArray(props?.data?.data) ? props.data.data : [];
  const tableHeader = Array.isArray(props?.data?.header)
    ? props.data.header
    : [];
  return (
    <>
      <div className="cs-table">
        <div className="d-flex align-items-center">
          <h2
            className="col-6 fs-6 fw-bold mt-5 "
            style={{ color: themeBuilder?.color?.headingTextColor }}
          >
            {props?.data?.title}
          </h2>
        </div>
        <TableView
          // header={Recent_Application_Header}
          data={tableData}
          apiHeader={tableHeader}
        />
      </div>
    </>
  );
};
export default RecentApplication;
