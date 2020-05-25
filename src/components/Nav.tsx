import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useLocation } from "react-router";
import LeftDrawer from "./LeftDrawer";
import { titleCase } from "../utils/utils";

const APP_TITLE = "Welcome!";

const Nav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const location = useLocation();
  const pagePath = location.pathname.slice(1);
  const pageTitle = titleCase(pagePath);

  return (
    <>
      <LeftDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={openDrawer}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{pageTitle || APP_TITLE}</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
