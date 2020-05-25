import React from "react";
import styled from "styled-components/macro";
import Bar from "./Bar";
import { darkGrey } from "../../utils/colors";
import { useTransition } from "react-spring";
import { animated } from "react-spring";

export enum BarChartLayouts {
  horizontal,
  vertical,
}

const BarChartStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) =>
    props.layout === BarChartLayouts.horizontal
      ? "column"
      : props.layout === BarChartLayouts.vertical
      ? "row"
      : "unset"};
  align-items: end;
  border-bottom: 1px solid ${darkGrey};
  position: relative;
  .barWrapper {
    transform-origin: bottom;
    height: 100%;
  }
`;

type BarChartProps = {
  data: object[];
  xAxisKey: string;
  yAxisKey: string;
  yAxisMax: number;
  layout: BarChartLayouts;
  barColor: string;
};

/**
 * A bar chart, similar to [this recharts bar chart](https://recharts.org/en-US/api/BarChart)
 *
 * @param data an array of objects containing data
 * @param xAxisKey which data key should be shown on the x axis
 * @param yAxisKey which data key should be shown on the y axis
 * @param yAxisMax maximum value for y axis
 * @param layout horizontal or vertical (use BarChartLayouts enum)
 */
const BarChart = ({
  data,
  xAxisKey,
  yAxisKey,
  layout,
  barColor,
  yAxisMax,
}: BarChartProps) => {
  // the bars transition in/out by shrinking their widths + margins to 0%
  const transitions = useTransition(data, (datum) => datum[xAxisKey], {
    from: { width: "0%", margin: "0% 0%", opacity: 0 },
    enter: { width: "100%", margin: "0% 2%", opacity: 2 }, // using opacity > 1 here to shrink the transition time from 0 to 1 opacity
    leave: { width: "0%", margin: "0% 0%", opacity: 0 },
  });

  return (
    <BarChartStyles layout={layout}>
      {transitions
        // sort the data by the xAxisKey
        .sort((transitionItem2, transitionItem1) =>
          transitionItem1.item[xAxisKey] > transitionItem2.item[xAxisKey]
            ? 1
            : -1
        )
        .map(({ item: datum, key, props }, idx) => (
          <animated.div className="barWrapper" style={props} key={key}>
            <Bar
              // show the yAxisKey as the length
              lengthPercent={datum[yAxisKey] / yAxisMax}
              tickLabel={datum[xAxisKey]}
              barColor={barColor}
            />
          </animated.div>
        ))}
    </BarChartStyles>
  );
};

export default BarChart;
