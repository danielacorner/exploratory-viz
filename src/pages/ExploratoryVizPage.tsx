import React, { useState } from "react";
import BarChart, { BarChartLayouts } from "../components/BarChart/BarChart";
import styled from "styled-components/macro";
import { Button } from "@material-ui/core";
import { isEqual } from "../utils/utils";

const exampleDatum = {
  name: "Item A",
  elephants: 30,
  species: "cool",
  isDog: false,
};

const exampleData1 = [
  exampleDatum,
  {
    ...exampleDatum,
    name: "Item B",
    isDog: true,
  },
  { ...exampleDatum, name: "Item C", elephants: 50 },
  { ...exampleDatum, name: "Item D", elephants: 60 },
  { ...exampleDatum, name: "Item E", elephants: 70 },
  { ...exampleDatum, name: "Item F", elephants: 70, species: "cat" },
];

const exampleData2 = [
  { ...exampleDatum, name: "Item G", elephants: 100 },
  { ...exampleDatum, name: "Item H", elephants: 10 },
  { ...exampleDatum, name: "Item I", elephants: 80 },
  { ...exampleDatum, name: "Item J", elephants: 20 },
  { ...exampleDatum, name: "Item K", elephants: 400, species: "cat" },
];

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
    setData((prevData) =>
      isEqual(prevData, exampleData1) ? exampleData2 : exampleData1
    );
  };
  const yAxisKey = "elephants";
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
