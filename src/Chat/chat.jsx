import React, { useState } from 'react';
import './chat.css';
import Lochat from "./chat.png";
import rules from "./rules.png"


function Chat() {
  const [screen, setScreen] = useState('welcome'); // Estado para controlar qué pantalla se muestra

  const handleStartChat = () => {
    setScreen('rules'); // Cambia a la pantalla de reglas cuando se hace clic en "Let's Start"
  };

  const handleGoBack = () => {
    setScreen('welcome'); // Cambia a la pantalla de bienvenida cuando se hace clic en la flecha de regreso
  };

  const handleGoForward = () => {
    setScreen('final'); // Cambia a la pantalla final cuando se hace clic en la flecha hacia adelante en la pantalla de reglas
  };


  // Renderiza la pantalla apropiada según el estado actual
  const renderScreen = () => {
    switch (screen) {
      case 'welcome':
        return (
          <div className="welcome-screen">
            <img src={Lochat} alt="Lochat logo" />
            <h1>Welcome to ZyRoom</h1>
            <p>Conectando a todos</p>
            <button onClick={handleStartChat}>Let's Start</button>
          </div>
        );
      case 'rules':
        return (
          <div className="rules-screen">
        <img src={rules}  className="rules-img"/>
            <h1>Rules</h1>
            <p>Some rules here...</p>
            <div>
              <button onClick={handleGoBack}>Back</button>
              <button onClick={handleGoForward}>Next</button>
            </div>
          </div>
        );
      case 'final':
        return (
          <div className="final-screen">
            <img src={Lochat} alt="Lochat logo" />
            <h1>Final Screen</h1>
            <p>Final content here...</p>
            <button onClick={handleGoBack}>Back</button>
          </div>
        );
      default:
        return null;
    }
  };

  // Renderiza los indicadores de navegación solo en la segunda y tercera pantalla
  const renderNavigationIndicators = () => {
    if (screen !== 'welcome') {
      return (
        <div className="navigation-indicators">
          <div className={`navigation-circle ${screen === 'rules' ? 'active' : ''}`}></div>
          <div className={`navigation-circle ${screen === 'final' ? 'active' : ''}`}></div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chat-container">
      {renderScreen()}
      {renderNavigationIndicators()}
    </div>
  );
}

export default Chat;
