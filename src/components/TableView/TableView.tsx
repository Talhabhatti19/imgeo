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
    // pagination: {
    //   style: {
    //     // Customize the pagination container style
    //     display: "flex",
    //     justifyContent: "flex-end",
    //     alignItems: "center",
    //     padding: "10px",
    //   },
    //   pageButtonsStyle: {
    //     // Customize the individual page buttons style
    //     borderRadius: "5px",
    //     marginLeft: "5px",
    //     marginRight: "5px",
    //     padding: "8px",
    //     color: "white",
    //     backgroundColor: "#004D72",
    //     "&:hover": {
    //       backgroundColor: "#005587",
    //     },
    //   },
    //   currentPageStyle: {
    //     // Customize the current page indicator style
    //     color: "#004D72",
    //     fontWeight: "bold",
    //   },
    //   rowsPerPageDropdownStyle: {
    //     // Customize the rows per page dropdown style
    //     backgroundColor: "#004D72",
    //     color: "white",
    //     borderRadius: "5px",
    //     border: "1px solid #004D72",
    //   },
    // },
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
