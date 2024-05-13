import React from 'react';
import "./perfil.css"
import Perfill from "./perfil.jpg"
import FeedList from '../Card/CardList';

function Perfil() {
    return (
      <main className='mover'>
       <div className="middle">
        <div className="perfil-facebook">
          {/* Imagen de portada */}
          <div className="cover-photo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Nelumno_nucifera_open_flower_-_botanic_garden_adelaide.jpg/1200px-Nelumno_nucifera_open_flower_-_botanic_garden_adelaide.jpg" // Coloca la URL de la imagen de portada aquí
              alt="Portada"
              className="portada"
            />
            {/* Foto de perfil */}
            <img
              src={Perfill} // Coloca la URL de la imagen de perfil aquí
              alt="Foto de perfil"
              className="foto-perfil"
            />
          </div>
          {/* Información del perfil */}
          <div className="infot">
            <h2>Lana Rose</h2>
            {/* Seguidores y posts */}
            <div className="datos">
              <span>Seguidores: 100</span>
              <span>|</span>
              <span>Post subidos: 2</span>
            </div>
          </div>
        </div>
        </div>
        </main>
        
  );
}

export default Perfil;