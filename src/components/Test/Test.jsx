import { async } from 'q';
import './App.css';
import { func } from 'prop-types';

class MainPage extends React.Component {


	state = {
		dogs: [],
	}

	//! breed API
	//componentDidMount() {
	//	fetch('https://api.thedogapi.com/v1/breeds?search=100&api_key=live_j3THa49GFue5FIbfGv3xJet6gtwDXs39QxPtvaEFNf4jxzZR8dPdaIr01XUYKLG1')
	//		.then(response => response.json())
	//		.then(data => this.setState({dogs: data}))
	//}

	//! items API access via token

	componentDidMount() {
		//! post request to get token on responce
		fetch("https://api.petfinder.com/v2/oauth2/token", {
			method: "POST",
			body: JSON.stringify({
				"grant_type": "client_credentials",
				"client_id": "lKvkgPa982WjcJlpAiF59czEyN20qj5IyqEQXRtatEHLVbUqd2",
				"client_secret": "psG481ZBOYm7ejO4d9r4gG1iCiN4XtC02oM63R6W",
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
			})
				.then((response) => response.json())
				.then(data => localStorage.setItem('info', JSON.stringify({data})))

				//! save token + put at variable
				let newO = window.localStorage.getItem('info');
				let nowO = JSON.parse(newO);
				var token = nowO.data.access_token;
				console.log('now ' + token)

			//! get request > data
			let urlPost = "https://api.petfinder.com/v2/animals?type=dog&page=11";
			//let urlPost = "https://api.petfinder.com/v2/animals/64400555";
			let h = new Headers();
			h.append('Authorization', `Bearer ${token}`);
			let req = new Request(urlPost, {
				method: 'GET',
				mode: 'cors',
				headers: h
			})
			fetch(req)
				.then(resp => resp.json())
				.then(info => this.setState({dogs: info.animals}))
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

export default App;
