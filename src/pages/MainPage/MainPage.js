import React, {useState, useEffect} from "react";
import MainPageStyle from "./MainPage.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { Dogs } from "../../components/Dogs/Dogs";
import { Search } from "../../components/Search/Search";
import { Preloader } from "../../components/Preloader/Preloader";

function MainPage() {
	const [dogs, setDogs] = useState([]);
	const [loading, setLoading] = useState(true);

  const searchDogs = (queryStr, gender = "Male, Female") => {
		setLoading(true);
    fetch(`http://localhost:3500/animals?breeds_like=${queryStr}${gender !== "Male, Female" ? `&gender=${gender}` : ""}`)
      .then((response) => response.json())
      .then((data) => {
				setDogs(data);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
  };

	useEffect(() => {
		fetch("http://localhost:3500/animals")
		.then((response) => response.json())
		.then((data) => {
			setDogs(data);
			setLoading(false);
		})
		.catch((err) => {
			console.error(err);
			setLoading(false);
		});
	}, [])

  return (
    <div className={MainPageStyle.mainPage}>
      <Header />
      <div className="content">
        <Search searchDogs={searchDogs} />
        <div className="main__body">
          {loading ? (<Preloader />) : (<Dogs dogs={dogs} />)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { MainPage };
