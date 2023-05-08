import React from 'react';
import './Header.scss';
import Logo from './../../assets/img/Header/logo.svg'
import Bell from './../../assets/img/Header/bell-icon.svg'
import { Link } from 'react-router-dom';

const Header = () => {
	return(
		<header className='header'>
			<div className='header__body wrap'>
				<Link to="/">
					<img className="header__logo" src={Logo} alt="logo"/>
				</Link>
				<div className="header__user">
					<a href='/messages'>
						<img className="header__alert" src={Bell} alt="bell" />
					</a>
				</div>
			</div>
		</header>
	)
}

export default Header;