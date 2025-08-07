import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../../store";
import { describe, expect, test } from "vitest";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show a title", () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>,
      );

      const titles = screen.getAllByRole("heading");

      expect(titles[0]).toBeInTheDocument();
    });
  });
});
