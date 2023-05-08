import React from 'react';
import MainPageStyle from './MainPage.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';



import {Dogs} from './../../components/Dogs/Dogs'

class MainPage extends React.Component {


	state = {
		dogs: [],
	}

	componentDidMount() {
		fetch('https://api.thedogapi.com/v1/breeds?search=100&api_key=live_j3THa49GFue5FIbfGv3xJet6gtwDXs39QxPtvaEFNf4jxzZR8dPdaIr01XUYKLG1')
			.then(response => response.json())
			.then(data => this.setState({dogs: data}))
	}

	render() {
		const {dogs} = this.state;

		return (
			<div className={MainPageStyle.mainPage}>
				<Header/>
				<div className='content'>
					<span className='item'>MAIN</span>
					<div className='main__body'>
						{
							dogs.length ? (
								<Dogs dogs={this.state.dogs}/>
							) : <h3>Lodaing...</h3>
						}
					</div>
				</div>
				<Footer/>
			</div>
		)
	}
}


//const MainPage = () => {
//	return (
//		<div className={MainPageStyle.mainPage}>
//			<Header/>
//			<div className='content'>
//				<span className='item'>MAIN</span>
//			</div>
//			<Footer/>
//		</div>
//	)
//}

export {MainPage}