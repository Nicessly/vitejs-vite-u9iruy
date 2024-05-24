import React, { useState, useEffect } from 'react';
import './chat.css';
import Lochat from "./well.png";
import holachat from "./chat.png";
import { FaThumbsDown, FaExclamationTriangle, FaBan } from 'react-icons/fa';
import { UilArrowRight } from '@iconscout/react-unicons'
import rules1 from "./ruless1.png"
import rules2 from "./ruless2.png"

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
            <h1 className="splash-text">yphy</h1>
          </div>
        </div>
      )}

      {currentScreen === 'welcome' && (
        <div className="welcome-screen">
          <img src={holachat} alt="Logo" className="logo" />
          <h1>Welcome to ZyRoom</h1>
          <p>Únete a la conversación en<br/> ZyRoom donde todos tienen<br/> algo que compartir.</p>
          <button onClick={handleNext} className="next-button">
          Let's Chat<UilArrowRight className="uil"/>
          </button>
        </div>
      )}

      {currentScreen === 'rules' && (
        <div className="rules-screen">
        <img src={rules2} alt="Rules" className="rules-image" />
        <h1>Algunas Reglas</h1>
        <ul>
          <li>
            <span className="icon"><FaThumbsDown /></span> No utilizar lenguaje obsceno
          </li>
          <li>
            <span className="icon"><FaExclamationTriangle /></span> NO información personal.
          </li>
          <li>
            <span className="icon"><FaBan /></span> NO spam o publicidad no deseada.
          </li>
        </ul>
        <button onClick={handleNext} className='next-button'>Next<UilArrowRight className="uil"/></button>
      </div>
      )}

      {currentScreen === 'final' && (
        <div className="final-screen">
          <h1>Zyphy</h1>
          <input type="text" placeholder="Escribe tu usuario" />
          <button>Submit</button>
        </div>
      )}
    </div>
  );
}

export default chat;
