import { DatePicker, Select } from "antd";
import Graphs from "../Dashboard/Graphs";
import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import RecentApplication from "../Dashboard/RecentApplication";
import { Images } from "../Config/Images";

function ComplianceDashboard() {
  const themeBuilder = useSelector((state: RootState) => state.block.theme);
  const compilanceData = useSelector(
    (state: RootState) => state.block.compilanceDashboard
  );
  const dashboardStructure = useSelector(
    (state: RootState) => state.block.dashboardStructure
  );

  const GlobalStyle = createGlobalStyle`
  .card-blocks .row .col-md-3 .card{
  background: ${themeBuilder?.cards?.cardsBackgroundColor} !important;
  color:${themeBuilder?.cards?.cardsTextColor}!important;
  }
`;
  const renderedFinanceOverview =
    compilanceData?.financeOverview &&
    compilanceData?.financeOverview.map((item: any, index: any) => (
      <div key={index} className="view-chart mb-4">
        <div className="chart-header d-flex justify-content-between align-items-center">
          <h3 className="welcome-heading">{item.title}</h3>
          <div className="d-flex align-items-center">
            <div className="d-grid">
              <label htmlFor="" className="label-theme">
                From
              </label>
              <DatePicker
                style={{
                  width: "200px",
                  height: "36px",
                  marginRight: "10px",
                }}
              />
            </div>
            <div className="d-grid">
              <label htmlFor="" className="label-theme">
                To
              </label>
              <DatePicker
                style={{
                  width: "200px",
                  height: "36px",
                }}
              />
            </div>
          </div>
        </div>
        {item?.child &&
          item?.child.map((chart: any, chartIndex: any) => (
            <div style={{ marginTop: "20px" }}>
              <Graphs key={chartIndex} option={chart} />
            </div>
          ))}
      </div>
    ));
  const renderedBarOverview =
    compilanceData?.barchart &&
    compilanceData?.barchart.map((item: any, index: any) => (
      <div key={index} className="col-6 p-2">
        <h2 className="col-12 fs-6 fw-bold mt-5">{item.title}</h2>
        {item.child.map((chart: any, chartIndex: any) => (
          <div className="view-chart" key={chartIndex}>
            <Graphs option={chart} />
          </div>
        ))}
      </div>
    ));
  return (
    <>
      <div>
        <div className="col-lg-12 search-bar col-12 d-flex align-items-center">
          <h2
            className="col-lg-6 col-12 fs-6 fw-bold"
            style={{ color: themeBuilder?.color?.headingTextColor }}
          >
            {compilanceData.title}
          </h2>
        </div>
        <div className="col-12">
          <div className="card-blocks">
            <div className="row">
              {compilanceData?.cards &&
                compilanceData?.cards.map((card: any, index: any) => (
                  <div className="col-md-3" key={index}>
                    <div className="card">
                      <img
                        src={card.icon ? card.icon : Images.Cash}
                        alt={card.title}
                      />
                      <div className="card-body">
                        <div
                          className="card-title"
                          style={{ fontSize: "12px" }}
                        >
                          {card.title}
                        </div>
                        <p className="card-text" style={{ fontSize: "12px" }}>
                          {card.value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div>{renderedFinanceOverview}</div>
        <div className="col-12 d-flex">
          <div className="col-6">
            <h2
              className="col-12 fs-6 fw-bold mt-5"
              style={{ color: themeBuilder?.color?.headingTextColor }}
            >
              All statistics
            </h2>
          </div>
          <div className="col-6">
            <div className="d-flex">
              <h2
                className="col-6 fs-6 fw-bold mt-5"
                style={{ color: themeBuilder?.color?.headingTextColor }}
              >
                Pie Chart
              </h2>
              <h2 className="col-6 d-flex justify-content-end fs-6 fw-bold mt-5">
                <div style={{ marginRight: "15px" }}>
                  <Select style={{ width: "120px" }}>
                    <option value="1">Test</option>
                    <option value="1">Test</option>
                    <option value="1">Test</option>
                  </Select>
                </div>
                <div style={{ marginRight: "15px" }}>
                  <Select style={{ width: "100px" }}>
                    <option value="1">Test</option>
                    <option value="1">Test</option>
                    <option value="1">Test</option>
                  </Select>
                </div>
              </h2>
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap col-12"> {renderedBarOverview}</div>
        <RecentApplication
          style={{ backgroundColor: themeBuilder?.table?.backgroundColor }}
          data={dashboardStructure?.table}
        />
      </div>
      <GlobalStyle />
    </>
  );
}

export default ComplianceDashboard;
