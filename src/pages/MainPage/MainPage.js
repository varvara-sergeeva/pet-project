import React from 'react';
import MainPageStyle from './MainPage.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const MainPage = () => {
	return ( <
		div className = {
			MainPageStyle.mainPage
		} >
		<
		Header / >
		<
		div className = 'content' >
		<
		span className = 'item' > MAIN < /span> <
		/div> <
		Footer / >
		<
		/div>
	)
}

export {
	MainPage
}