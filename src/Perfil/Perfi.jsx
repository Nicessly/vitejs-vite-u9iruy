import React, { useState } from 'react';
import "./perfil.css"
import PerfilImg from "./perfil.jpg"
import { UilImageEdit } from '@iconscout/react-unicons'

function Perfil() {
  // Establecer imágenes por defecto para portada y foto de perfil
  const defaultCoverPhoto = "https://img.freepik.com/foto-gratis/fondo-gris-liso-alta-calidad_53876-124606.jpg";
  const defaultProfilePhoto = "https://w7.pngwing.com/pngs/1000/665/png-transparent-computer-icons-profile-s-free-angle-sphere-profile-cliparts-free.png";

  // Utilizar useState con valores iniciales
  const [coverPhoto, setCoverPhoto] = useState(defaultCoverPhoto);
  const [profilePhoto, setProfilePhoto] = useState(defaultProfilePhoto);

  const handleCoverPhotoChange = (event) => {
    const newCoverPhoto = URL.createObjectURL(event.target.files[0]);
    setCoverPhoto(newCoverPhoto);
  }

  const handleProfilePhotoChange = (event) => {
    const newProfilePhoto = URL.createObjectURL(event.target.files[0]);
    setProfilePhoto(newProfilePhoto);
  }

  return (
    <main className='mover'>
      <div className="middle">
        <div className="perfil-facebook">
          {/* Imagen de portada */}
          <div className="cover-photo">
            <img
              src={coverPhoto}
              alt="Portada"
              className="portada"
            />
            <label htmlFor="coverPhotoInput">
              <UilImageEdit className="porta" />
              <input
                id="coverPhotoInput"
                type="file"
                accept="image/*"
                onChange={handleCoverPhotoChange}
                style={{ display: 'none' }}
              />
            </label>
          </div>
          {/* Foto de perfil */}
          <div className="profile-photo">
            <img
              src={profilePhoto}
              alt="Foto de perfil"
              className="foto-perfil"
            />
            <label htmlFor="profilePhotoInput">
              <UilImageEdit className="perfi" />
              <input
                id="profilePhotoInput"
                type="file"
                accept="image/*"
                onChange={handleProfilePhotoChange}
                style={{ display: 'none' }}
              />
            </label>
          </div>
          {/* Información del perfil */}
          <div className="infot">
            <h2>Lana Rose</h2>
            {/* Seguidores y posts */}
            <div className="datos">
              <span>Post subidos: 2</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Perfil;
