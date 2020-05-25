import React from "react";
import styled from "styled-components/macro";
import { darkGrey } from "../../utils/colors";
import { animated, useSpring } from "react-spring";

enum LabelPositions {
  center,
  start,
  end,
}

type BarProps = {
  lengthPercent: number;
  dataLabel?: string | number;
  labelPosition?: LabelPositions;
  barColor: string;
  tickLabel: string;
};

const TICK_HEIGHT_PX = 12;
const TICK_WIDTH_PX = 1;

const BarStyles = styled.div`
  .bar {
    background: ${(props) => props.barColor};
    transform-origin: bottom;
  }
  display: grid;
  align-items: end;
  height: 100%;
  position: relative;
  .tickLabel {
    position: absolute;
    bottom: -1.5em;
    left: 0;
    right: 0;
    text-align: center;
  }
  .tick {
    position: absolute;
    background: ${darkGrey};
    bottom: -${TICK_HEIGHT_PX / 2}px;
    left: calc(50% - ${TICK_WIDTH_PX / 2}px);
    width: ${TICK_WIDTH_PX}px;
    height: ${TICK_HEIGHT_PX}px;
  }
`;

/**
 *  @param lengthPercent the length of the bar, as a % between 0 and 1, of the bar chart length
 *  @param dataLabel optional data label to attach to each bar
 *  @param labelPosition = LabelPositions.center,
 */
const Bar = ({
  lengthPercent,
  dataLabel,
  labelPosition = LabelPositions.center,
  barColor,
  tickLabel,
}: BarProps) => {
  // the bars spring up and down when you swap out the data,
  // so we can see the relative scale between datasets
  const springUp = useSpring({
    height: `${lengthPercent * 100}%`,
  });
  return (
    <BarStyles barColor={barColor}>
      <animated.div className="bar" style={springUp} />
      {dataLabel && <div className="dataLabel">{dataLabel}</div>}
      <div className="tickLabel">{tickLabel}</div>
      <div className="tick"></div>
    </BarStyles>
  );
};

export default Bar;
