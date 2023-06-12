import "./BasketItem.scss";
import CloseIcon from "./../../assets/img/Header/close.svg";

function BasketItem(props) {
  const { id, name, price, quantity } = props;

  return (
    <li className="basket-item">
      <span className="basket-item__name">{name}</span>
      <span className="basket-item__quantity">{quantity}</span>
      <span className="basket-item__price">{price} руб</span>
      <span className="basket-item__delete">
        <img src={CloseIcon} alt="{name}" />
      </span>
    </li>
  );
}

export { BasketItem };
