import React from "react";
import "./Header.scss";
import Logo from "./../../assets/img/Header/logo.svg";
import { Cart } from "../Cart/Cart";
import { Link } from "react-router-dom";

function Header(props) {
  const { order } = props;
  return (
    <header className="header">
      <div className="header__body wrap">
        <Link to="/">
          <img className="header__logo" src={Logo} alt="logo" />
        </Link>
        <div className="header__user">
          <Cart quantity={order.length} />
        </div>
      </div>
    </header>
  );
}

export { Header };
