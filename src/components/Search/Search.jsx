import React, { useState } from "react";
import "./Search.scss";

const Search = (props) => {
  const {
    //заглушка, функция пустышка если ничего не придет
    searchDogs = Function.prototype,
  } = props;

  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("Male, Female");

  const handelKey = (event) => {
    if (event.key === "Enter") {
      searchDogs(search, gender);
    }
  };

  const filterGender = (event) => {
    setGender(() => event.target.dataset.gender);
    searchDogs(search, event.target.dataset.gender);
  };

  return (
    <div className="search">
      <div className="search__body">
        <input
          placeholder="search breed"
          type="search"
          className="search__request"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handelKey}
        />
        <button
          className="search__btn"
          onClick={() => searchDogs(search, gender)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.4213 13.5999C11.2924 14.4774 9.87389 15 8.33329 15C4.65139 15 1.66663 12.0152 1.66663 8.33332C1.66663 4.65143 4.65139 1.66666 8.33329 1.66666C12.0152 1.66666 15 4.65143 15 8.33332C15 9.87392 14.4774 11.2925 13.5998 12.4214L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2361 18.4147 16.9107 18.0892L12.4213 13.5999ZM13.3333 8.33332C13.3333 11.0947 11.0947 13.3333 8.33329 13.3333C5.57187 13.3333 3.33329 11.0947 3.33329 8.33332C3.33329 5.5719 5.57187 3.33332 8.33329 3.33332C11.0947 3.33332 13.3333 5.5719 13.3333 8.33332Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      <div className="search__filter">
        <div className="search__gender">
          <label>
            <input
              name="gender"
              type="radio"
              className="search__radio"
              data-gender="Male, Female"
              onChange={filterGender}
              checked={gender === "Male, Female"}
            />
            <span className="search__radio-box">All</span>
          </label>

          <label>
            <input
              name="gender"
              type="radio"
              className="search__radio"
              data-gender="Male"
              onChange={filterGender}
              checked={gender === "Male"}
            />
            <span>Male</span>
          </label>
          <label>
            <input
              name="gender"
              type="radio"
              className="search__radio"
              data-gender="Female"
              onChange={filterGender}
              checked={gender === "Female"}
            />
            <span>Female</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export { Search };
