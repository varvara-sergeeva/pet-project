import React from 'react';
import MainPageStyle from './MainPage.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';



import {Dogs} from './../../components/Dogs/Dogs'
import {Search} from './../../components/Search/Search'

class MainPage extends React.Component {


	state = {
		dogs: [],
	}

	componentDidMount() {
		fetch('http://localhost:3500/animals')
			.then(response => response.json())
			.then(data => this.setState({dogs: data}))
	}

	searchDogs = (queryStr) => {
		fetch(`http://localhost:3500/animals?breeds_like=${queryStr}`)
		.then(response => response.json())
		.then(data => this.setState({dogs: data}))
	}
	searchDogs = (queryStr, gender = 'Male, Female') => {
		fetch(`http://localhost:3500/animals?breeds_like=${queryStr}${gender !== 'Male, Female' ? `&gender=${gender}` : ''}`)
		.then(response => response.json())
		.then(data => this.setState({dogs: data}))
	}

	//searchGender = (genderQ, gender = 'Male') => {
	//	fetch(`http://localhost:3500/animals?gender=${genderQ}`)
	//	.then(response => response.json())
	//	.then(data => this.setState({dogs: data}))
	//}

	render() {
		const {dogs} = this.state;

		return (
			<div className={MainPageStyle.mainPage}>
				<Header/>
				<div className='content'>
					<Search searchDogs={this.searchDogs} />
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

export {MainPage}