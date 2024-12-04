import React from "react";
import Nav from "../../widgets/Nav/Nav";
import { Outlet } from "react-router-dom";

function Layout(): JSX.Element {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default Layout;
