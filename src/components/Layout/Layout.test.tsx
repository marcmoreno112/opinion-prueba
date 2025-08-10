import { render, screen } from "@testing-library/react";
import Layout from "./Layout";
import { describe, expect, test } from "vitest";
import GlobalStyle from "../../styles/GlobalStyles/GlobalStyles";
import theme from "../../styles/theme/theme";
import { ThemeProvider } from "styled-components";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title'", () => {
      render(
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout />
        </ThemeProvider>,
      );

      const element = screen.getByTestId("layout");

      expect(element).toBeInTheDocument();
    });
  });
});
