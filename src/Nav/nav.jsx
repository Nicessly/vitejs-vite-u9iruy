import React from 'react';
import Perfil from "./perfil.jpg"
import './nav.css'

function Nav() {
  return (
    <nav>
      <div className="container">
        <h2 className="logo">ZYPHY</h2>
        <div className="create">
          <div className="profile-pic v">
            <img src={Perfil} alt="pic 1" />
          </div>
        </div>
      </div>
    </nav>

  );
}

export default Nav;