import React from 'react'
import './Registro.css'

const Registro = () => {
    return (
        <>   
        
        <main>
                <form>
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
            </main>
        </>
    )
}

export default Registro
