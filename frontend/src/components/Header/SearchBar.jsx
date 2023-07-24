import searchImg from "../../assets/navBar/search.png";

import "./SearchBar.scss";

export default function SearchBar() {
  return (
    <div className="searchBox">
      <input className="searchInput" type="text" placeholder="Rechercher ..." />
      <button className="searchButton" type="button">
        <img src={searchImg} alt="search" />
      </button>
    </div>
  );
}
