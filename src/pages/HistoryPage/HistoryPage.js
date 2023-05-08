import React from 'react';
import HistoryPageStyle from './HistoryPage.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const HistoryPage = () => {
	return (
		<div className={HistoryPageStyle.historyPage}>
			<Header/>
			<div className='content'>
				<span className='item'>History</span>
			</div>
			<Footer/>
		</div>
	)
}

export {HistoryPage}