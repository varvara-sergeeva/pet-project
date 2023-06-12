import React from "react";
import "./Header.scss";
import Logo from "./../../assets/img/Header/logo.svg";
import { Cart } from "../Cart/Cart";
import { Link } from "react-router-dom";

function Header(props) {
  const { order, isBasketShow, handleBasketShow = Function.prototype } = props;
  return (
    <header className="header">
      <div className="header__body wrap">
        <Link to="/">
          <img className="header__logo" src={Logo} alt="logo" />
        </Link>
        <div className="header__user">
          <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
        </div>
      </div>
    </header>
  );
}

export { Header };
