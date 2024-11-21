import React from "react";

import swim from "../../assets/Swin.svg";
import gym from "../../assets/GYM.svg";
import health from "../../assets/Health.svg";
import tourism from "../../assets/tourism.svg";
import education from "../../assets/education.svg";
import bici from "../../assets/Bici.svg";

const NavIcons = () => {
  return (
    <div className="icon-container">
      <img src={swim} alt="icono" className="icon" />
      <img src={gym} alt="icono" className="icon" />
      <img src={health} alt="icono" className="icon" />
      <img src={tourism} alt="icono" className="icon" />
      <img src={education} alt="icono" className="icon" />
      <img src={bici} alt="icono" className="icon" />
    </div>
  );
};

export default NavIcons;
