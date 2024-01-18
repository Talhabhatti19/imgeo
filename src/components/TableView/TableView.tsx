import { useState } from "react";
import DataTable from "react-data-table-component";

const TableView = ({ header, data }: any) => {
  const customStyles = {
    rows: {
      style: {
        minHeight: "44px",
        // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        backgroundColor: "#004D72",
        color: "white",
        justifyContent: "center", // Center the content horizontally
        alignItems: "center", // Center the content vertically (if needed)
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
        fontSize: "12px",
        borderTopLeftRadius: "10px",
        justifyContent: "center", // Center the content horizontally
        alignItems: "center", // Center the content vertically (if needed)
      },
    },
  };
  const hasMeaningfulData = data.some((item: any) =>
    Object.values(item).some((value) => value !== "")
  );

  const noDataComponent = hasMeaningfulData ? null : (
    <div style={{ textAlign: "center", padding: "20px", color: "red" }}>
      No data available
    </div>
  );
  return (
    <>
      {" "}
      <DataTable
        pagination
        columns={header}
        data={data}
        customStyles={customStyles}
        noDataComponent={noDataComponent}
      />
    </>
  );
};

export default TableView;
