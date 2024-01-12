import React, { useEffect } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts/core";
import { EChartsOption } from "echarts";

const Graphs = () => {
  useEffect(() => {
    // You can use echarts here for any additional configuration
  }, []);

  const option: EChartsOption = {
    xAxis: {
      type: "category",
      data: ["Category 1", "Category 2", "Category 3"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [20, 40, 60],
        type: "bar",
      },
    ],
  };

  return (
    <ReactECharts
      echarts={echarts}
      option={option}
      style={{ height: "400px", width: "100%" }}
    />
  );
};

export default Graphs;
