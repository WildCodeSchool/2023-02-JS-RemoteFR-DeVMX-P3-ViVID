import "./SearchBar.scss";
import searchImg from "../../assets/navBar/search.png";

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
