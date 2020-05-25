import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import { ThemeProvider } from "@material-ui/core/styles";
import { useTheme } from "styled-components";
import WelcomePage from "./pages/WelcomePage";
import ExploratoryVizPage from "./pages/ExploratoryVizPage";

function App() {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <BrowserRouter>
          <Nav />
          <div className="pageContent">
            <Route exact={true} path="/" component={WelcomePage} />
            <Route
              exact={true}
              path="/explore"
              component={ExploratoryVizPage}
            />
          </div>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
