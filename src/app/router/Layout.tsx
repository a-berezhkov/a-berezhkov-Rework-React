import Nav from "../../widgets/Nav/Nav";
import { Outlet } from "react-router-dom";
import ErrorDisplay from "../../shared/ui/ErrorDisplay";

function Layout(): JSX.Element {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Nav />
      <ErrorDisplay />
      <Outlet />
    </div>
  );
}

export default Layout;
