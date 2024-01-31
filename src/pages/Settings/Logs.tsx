import TableView from "../../components/TableView/TableView";
import { Images } from "../../components/Config/Images";

const data = [
  {
    Date: "2024-12-23",
    All: "12",
    Emergency: "2",
    ChnageStatus: "23",
    Action: "--",
  },
  {
    Date: "2024-12-23",
    All: "14",
    Emergency: "0",
    ChnageStatus: "11@gmail.com",
    Action: "--",
  },
];

const Logs = () => {
  const Departments_Header = [
    {
      name: "Date",
      selector: (row: { Date: any }) => row.Date,
      cell: (row: any) => (
        <div
          style={{
            padding: "0.22rem 1rem",
            borderRadius: "12px",
            backgroundColor: "#007bff",
            color: "white",
            cursor: row.ByDefault === "Active" ? "pointer" : "default",
          }}
        >
          {row.Date}
        </div>
      ),
    },
    {
      name: "All",
      cell: (row: any) => (
        <div
          style={{
            padding: "0.22rem 1rem",
            borderRadius: "12px",
            backgroundColor: "#8A8A8A",
            color: "white",
            cursor: row.ByDefault === "Active" ? "pointer" : "default",
          }}
        >
          {row.All}
        </div>
      ),
    },
    {
      name: "Emergency",
      selector: (row: { Emergency: any }) => row.Emergency,
      cell: (row: any) => (
        <div
          style={{
            padding: "0.22rem 1rem",
            borderRadius: "12px",
            backgroundColor: "#D1D1D1",
            color: "white",
            cursor: row.Status === "Active" ? "pointer" : "default",
          }}
        >
          {row.Emergency}
        </div>
      ),
    },
    {
      name: "Alert",
      cell: (row: any) => (
        <div
          style={{
            padding: "0.22rem 1rem",
            borderRadius: "12px",
            backgroundColor: "#D1D1D1",
            color: "white",
            cursor: row.Status === "Active" ? "pointer" : "default",
          }}
        >
          {row.Emergency}
        </div>
      ),
    },
    {
      name: "Critical",
      cell: (row: any) => (
        <div
          style={{
            padding: "0.22rem 1rem",
            borderRadius: "12px",
            backgroundColor: "#D1D1D1",
            color: "white",
          }}
        >
          {row.Emergency}
        </div>
      ),
    },
    {
      name: "Error",
      cell: (row: any) => (
        <div
          style={{
            padding: "0.22rem 1rem",
            borderRadius: "12px",
            backgroundColor: "#FF5722",
            color: "white",
          }}
        >
          {row.Emergency}
        </div>
      ),
    },
    {
      name: "Warning",
      cell: (row: any) => (
        <div
          style={{
            padding: "0.22rem 1rem",
            borderRadius: "12px",
            backgroundColor: "#D1D1D1",
            color: "white",
          }}
        >
          {row.Emergency}
        </div>
      ),
    },
    {
      name: "Notice",
      cell: (row: any) => (
        <div
          style={{
            padding: "0.22rem 1rem",
            borderRadius: "12px",
            backgroundColor: "#D1D1D1",
            color: "white",
          }}
        >
          {row.Emergency}
        </div>
      ),
    },
    {
      name: "Info",
      cell: (row: any) => (
        <div
          style={{
            padding: "0.22rem 1rem",
            borderRadius: "12px",
            backgroundColor: row.Emergency > 0 ? "#1976D2" : "#D1D1D1",
            color: "white",
          }}
        >
          {row.Emergency}
        </div>
      ),
    },
    {
      name: "Debug",
      cell: (row: any) => (
        <div
          style={{
            padding: "0.22rem 1rem",
            borderRadius: "12px",
            backgroundColor: "#D1D1D1",
            color: "white",
          }}
        >
          {row.Emergency}
        </div>
      ),
    },

    {
      name: "Action",
      selector: (row: { Action: any }) => row.Action,
      cell: (row: any) => (
        <>
          <div className="d-flex">
            <div
              style={{
                padding: ".25rem 0.5rem",
                borderRadius: "4px",
                backgroundColor: "#0dcaf0",
                color: "white",
                marginRight: "4px",
              }}
            >
              <img src={Images.settingIcon} alt="" />
            </div>
            <div
              style={{
                padding: ".25rem 0.5rem",
                borderRadius: "4px",
                backgroundColor: "#4253a1",
                color: "white",
                marginRight: "4px",
              }}
            >
              <img src={Images.settingIcon} alt="" />
            </div>
            <div
              style={{
                padding: ".25rem 0.5rem",
                borderRadius: "4px",
                backgroundColor: "#dc3545",
                color: "white",
                marginRight: "4px",
              }}
            >
              <img src={Images.settingIcon} alt="" />
            </div>
          </div>
        </>
      ),
    },
  ];
  const CustomHeader = (Departments_Header: any) => {
    return (
      <div>
        {Departments_Header.name === "Date" && (
          <div>
            <img
              src={Images.settingIcon}
              alt="Name"
              style={{ marginRight: "8px" }}
            />
            {Departments_Header.name}
          </div>
        )}
        {Departments_Header.name === "Age" && (
          <div>
            <img
              src="path_to_image/age_image.jpg"
              alt="Age"
              style={{ marginRight: "8px" }}
            />
            {Departments_Header.name}
          </div>
        )}
        {/* Add more conditions for other columns if needed */}
      </div>
    );
  };

  return (
    <>
      <div className="cs-table">
        <TableView header={Departments_Header} data={data} />
      </div>
    </>
  );
};
export default Logs;
