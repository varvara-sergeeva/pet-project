import React from 'react';
import MessagesPageStyle from './MessagesPage.module.scss';
import { Header } from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';

const MessagesPage = () => {
	return (
		<div className={MessagesPageStyle.messagesPage}>
			<Header/>
			<div className='content'>
				<span className='item'>Messages</span>
			</div>
			<Footer/>
		</div>
	)
}

export {MessagesPage}