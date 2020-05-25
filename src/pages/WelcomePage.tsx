import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import styled from "styled-components/macro";
import PlayArrow from "@material-ui/icons/PlayArrow";

const WelcomePageStyles = styled.div`
  display: grid;
  grid-gap: 1em;
  justify-items: center;
  a {
    text-decoration: none;
  }
`;

const WelcomePage = () => {
  return (
    <WelcomePageStyles>
      <div className="welcomeMessage">
        Hey, welcome! [Here's some info about the viz you're about to see.]
      </div>
      <div className="buttonRow">
        <Link to="/explore">
          <Button variant="contained" endIcon={<PlayArrow />}>
            Explore
          </Button>
        </Link>
      </div>
    </WelcomePageStyles>
  );
};

export default WelcomePage;
