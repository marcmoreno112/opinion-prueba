import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import TopLevelPage from "./TopLevelPage";

describe("Given a TopLevel Page component", () => {
  describe("When rendered", () => {
    test("Then it should show a title", () => {
      render(<TopLevelPage />);

      const titles = screen.getAllByRole("heading");

      expect(titles[0]).toBeInTheDocument();
    });
  });
});
