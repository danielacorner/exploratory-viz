import styled from "styled-components/macro";
import { darkGrey } from "../../utils/colors";

const TICK_HEIGHT_PX = 12;
const TICK_WIDTH_PX = 1;

export const BarStyles = styled.div`
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
