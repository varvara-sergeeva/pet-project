import './Dog.scss';

function Dog (props) {
	const {
		id,
		name,
		age,
		breeds,
		photos
	} = props;

	return (
		<div className="card dog">
			<div className="card__pic">
			</div>
			<div className="card__info">
				<h3 className="card__title">{name}</h3>
				{photos ? (
					<img className="card__img" src={photos.small} />
				) : (
						<p>this dog dont have a photo</p>
				)}
				<p>{JSON.stringify(breeds)}</p>
				<p>{id}</p>
				<span className="card__title">{age}</span>
			</div>
		</div>
	)
}

export {Dog}