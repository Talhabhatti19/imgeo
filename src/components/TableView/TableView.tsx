import DataTable from "react-data-table-component";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";

const TableView = ({ header, data }: any) => {
  const themeBuilder = useSelector((state: RootState) => state.block.theme);

  const customStyles = {
    rows: {
      style: {
        minHeight: "44px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        fontSize: "12px",

        borderTopLeftRadius: "10px",
        justifyContent: "center",
        alignItems: "center",
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
  const headerInfo = header.map((header: any) => ({
    name: header.name,
    selector: header.selector,
    cell: header.cell,
  }));
  const tableData = data.map((item: any) => {
    return {
      ...item,
    };
  });
  return (
    <>
      {" "}
      <DataTable
        pagination
        columns={headerInfo}
        data={tableData}
        customStyles={customStyles}
        noDataComponent={noDataComponent}
      />
    </>
  );
};

export default TableView;
