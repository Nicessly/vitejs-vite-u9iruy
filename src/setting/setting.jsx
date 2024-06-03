import React, { useState } from 'react';
import { UilEye, UilEyeSlash } from '@iconscout/react-unicons';
import './setting.css';

const Setting = () => {
    const [password, setPassword] = useState('defaultPassword'); // Contraseña por defecto
    const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar la contraseña
    const [showModal, setShowModal] = useState(false); // Estado para mostrar/ocultar el modal
    const userEmail = 'usuario@example.com';

    const handleDeleteAccount = () => {
        // Lógica para borrar la cuenta
        console.log('Cuenta borrada');
        // Cierra el modal después de borrar la cuenta
        setShowModal(false);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="settings-container">
            <h2>Configuración de cuenta</h2>
            <div className="settings-section">
                <label>Correo</label>
                <input
                    type='email'
                    value={userEmail}
                    readOnly // Esto hace que el input sea de solo lectura
                />
            </div>
            <div className='linea'></div>
            <div className="settings-section">
                <label>Contraseña</label>
                <div className="password-container">
                <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    readOnly 
                    className="password-input"
                />
                <button type="button" onClick={toggleShowPassword} className="show-password-button">
                    {showPassword ? <UilEyeSlash /> : <UilEye />}
                </button>
            </div>
            </div>
            <div className='linea'></div>
            <div className="delete-section">
                <label>Borrar Cuenta</label>
                <p>Si borras tu cuenta, perderás todos tus datos y no podrás recuperarlos.</p>
                <button onClick={openModal} className="delete-button">Borrar Cuenta</button>
            </div>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>¿Estás seguro de que deseas borrar tu cuenta?</h3>
                        <p>Esta acción no se puede deshacer.</p>
                        <div>
                            <button onClick={handleDeleteAccount} className="modal-button">Borrar</button>
                            <button onClick={closeModal} className="modal-button">Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Setting;
