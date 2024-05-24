import React, { useState, useEffect } from 'react';
import './chat.css';
import Lochat from "./well.png";

function chat() {
  const [currentScreen, setCurrentScreen] = useState('splash');

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('welcome');
    }, 6000); // Duración de la pantalla de splash más tiempo de animación

    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    if (currentScreen === 'welcome') {
      setCurrentScreen('rules');
    } else if (currentScreen === 'rules') {
      setCurrentScreen('final');
    }
  };

  return (
    <div className="app">
      {currentScreen === 'splash' && (
        <div className="splash-screen">
          <div className="splash-logo-container">
            <img src={Lochat} alt="Logo" className="splash-logo" />
            <h1 className="splash-text">YPHY</h1>
          </div>
        </div>
      )}

      {currentScreen === 'welcome' && (
        <div className="welcome-screen">
          <img src="path_to_logo" alt="Logo" className="logo" />
          <h1>Welcome</h1>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {currentScreen === 'rules' && (
        <div className="rules-screen">
          <h1>Rules</h1>
          <ul>
            <li>Rule 1</li>
            <li>Rule 2</li>
            <li>Rule 3</li>
          </ul>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {currentScreen === 'final' && (
        <div className="final-screen">
          <h1>Zyphy</h1>
          <input type="text" placeholder="Enter your text" />
          <button>Submit</button>
        </div>
      )}
    </div>
  );
}

export default chat;
