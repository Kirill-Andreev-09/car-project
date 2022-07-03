import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { App } from "./components/index";
import { ApolloClient } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { URL } from "./utils/constants";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
  uri: URL,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
