import Nav from "../../widgets/Nav/Nav";
import { Outlet } from "react-router-dom";
import ErrorDisplay from "../../shared/ui/ErrorDisplay";

function Layout(): JSX.Element {
  return (
    <>
      <Nav />
      <ErrorDisplay />
      <Outlet />
    </>
  );
}

export default Layout;
