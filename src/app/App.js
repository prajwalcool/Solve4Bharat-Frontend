import React from "react";
import { Router } from "react-router-dom";
import jssExtend from "jss-extend";
import history from "@history";
import AppContext from "./AppContext";
import { ApolloProvider } from "@apollo/react-hooks";
import { create } from "jss";
import {
  StylesProvider,
  jssPreset,
  createGenerateClassName,
  ThemeProvider
} from "@material-ui/styles";
import routes from "./configs/routesConfig";
import { theme } from "./configs/themesConfig.js";
import { AppLayout } from "@app";
import ApolloClient from "apollo-boost";
const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

const jss = create({
  ...jssPreset(),
  plugins: [...jssPreset().plugins, jssExtend()],
  insertionPoint: document.getElementById("jss-insertion-point")
});

const generateClassName = createGenerateClassName();

console.log(routes);
const App = () => {
  return (
    <AppContext.Provider value={{ routes }}>
      <StylesProvider jss={jss} generateClassName={generateClassName}>
        <Router history={history}>
          <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
              <AppLayout />
            </ThemeProvider>
          </ApolloProvider>
        </Router>
      </StylesProvider>
    </AppContext.Provider>
  );
};

export default App;
