
import './buscar.css'; 
import React, { useState } from 'react';
import { UilSearch } from '@iconscout/react-unicons';
import { UilUsersAlt } from '@iconscout/react-unicons'
import uno from "./1.jpg";
import dos from "./3.jpg";
import tres from "./4.avif";

const personas = [
  { id: 1, nombre: 'Juana', imagen: uno },
  { id: 2, nombre: 'María', imagen: dos },
  { id: 3, nombre: 'Pedro', imagen: tres },
  { id: 4, nombre: 'Juana', imagen: uno },
  { id: 5, nombre: 'María', imagen: dos },
  { id: 6, nombre: 'Pedro', imagen: tres },
  { id: 7, nombre: 'Juana', imagen: uno },
  { id: 8, nombre: 'María', imagen: dos },
  { id: 9, nombre: 'Pedro', imagen: tres },
  // Agrega más personas según sea necesario
];

const BuscarPersonas = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    // Filtrar personas según el valor de búsqueda
    const filteredPersonas = personas.filter(persona =>
      persona.nombre.toLowerCase().includes(inputValue.toLowerCase())
    );

    setResults(filteredPersonas);
  };

  return (
    <main>
        <div className="messages">
          <div className="heading">
            <h4>Buscar Zy</h4>
            <span><i><UilUsersAlt/></i></span>
          </div>
          <div className="search-bar">
            <input
              type="search"
              placeholder="Buscar..."
              value={query}
              onChange={handleInputChange}
              className="search-input"
            />
          </div>
          <hr></hr>
          <h5 className='resultado'>Resultados</h5>
          <div className="results">
            {results.map(persona => (
              <div key={persona.id} className="message">
                <div className="profile-pic">
                  <img src={persona.imagen} alt={persona.nombre} />
                </div>
                <p className='message-body h5'>{persona.nombre}</p>
              </div>
            ))}
          </div>
      </div>
    </main>
  );
};

export default BuscarPersonas;
