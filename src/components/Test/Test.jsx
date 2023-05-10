import { async } from 'q';
import './App.css';
import { func } from 'prop-types';

function App() {



	componentDidMount() {


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

				let newO = window.localStorage.getItem('info');
				let nowO = JSON.parse(newO);
				var token = nowO.data.access_token;


			let urlPost = "https://api.petfinder.com/v2/animals?type=dog&page=20";
			let h = new Headers();
			//h.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
			h.append('Authentication', `Bearer ${token}`);

			let req = new Request(urlPost, {
				method: 'GET',
				mode: 'cors',
				headers: h
			})
			fetch(req)
				.then(resp => resp.json())
				.then(info => this.setState({dogs: info.animals}))
	}




	//async	function singIn() {
	//	let response = await fetch("https://api.petfinder.com/v2/oauth2/token", {
	//		method: "POST",
	//		body: JSON.stringify({
	//			"grant_type": "client_credentials",
	//			"client_id": "lKvkgPa982WjcJlpAiF59czEyN20qj5IyqEQXRtatEHLVbUqd2",
	//			"client_secret": "psG481ZBOYm7ejO4d9r4gG1iCiN4XtC02oM63R6W",
	//		}),
	//		headers: {
	//			"Content-type": "application/json; charset=UTF-8"
	//		}
	//	})
	//	let data = await response.json();
	//	return data;
	//}

	//async function getToken() {
	//	let weightToken = await singIn();
	//	console.log(weightToken);
	//	console.log(weightToken.access_token);
	//}

  return (
    <div className="App">
			<h1>Push datd to access token</h1>
			<button onClick={getToken}>singIN</button>
			<span id="tokenText"></span>
    </div>
  );
}

export default App;
