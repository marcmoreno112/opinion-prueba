import { Outlet } from "react-router-dom";
import LayoutStyled from "./LayoutStyled";

const Layout = (): React.ReactElement => {
  return (
    <LayoutStyled data-testid="layout">
      <Outlet />
    </LayoutStyled>
  );
};

export default Layout;
