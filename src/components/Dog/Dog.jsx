import './Dog.scss';

function Dog (props) {
	const {
		id,
		name,
		image: photo
	} = props;

	return (
		<div className="card dog">
			<div className="card__img">
				<img src={photo.url} alt={name} />
			</div>
			<div className="card__info">
				<h3 className="card__title">{name}</h3>
			</div>
		</div>
	)
}

export {Dog}