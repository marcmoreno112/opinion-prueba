import { screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routes } from "./appRouter";
import { describe, expect, test } from "vitest";
import titles from "../utils/titles";
import { renderWithProviders } from "../utils/testUtils";

describe("Given an appRouter router", () => {
  describe("When the user clicks the topLevel link", () => {
    test("Then it should show the topLevel page title", async () => {
      const expectedMylistPageTitle = titles.topLevel;

      const testRouterProvider = (): React.ReactElement => {
        const mockRouter = createMemoryRouter(routes);

        return <RouterProvider router={mockRouter} />;
      };

      renderWithProviders(testRouterProvider());

      const topLevelTitle = await screen.findByRole("heading", {
        name: expectedMylistPageTitle,
      });

      expect(topLevelTitle).toBeInTheDocument();
    });
  });
});
