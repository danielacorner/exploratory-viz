import React, { useState } from "react";
import BarChart, { BarChartLayouts } from "../components/BarChart/BarChart";
import styled from "styled-components/macro";
import { Button } from "@material-ui/core";
import { isEqual } from "../utils/utils";
import { exampleData1, exampleData2 } from "../utils/exampleData";

const ExploratoryVizPageStyles = styled.div`
  .barChartContainer {
    padding: 2em;
    width: 100%;
    height: 500px;
  }
  .controls {
    padding: 1em 0;
  }
`;

const ExploratoryVizPage = () => {
  const [data, setData] = useState(exampleData1);
  const swapData = () => {
    // set data to exampleData1 if it's exampleData2, and vice versa
    setData((prevData) =>
      isEqual(prevData, exampleData1) ? exampleData2 : exampleData1
    );
  };
  const yAxisKey = "elephants";
  // scale to biggest Y value
  const maxYLength = data.reduce((max, cur) => Math.max(cur[yAxisKey], max), 0);

  return (
    <ExploratoryVizPageStyles>
      <div>
        Hey look, a bar chart!{" "}
        <span role="img" aria-label="bar chart">
          📊
        </span>
      </div>
      <div className="controls">
        <Button variant="outlined" onClick={swapData}>
          Swap datasets
        </Button>
      </div>
      <div className="barChartContainer">
        <BarChart
          data={data}
          xAxisKey="name"
          yAxisKey={yAxisKey}
          yAxisMax={maxYLength}
          layout={BarChartLayouts.vertical}
          barColor={"tomato"}
        />
      </div>
    </ExploratoryVizPageStyles>
  );
};

export default ExploratoryVizPage;
