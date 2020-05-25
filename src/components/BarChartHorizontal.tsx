import React from "react";
import styled from "styled-components/macro";
import { ExampleDataType } from "../types";

const BarChartHorizontalStyles = styled.div``;

type BarChartHorizontalProps = {
  bars: ExampleDataType[];
};

const BarChartHorizontal = ({ bars }: BarChartHorizontalProps) => {
  return <BarChartHorizontalStyles></BarChartHorizontalStyles>;
};

export default BarChartHorizontal;
