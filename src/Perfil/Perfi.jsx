import React, { useState } from 'react';
import "./perfil.css"
import PerfilImg from "./perfil.jpg"
import { UilImageEdit } from '@iconscout/react-unicons'
import { UilEstate } from '@iconscout/react-unicons'
import { UilBagAlt} from '@iconscout/react-unicons'
import { UilMapMarker } from '@iconscout/react-unicons'
import { UilHeartAlt } from '@iconscout/react-unicons'
import { UilEdit } from '@iconscout/react-unicons'
import { UilEllipsisV } from '@iconscout/react-unicons'

function Perfil() {
  // Establecer imágenes por defecto para portada y foto de perfil
  const defaultCoverPhoto = "https://img.freepik.com/foto-gratis/fondo-gris-liso-alta-calidad_53876-124606.jpg";
  const defaultProfilePhoto = "https://w7.pngwing.com/pngs/1000/665/png-transparent-computer-icons-profile-s-free-angle-sphere-profile-cliparts-free.png";

  const MAX_BIO_LENGTH = 15;
  // Utilizar useState con valores iniciales
  const [coverPhoto, setCoverPhoto] = useState(defaultCoverPhoto);
  const [profilePhoto, setProfilePhoto] = useState(defaultProfilePhoto);
  const [isEditing, setIsEditing] = useState(false);
  const [biography, setBiography] = useState({
    home: "",
    study: "",
    location: "",
    hobbies: "",
    bio:""
  });

  const [bioError, setBioError] = useState('');

  const handleCoverPhotoChange = (event) => {
    const newCoverPhoto = URL.createObjectURL(event.target.files[0]);
    setCoverPhoto(newCoverPhoto);
  }

  const handleProfilePhotoChange = (event) => {
    const newProfilePhoto = URL.createObjectURL(event.target.files[0]);
    setProfilePhoto(newProfilePhoto);
  }

  const handleEditClick = () => {
    setIsEditing(true);
  }

  const handleCancelEdit = () => {
    setIsEditing(false);
  }

  const handleUpdateBiography = () => {
    if (biography.bio.length > MAX_BIO_LENGTH) {
      setBioError(`No puede tener más de ${MAX_BIO_LENGTH} caracteres.`);
      return;
    }
  
    setIsEditing(false);
    // Aquí podrías enviar los datos de la biografía al servidor o actualizar el estado en la aplicación principal
  }
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBiography(prevBiography => ({
      ...prevBiography,
      [name]: value
    }));
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
            <div className="info-bio">
                <input
                  type="text"
                  id="bioEditInput"
                  name="bio"
                  value={biography.bio}
                  readOnly // Hacerlo no editable
                  placeholder="Add Bio" // Agregar placeholder
                />
              </div>
            {/* Seguidores y posts */}
            <div className="datos">
              <span>Post subidos: 2</span>
            </div>
          </div>
          {/* Biografía */}
            <div className="biography-container">
            <div className="biography">
            <div className="edit-icon" onClick={handleEditClick}>
                <UilEdit />
              </div>
            <h3>Biografía</h3>
              </div>
             {/* Campos de la biografía */}
            <div>
              <div>
                <UilBagAlt className="icon" />
                <label htmlFor="studyInput">Estudio | Trabajo:</label>
                <input
                  type="text"
                  id="studyInput"
                  name="study"
                  value={biography.study}
                  readOnly // Hacerlo no editable
                  placeholder="" // Agregar placeholder
                />
              </div>
              <div>
                <UilMapMarker className="icon" />
                <label htmlFor="locationInput">Ubicación:</label>
                <input
                  type="text"
                  id="locationInput"
                  name="location"
                  value={biography.location}
                  readOnly // Hacerlo no editable
                  placeholder="" // Agregar placeholder
                />
              </div>
              <div>
                <UilHeartAlt className="icon" />
                <label htmlFor="hobbiesInput">Hobbies:</label>
                <input
                  type="text"
                  id="hobbiesInput"
                  name="hobbies"
                  value={biography.hobbies}
                  readOnly // Hacerlo no editable
                  placeholder="" // Agregar placeholder
                />
              </div>
            </div>

            {/* Pantalla de edición */}
            {isEditing && (
              <div className="edit-modal">
                <div className="edit-form">
                <div>
                <label htmlFor="studyEditInput">Bio:</label>
                <input
                  type="text"
                  id="bioEditInput"
                  name="bio"
                  value={biography.bio}
                  onChange={handleInputChange}
                />
                {bioError && <p className="error-message">{bioError}</p>}
              </div>
                  <div>
                    <label htmlFor="studyEditInput"><UilBagAlt className="icon" />Estudio | Trabajo:</label>
                    <input
                      type="text"
                      id="studyEditInput"
                      name="study"
                      value={biography.study}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="locationEditInput"><UilMapMarker className="icon" />Ubicación</label>
                    <input
                      type="text"
                      id="locationEditInput"
                      name="location"
                      value={biography.location}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="hobbiesEditInput"><UilHeartAlt className="icon" />Hobbies</label>
                    <input
                      type="text"
                      id="hobbiesEditInput"
                      name="hobbies"
                      value={biography.hobbies}
                      onChange={handleInputChange}
                    />
                  </div>
                  {/* Botones de acción */}
                  <div>
                    <button onClick={handleUpdateBiography}>Actualizar</button>
                    <button onClick={handleCancelEdit}>Cancelar</button>
                  </div>
                </div>
              </div>
            )}
        </div>
        </div>
        </div>
    </main>
  );
}

export default Perfil;
