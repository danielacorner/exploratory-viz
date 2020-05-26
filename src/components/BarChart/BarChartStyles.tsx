import styled from "styled-components/macro";
import { darkGrey } from "../../utils/colors";
import { BarChartLayouts } from "./BarChart";

export const BarChartStyles = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${(props) =>
    // horizontal layout? flex-column
    props.layout === BarChartLayouts.horizontal
      ? "column"
      : // vertical layout? flex-row
      props.layout === BarChartLayouts.vertical
      ? "row"
      : "unset"};
  align-items: end;
  border-bottom: 1px solid ${darkGrey};
  position: relative;
  .barWrapper {
    transform-origin: bottom;
    height: 100%;
    width: 100%;
  }
`;
