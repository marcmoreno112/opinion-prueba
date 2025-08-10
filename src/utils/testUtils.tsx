import { PropsWithChildren } from "react";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme/theme";
import GlobalStyle from "../styles/GlobalStyles/GlobalStyles";

export const renderWithProviders = (ui: React.ReactElement) => {
  const Wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    );
  };

  render(ui, { wrapper: Wrapper });
};

export const mockRouterProvider = (
  ui: React.ReactElement,
): React.ReactElement => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: ui,
    },
  ];

  const mockRouter = createMemoryRouter(routes);

  return <RouterProvider router={mockRouter} />;
};
