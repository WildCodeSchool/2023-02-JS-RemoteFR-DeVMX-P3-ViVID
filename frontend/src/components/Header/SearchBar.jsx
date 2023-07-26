import React, { useState } from "react";
import axios from "axios";
import searchImg from "../../assets/navBar/search.png";
import "./SearchBar.scss";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/videos?search=${searchQuery}`)
      .then((response) => {
        // Une fois que la requête est réussie, vous pouvez mettre à jour les résultats de recherche.
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la recherche :", error);
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="searchBox">
      <input
        className="searchInput"
        type="text"
        placeholder="Rechercher ..."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button className="searchButton" type="button" onClick={handleSearch}>
        <img src={searchImg} alt="search" />
      </button>

      {/* Ici, vous pouvez afficher les résultats de recherche */}
      <ul>
        {searchResults.map((video) => (
          <li key={video.id}>{video.title}</li>
        ))}
      </ul>
    </div>
  );
}
