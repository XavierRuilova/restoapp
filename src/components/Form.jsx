import React from 'react'


function Form() {
  return (
    <div className='formContainer'>
      <form>
        <h3>Reservas</h3>
        <label>Nombre: </label>
        <input type="text" /><br/>
        <label>Apellido: </label>
        <input type="text" /><br/>
        <label>Personas Max 6: </label>
        <input type="number" id="people" name="people" min="1" max="6"/><br/>
        <label>Correo: </label>
        <input type="mail" /><br/>
        <button className='btn'>Enviar</button>
        
      </form>
    </div>
  )
}

export default Form