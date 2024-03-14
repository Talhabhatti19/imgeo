import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import TableView from "../../components/TableView/TableView";
import DynamicHeaderStructure from "../../components/DynamicHeaderStructure";

const data = [
  {
    DepartmentName: "kajbdsf",
    ByDefault: "InActive",
    Status: "Active",
    ChnageStatus: "11@gmail.com",
    Action: "--",
  },
  {
    DepartmentName: "kajbdsf",
    ByDefault: "Active",
    Status: "InActive",
    ChnageStatus: "11@gmail.com",
    Action: "--",
  },
];
const Departments_Header = [
  {
    name: "Department Name",
    selector: (row: { DepartmentName: any }) => row.DepartmentName,
  },
  {
    name: "By Default",
    selector: (row: { ByDefault: any }) => row.ByDefault,
    cell: (row: any) => (
      <div
        style={{
          padding: "0.22rem 1rem",
          borderRadius: "12px",
          backgroundColor:
            row.ByDefault === "Active"
              ? "rgba(63, 195, 128, 0.9)"
              : row.ByDefault === "InActive"
              ? "#F84D4D"
              : "transparent",
          color: "white",
          cursor: row.ByDefault === "Active" ? "pointer" : "default",
        }}
      >
        {row.ByDefault}
      </div>
    ),
  },
  {
    name: "Status",
    selector: (row: { Status: any }) => row.Status,
    cell: (row: any) => (
      <div
        style={{
          padding: "0.22rem 1rem",
          borderRadius: "12px",
          backgroundColor:
            row.Status === "Active"
              ? "rgba(63, 195, 128, 0.9)"
              : row.Status === "InActive"
              ? "#F84D4D"
              : "transparent",
          color: "white",
          cursor: row.Status === "Active" ? "pointer" : "default",
        }}
      >
        {row.Status}
      </div>
    ),
  },
  {
    name: "Change Status",
    selector: (row: { ChangeStatus: any }) => row.ChangeStatus,
  },
  {
    name: "Action",
    selector: (row: { Action: any }) => row.Action,
    cell: (row: any) => (
      <div
        style={{
          padding: "0.375rem 0.75rem",
          borderRadius: "4px",
          backgroundColor: "#004D72",
          color: "white",
          cursor: row.ByDefault === "Active" ? "pointer" : "default",
        }}
      >
        {"Set Default"}
      </div>
    ),
  },
];
const button = [
  {
    title: "+ add Departments",
  },
];
const Departments = () => {
  const checkReduxState = useSelector((state: RootState) => state.block.check);
  console.log(checkReduxState, "checkReduxState");
  return (
    <>
      <div className="cs-table">
        <DynamicHeaderStructure title={"Department"} button={button} />
        <TableView header={Departments_Header} data={data} />
      </div>
    </>
  );
};
export default Departments;
