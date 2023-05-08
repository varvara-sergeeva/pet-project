import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

import HomeIcon from './../../assets/img/Footer/home-ico.svg'
import HistoryIcon from './../../assets/img/Footer/act-icon.svg'
import FavIcon from './../../assets/img/Footer/heart-icon.svg'
import MessageIcon from './../../assets/img/Footer/messages-icon.svg'
import SettingsIcon from './../../assets/img/Footer/user-icon.svg'

const Footer = () => {
	return(
		<footer className='footer'>
			<ul className="footer__list wrap">
				<li>
					<Link to="/">
						<img className="footer__icon" src={HomeIcon} alt="home page"/>
					</Link>
				</li>
				<li>
					<Link to="/history">
						<img className="footer__icon" src={HistoryIcon} alt="home page"/>
					</Link>
				</li>
				<li>
					<Link to="/favorite">
						<img className="footer__icon" src={FavIcon} alt="home page"/>
					</Link>
				</li>
				<li>
					<Link to="/messages">
						<img className="footer__icon" src={MessageIcon} alt="home page"/>
					</Link>
				</li>
				<li>
					<Link to="/settings">
						<img className="footer__icon" src={SettingsIcon} alt="home page"/>
					</Link>
				</li>
			</ul>
		</footer>
	)
}

export default Footer;