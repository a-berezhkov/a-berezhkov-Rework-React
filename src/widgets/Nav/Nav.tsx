import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <Link to={"/auth"}> Авторизация</Link>
      <Link to={"/reg"}> Регистрация</Link>
    </>
  );
}

export default Nav;
