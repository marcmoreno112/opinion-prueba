import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, expect, test } from "vitest";
import theme from "../../styles/theme/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles/GlobalStyles";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show a title", () => {
      render(
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>,
      );

      const element = screen.getByTestId("layout");

      expect(element).toBeInTheDocument();
    });
  });
});
