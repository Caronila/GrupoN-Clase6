import React from 'react'

const Registro = () => {
    return (
        <>
            <form>
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
        </>
    )
}

export default Registro
