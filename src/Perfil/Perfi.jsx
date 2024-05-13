import React from 'react';
import "./perfil.css"

function Perfil() {
    return (
       <div className="middle">
        <div className="perfil-facebook">
          {/* Imagen de portada */}
          <div className="cover-photo">
            <img
              src="" // Coloca la URL de la imagen de portada aquí
              alt="Portada"
              className="portada"
            />
            {/* Foto de perfil */}
            <img
              src="https://via.placeholder.com/150" // Coloca la URL de la imagen de perfil aquí
              alt="Foto de perfil"
              className="foto-perfil"
            />
          </div>
          {/* Información del perfil */}
          <div className="info">
            <h2>Nombre de usuario</h2>
            {/* Seguidores y posts */}
            <div className="datos">
              <span>Seguidores: 1000</span>
              <span>/</span>
              <span>Post subidos: 500</span>
            </div>
          </div>
        </div>
        </div>
  );
}

export default Perfil;