import React from "react";
import styled from "styled-components/macro";
import Bar from "./Bar";

export enum BarChartLayouts {
  horizontal,
  vertical,
}

const BarChartStyles = styled.div`
  display: grid;
  grid-auto-flow: ${(props) =>
    props.layout === BarChartLayouts.horizontal
      ? "column"
      : props.layout === BarChartLayouts.vertical
      ? "row"
      : "unset"};
`;

type BarChartProps = {
  data: object[];
  xAxisKey: string;
  yAxisKey: string;
  layout: BarChartLayouts;
};

/**
 * A bar chart, similar to [this recharts bar chart](https://recharts.org/en-US/api/BarChart)
 *
 * @param data an array of objects containing data
 * @param xAxisKey which object key should be shown on the x axis
 * @param yAxisKey which object key should be shown on the y axis
 * @param layout horizontal or vertical (use BarChartLayouts enum)
 */
const BarChart = ({ data, xAxisKey, yAxisKey, layout }: BarChartProps) => {
  return (
    <BarChartStyles layout={layout}>
      {data.map((datum) => (
        <Bar length={datum[yAxisKey]} />
      ))}
    </BarChartStyles>
  );
};

export default BarChart;
