import React from "react";
import styled from "styled-components/macro";

enum LabelPositions {
  center,
  start,
  end,
}

type BarProps = {
  length: number;
  dataLabel?: string | number;
  labelPosition?: LabelPositions;
};

const BarStyles = styled.div``;

/**
 *  @param length the length of the bar, as a % of the bar chart length
 *  @param dataLabel optional data label to attach to each bar
 *  @param labelPosition = LabelPositions.center,
 */
const Bar = ({
  length,
  dataLabel,
  labelPosition = LabelPositions.center,
}: BarProps) => {
  return (
    <BarStyles length={length}>
      {dataLabel && <div className="dataLabel">{dataLabel}</div>}
    </BarStyles>
  );
};

export default Bar;
