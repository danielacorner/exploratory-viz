import React, { useState } from "react";
import { animated, useSpring } from "react-spring";
import { useMount } from "../../utils/customHooks";
import { BarStyles } from "./BarStyles";

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
  const barHeight = lengthPercent * 100;

  // the bars spring up and down when you swap out the data,
  // so we can see the relative scale between datasets

  // set "isMounted" to true on mount so we can spring up on mount
  const [isMounted, setIsMounted] = useState(false);
  useMount(() => setIsMounted(true));

  const springUp = useSpring({
    // start at 0 height, then spring up
    height: `${isMounted ? barHeight : 0}%`,
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
