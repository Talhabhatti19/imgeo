import TableView from "../../components/TableView/TableView";

const AllApis = () => {
  const data = [
    {
      Name: "Application Commission",
      URL: "http://mynance.mytmdev.com/api/v1/partner/application/commission",
      Method: "POST",
      Status: "--",
    },
    {
      Name: "Application Commission",
      URL: "http://mynance.mytmdev.com/api/v1/partner/application/commission",
      Method: "get",
      Status: "--",
    },
  ];

  const Header = [
    {
      name: "Name",
      selector: (row: { Name: any }) => row.Name,
    },
    {
      name: "URL",
      selector: (row: { URL: any }) => row.URL,
    },
    {
      name: "Method",
      selector: (row: { Method: any }) => row.Method,
    },
    {
      name: "Status",
      selector: (row: { Status: any }) => row.Status,
    },
  ];

  return (
    <>
      <div className="cs-table">
        <div className="col-lg-12 search-bar col-12 d-flex align-items-center">
          <h2 className="col-lg-6 col-12 fs-6 fw-bold">All Apis</h2>
        </div>
        <TableView header={Header} data={data} />
      </div>
    </>
  );
};
export default AllApis;
