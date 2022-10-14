import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import Provider from "./provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <ChakraProvider>
        <Provider>
          <App />
        </Provider>
      </ChakraProvider>
    </React.StrictMode>
  </BrowserRouter>
);
