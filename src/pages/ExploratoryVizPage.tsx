import React from "react";
import BarChart, { BarChartLayouts } from "../components/BarChart/BarChart";

const exampleDatum = {
  elephants: 30,
  species: "cool",
  isDog: false,
};

const exampleData = [
  exampleDatum,
  { ...exampleDatum, isDog: true },
  { ...exampleDatum, elephants: 50 },
  { ...exampleDatum, elephants: 60 },
  { ...exampleDatum, elephants: 70 },
  { ...exampleDatum, elephants: 70, species: "cat" },
];

const ExploratoryVizPage = () => {
  return (
    <>
      <div>Explore!</div>
      <BarChart
        data={exampleData}
        xAxisKey="species"
        yAxisKey="elephants"
        layout={BarChartLayouts.horizontal}
      />
    </>
  );
};

export default ExploratoryVizPage;
