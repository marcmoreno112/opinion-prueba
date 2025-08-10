import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme/theme";
import GlobalStyle from "./styles/GlobalStyles/GlobalStyles";
import { RouterProvider } from "react-router-dom";
import appRouter from "./router/appRouter";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  </React.StrictMode>,
);
