import React from "react";
import MainPageStyle from "./MainPage.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import { Dogs } from "../../components/Dogs/Dogs";
import { Search } from "../../components/Search/Search";
import { Preloader } from "../../components/Preloader/Preloader";

class MainPage extends React.Component {
  state = {
    dogs: [],
    loading: true,
  };

  componentDidMount() {
    fetch("http://localhost:3500/animals")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          dogs: data,
					loading:false
        })
      );
  }

  searchDogs = (queryStr, gender = "Male, Female") => {
		this.setState({loading: true});
    fetch(`http://localhost:3500/animals?breeds_like=${queryStr}${gender !== "Male, Female" ? `&gender=${gender}` : ""}`)
      .then((response) => response.json())
      .then((data) => this.setState({
          dogs: data,
					loading: false
        })
      );
  };

  render() {
    const { dogs, loading } = this.state;

    return (
      <div className={MainPageStyle.mainPage}>
        <Header />
        <div className="content">
          <Search searchDogs={this.searchDogs} />
          <div className="main__body">
            {loading ? (<Preloader />) : (<Dogs dogs={dogs} />)}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export { MainPage };
