import React from 'react';
import { UilSignout } from '@iconscout/react-unicons'
import './nav.css'

function Nav() {
  return (
    <nav>
      <div className="container">
        <h2 className="logo">ZYPHY</h2>
        <div className="create">
          <div className="profil">
            <UilSignout />
          </div>
        </div>
      </div>
    </nav>

  );
}

export default Nav;