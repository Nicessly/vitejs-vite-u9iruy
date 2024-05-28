import React from 'react';
import './ChatScreen.css';
import { UilTelegramAlt } from '@iconscout/react-unicons'

function ChatScreen() {
  return (
    <div className="chat">
    <div className="chat-container">
      <div className="chat-screen">
        <div className="chat-header">
          <h1>ZyRoom</h1>
          <button className="exit-button">Exit</button>
        </div>
        <div className="chat-messages">
          {/* Aquí van los mensajes del chat */}
        </div>
        <div className="chat-input-container">
          <input type="text" placeholder="Type your message..." className="chat-input" />
          <button className="send-button"><UilTelegramAlt className="icon"/></button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ChatScreen;
