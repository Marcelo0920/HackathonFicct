import React from "react";

const PlaceCard = ({ name, distance, image }) => (
  <div className="place-card">
    <img src={image} alt={name} className="place-image" />
    <div className="place-info">
      <h3>{name}</h3>
      <p>{distance}</p>
    </div>
  </div>
);

export default PlaceCard;
