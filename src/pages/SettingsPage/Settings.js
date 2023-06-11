import React from 'react';
import SettingsPageStyle from './SettingsPage.module.scss';
import { Header } from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer';

const SettingsPage = () => {
	return (
		<div className={SettingsPageStyle.settingsPage}>
			<Header/>
			<div className='content'>
				<span className='item'>Settings</span>
			</div>
			<Footer/>
		</div>
	)
}

export {SettingsPage}