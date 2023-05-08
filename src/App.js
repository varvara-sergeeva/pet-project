

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import {MainPage} from './pages/MainPage/MainPage'
import {FavoritePage} from './pages/FavoritePage/FavoritePage'
import {HistoryPage} from './pages/HistoryPage/HistoryPage'
import {MessagesPage} from './pages/MessagesPage/Messages'
import {SettingsPage} from './pages/SettingsPage/Settings'


function App() {
  return (
		<>
			{/*<header>
				<Link to="/">Home</Link>
				<Link to="/favorite">Favorite</Link>
				<Link to="/history">History</Link>
				<Link to="/messages">Messages</Link>
				<Link to="/settings">Settings</Link>
			</header>*/}
			<Routes>
					<Route path={'/'} element={<MainPage />} />
					<Route path={'/favorite'} element={<FavoritePage />} />
					<Route path={'/history'} element={<HistoryPage />} />
					<Route path={'/messages'} element={<MessagesPage />} />
					<Route path={'/settings'} element={<SettingsPage />} />
			</Routes>
		</>
  );
}

export {App}
