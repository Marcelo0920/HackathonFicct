import React from "react";
import "./styles/HomePage.css";

import search from "../assets/search.png";
import filter from "../assets/filter.svg";
import NavIcons from "../components/NavIcons/NavIcons";

const Home = () => {
  return (
    <div className="home-container">
      <div className="green-corner"></div>

      <div className="content">
        <h1 className="title">Descubre</h1>
        <p className="subtitle">Santa Cruz de la Sierra</p>

        <NavIcons />

        <div className="search-options">
          <p className="map-link">Explorar en el mapa</p>
          <div className="filter-option">
            <p>Filtrar</p>
            <img src={filter} alt="Filter icon" className="filter-icon" />
          </div>
        </div>

        <div className="search-results">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="result-card">
              <img src={search} alt={`Place ${num}`} className="place-image" />
              <div className="card-content">
                <h4 className="place-name">Ife Grand Resort</h4>
                <p className="place-distance">A 5 Km</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
