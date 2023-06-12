import "./BasketList.scss";
import DeleteIcon from "./../../assets/img/Header/delete.svg";
import { BasketItem } from "../BasketItem/BasketItem";

function BasketList(props) {
  const { order = [], handleBasketShow = Function.prototype } = props;

  const totalPrice = order.reduce((sum, product) => {
    return sum + product.price * product.quantity;
  }, 0);

  return (
    <div className="basket">
      <div className="basket__top">
        <h2>Корзина</h2>
        <span className="basket__close" onClick={handleBasketShow}>
          <img src={DeleteIcon} alt="закрыть корзину" />
        </span>
      </div>
      <ul className="basket__content">
        {order.length ? (
          order.map((item) => <BasketItem key={item.id} {...item} />)
        ) : (
          <li className="basket-item">В корзине пусто</li>
        )}
      </ul>
      <div className="basket__total">
        <p className="basket__sum">
          <span>Итого:</span>
          <span>{totalPrice} руб</span>
        </p>
        <a className="basket__link" href="#">
          Оформить заказ
        </a>
      </div>
    </div>
  );
}

export { BasketList };
