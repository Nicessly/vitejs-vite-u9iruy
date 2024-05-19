import React, { useState } from 'react';
import { UilSignout } from '@iconscout/react-unicons'
import './nav.css'
import log from "./logi.png"

function Nav() {
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAcceptLogout = () => {
    // Aquí puedes agregar la lógica para cerrar la sesión
    console.log('Cerrando sesión...');
    handleCloseModal();
  };

  

  return (
    <nav>
      <div className="container">
        <h2 className="logo">ZYPHY</h2>
        <div className="create">
          <div className="profil" >
          <UilSignout onClick={handleLogout} />
          </div>
        </div>
      </div>
      {showModal && (
        <div className="modall show">
          <div className="modall-content">
          <img src={log} className='log'/>
          <h4 className='h4'>ComeBack Some!</h4>
            <p>Are you sure yoy want<br/> to logout?</p>
            <button onClick={handleCloseModal} className='negar'>Cancel</button>
            <button onClick={handleAcceptLogout} className='aceptar'>Yes, logout</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;