import SelectionTab from "../SelectionTab";

const CreditInfo = () => {
  const actionOptions = [
    { label: "Customer type", value: "2,000.00" },
    { label: "Years in jobs", value: "SR 0.00" },
    { label: "Relevant experience", value: "SR 0.00" },
    { label: "Age of customer", value: "SR 2,000.00" },
    { label: "Region", value: "SR 1,970.00" },
    { label: "Credit score of customer", value: "SR 1,970.00" },
    { label: "Number of lenders with active limits", value: "SR 1,970.00" },
    { label: "Dbr service coverage", value: "SR 1,970.00" },
  ];
  return (
    <>
      <div className="row g-3 pt-4">
        {actionOptions.map((item: any) => (
          <div className="col-md-4">
            <div className="pb-2">{item.label}</div>
            <SelectionTab size={"w-100"} />
          </div>
        ))}
        <div className="d-flex justify-content-end">
          <button className="theme-btn">save</button>
        </div>
      </div>
    </>
  );
};
export default CreditInfo;
