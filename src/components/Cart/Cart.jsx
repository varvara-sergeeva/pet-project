import "./Cart.scss";
import CartIcon from "./../../assets/img/Header/cart-icon.svg";

function Cart(props) {
  const { quantity = 0, handleBasketShow = Function.prototype } = props;

  return (
    <div className="header__cart" onClick={handleBasketShow}>
      <img className="cart__icon" src={CartIcon} alt="cart icon" />
      {quantity ? <span className="cart__quantity">{quantity}</span> : null}
    </div>
  );
}
export { Cart };
