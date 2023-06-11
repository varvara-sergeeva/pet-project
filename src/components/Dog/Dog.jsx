import "./Dog.scss";

function Dog(props) {
  const {
    id,
    name,
    age,
    breeds,
    photos,
    price,
    addToBasket = Function.prototype,
  } = props;

  return (
    <div className="card dog">
      <div className="card__wrap">
        {photos ? (
          <img className="card__img" src={photos.small} />
        ) : (
          <p>this dog dont have a photo</p>
        )}
        <h3 className="card__title">{name}</h3>
        <div className="card__info">
          <span>{JSON.stringify(breeds)}</span>
          <span className="card__title">{age}</span>
        </div>

        <div className="card__bottom">
          <button
            className="card__btn"
            onClick={() =>
              addToBasket({
                id,
                name,
                price,
              })
            }
          >
            Покормить
          </button>
          <span className="card__price">{price} руб</span>
        </div>
      </div>
    </div>
  );
}

export { Dog };
