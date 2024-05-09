
import React, { useEffect } from 'react';
import './buscar.css'; // Asegúrate de tener tu archivo de estilos CSS importado

function Messages() {

  useEffect(() => {
    const searchMessage = () => {
      const messages = document.querySelector('.messages');
      const message = messages.querySelectorAll('.message');
      const messageSearch = document.querySelector('#message-search');
      const val = messageSearch.value.toLowerCase();

      message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) !== -1) {
          chat.style.display = 'flex';
        } else {
          chat.style.display = 'none';
        }
      });
    };

    const messageSearch = document.querySelector('#message-search');
    if (messageSearch) {
      messageSearch.addEventListener('keyup', searchMessage);
    }

    return () => {
      if (messageSearch) {
        messageSearch.removeEventListener('keyup', searchMessage);
      }
    };
  }, []);

  return (
    <main>
        <div className="container">
        <div className="right">
          <div className="messages">
            <div className="heading">
              <h4>Messages</h4>
              <span><i className="uil uil-edit"></i></span>
            </div>

            <div className="search-bar">
              <span><i className="uil uil-search"></i></span>
              <input type="search" placeholder="Search Messages" id="message-search" />
            </div>

            <div className="category">
              <h6 className="active">Primary</h6>
              <h6>General</h6>
              <h6 className="message-requests">Requests(7)</h6>
            </div>

            <div className="message">
              <div className="profile-pic">
                <img src="images/profile-17.jpg" alt="Profile" />
                <div className="active"></div>
              </div>
              <div className="message-body">
                <h5>Kareena Joshua</h5>
                <p className="text-muted">Just woke up bruh..</p>
              </div>
            </div>

            {/* Repite este patrón para cada mensaje */}

          </div>
          </div>
        </div>
    </main>
  );
}

export default Messages;
