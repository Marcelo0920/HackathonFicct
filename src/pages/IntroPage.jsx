import React, { useState } from "react";
import "./styles/IntroPage.css";
import { Link } from "react-router-dom";

import backgroundImage from "../assets/introScreen.jfif";

const IntroPage = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = [
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "pt", name: "Português", flag: "🇧🇷" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  const [selectedLang, setSelectedLang] = useState(languages[0]);

  const handleLanguageSelect = (lang) => {
    setSelectedLang(lang);
    setIsLanguageOpen(false);
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="background-overlay">
        <div className="content">
          <div className="header">
            <button
              className="language-button"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              {selectedLang.flag}
            </button>

            {isLanguageOpen && (
              <div className="language-dropdown">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="language-option"
                    onClick={() => handleLanguageSelect(lang)}
                  >
                    {lang.flag} {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="main-content">
            <h1>Prepárate para</h1>
            <h2>Nuevas Aventuras</h2>
            <p>
              Si te gusta explorar y aprender entonces este es tu lugar. Acá
              podrás descubrir la belleza de Santa Cruz
            </p>
            <div className="dots-container">
              <span className="dot"></span>
              <span className="dot active"></span>
              <span className="dot"></span>
            </div>
            <button Link  className="explore-button">Explorar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
