import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import TableView from "../../components/TableView/TableView";
import { Product_Management_Header } from "../../components/Config/TableHeaders";

const data = [
  {
    ProductNameEr: "jhdbfs",
    ProductNameAr: "kajbdsf",
    Logo: "-",
    Email: "11@gmail.com",
    Phone: "123456",
    Date: "12.34.2044",
    ParentStatus: "---",
    Status: "active",
    Action: "--",
  },
];

const CustomerList = () => {
  const checkReduxState = useSelector((state: RootState) => state.block.check);
  console.log(checkReduxState, "checkReduxState");
  return (
    <>
      <div className="">
        <div className="d-flex align-items-center">
          <h2 className="col-6 fs-6 fw-bold mt-5">Product Management</h2>
        </div>
        <TableView header={Product_Management_Header} data={data} />
      </div>
    </>
  );
};
export default CustomerList;
