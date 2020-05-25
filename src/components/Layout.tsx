import React from "react";
import styled from "styled-components/macro"; // importing from "/macro" shows the name of the styled component (e.g. AppStyles) in the dev tools

const AppStyles = styled.div`
  .pageContent {
    padding: 1em;
  }
`;

type LayoutProps = { children: JSX.Element | JSX.Element[] | string | null };

const Layout = ({ children }: LayoutProps) => {
  return <AppStyles>{children}</AppStyles>;
};

export default Layout;
