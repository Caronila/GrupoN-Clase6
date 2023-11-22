import React from 'react'
import { useState } from 'react';
import './Registro.css'

const Registro = () => {
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        let nombre = e.target.nombre.value
        setMensaje(`${nombre}, tu formulario se envió correctamente`)
        setEstiloMensaje('message-container')

    }
    return (
        <>

            <main>
                <form onSubmit={handleSubmit}>
                    <h1>Completa el registro</h1>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required />
                    <label htmlFor="apellido">Apellido:</label>
                    <input type="text" id="apellido" name="apellido" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="telefono">Teléfono:</label>
                    <input type="tel" id="telefono" name="telefono" required />
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required />
                    <label htmlFor="confirm-password">Confirmar Contraseña:</label>
                    <input type="password" id="confirm-password" name="confirm-password" required />
                    <button type="submit">Registrar</button>
                </form>
                <div className='parrafo'>
                    <p>{mensaje}</p>
                </div>

            </main>

        </>
    )
}

export default Registro
