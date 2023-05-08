import React from 'react';
import FavoritePageStyle from './FavoritePage.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const FavoritePage = () => {
	return (
		<div className={FavoritePageStyle.favoritePage}>
			<Header/>
			<div className='content'>
				<span className='item'>Favorite</span>
			</div>
			<Footer/>
		</div>
	)
}

export {FavoritePage}