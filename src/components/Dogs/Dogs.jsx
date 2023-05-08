//import React from 'react';

import {Dog} from './../Dog/Dog'
import './Dogs.scss';


function Dogs (props) {
	const {dogs} = props;

	return (
		<div className="dogs">
			{dogs.map(dog => {
				return <Dog key={dog.id} {...dog}/>
			})}
		</div>
	)
}

export {Dogs}