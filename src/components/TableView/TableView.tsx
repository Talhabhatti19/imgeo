import { useState } from "react";
import DataTable from "react-data-table-component";

const TableView = ({ header, data }: any) => {
  const customStyles = {
    rows: {
      style: {
        minHeight: "60px",
        // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        backgroundColor: "#004D72",
        color: "white",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
        borderTopLeftRadius: "10px",
      },
    },
  };
  const EmptyDataPlaceholder = () => {
    return (
      <div style={{ textAlign: "center", padding: "20px", color: "red" }}>
        No data available
      </div>
    );
  };
  return (
    <>
      {" "}
      <DataTable
        pagination
        columns={header}
        data={data}
        customStyles={customStyles}
        noDataComponent={<EmptyDataPlaceholder />}
      />
    </>
  );
};

export default TableView;
