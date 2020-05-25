import React from "react";
import { Drawer } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const LeftDrawerStyles = styled.div`
  width: 200px;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 0.5em;
  padding: 1em;
  font-size: 1.5em;
`;

type LeftDrawerProps = {
  isDrawerOpen: boolean;
  setIsDrawerOpen: Function;
};

const LeftDrawer = ({ isDrawerOpen, setIsDrawerOpen }: LeftDrawerProps) => {
  const closeDrawer = () => setIsDrawerOpen(false);
  return (
    <Drawer anchor={"left"} open={isDrawerOpen} onClose={closeDrawer}>
      <LeftDrawerStyles>
        <Link onClick={closeDrawer} to="/">
          Welcome
        </Link>
        <Link onClick={closeDrawer} to="/explore">
          Explore
        </Link>
      </LeftDrawerStyles>
    </Drawer>
  );
};

export default LeftDrawer;
