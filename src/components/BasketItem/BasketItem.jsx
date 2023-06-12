import "./BasketItem.scss";
import CloseIcon from "./../../assets/img/Header/close.svg";

function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    plusQuantity = Function.prototype,
    minusQuantity = Function.prototype,
  } = props;

  return (
    <li className="basket-item">
      <span className="basket-item__name">{name}</span>
      <div className="basket-item__quantity">
        <button
          className="basket-item__minus"
          onClick={() => minusQuantity(id)}
        >
          -
        </button>
        <span>{quantity}</span>
        <button className="basket-item__plus" onClick={() => plusQuantity(id)}>
          +
        </button>
      </div>
      <span className="basket-item__price">{price * quantity} руб</span>
      <span
        className="basket-item__delete"
        onClick={() => removeFromBasket(id)}
      >
        <img src={CloseIcon} alt="{name}" />
      </span>
    </li>
  );
}

export { BasketItem };
