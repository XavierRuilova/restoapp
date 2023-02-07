import React from 'react'
import {useState} from 'react';
import { db } from '../firebase';
import { collection, addDoc, onSnapshot} from 'firebase/firestore';



function Form() {
  const [name, setName]=useState();

   function saveName(info){
     setName(info.target.value)
   }

  const [number, setNumber]=useState();

   function saveNumber(info){
    setNumber(info.target.value)
     }

  const [phone, setPhone]=useState();

    function savePhone(info){
    setPhone(info.target.value)
      }

  const [mail, setMail]=useState();

    function saveMail(info){
      setMail(info.target.value)
      }

      let newReserva = {nombre:name, personas:number, telefono:phone, correo:mail}
      const getReservas = async () =>{
        onSnapshot(collection(db, 'reservas'), (snapshot)=>{
          snapshot.forEach(doc => console.log(doc.data()))
        } )
      }


    const submit = async () =>{
      console.log('nueva reserva:', newReserva )

     await addDoc(collection(db, 'reservas'), newReserva)
    setName('')
    setNumber('')
    setPhone('')
    setMail('')
    getReservas()
  }

  return (
    <div className='formContainer'>
      <form>
        <h3>Reservas</h3>
        <label>Nombre: </label>
        <input type="text" id="name" name="name" value={name} onChange={saveName}/><br/>
        <label>Personas Max 6: </label>
        <input type="number" id="number" name="number" value={number} onChange={saveNumber} min="1" max="6"/><br/>
        <label>Teléfono: </label>
        <input type="number" id="phone" name="phone" value={phone} onChange={savePhone}/><br/>
        <label>Correo: </label>
        <input type="mail" id="mail" name="mail" value={mail} onChange={saveMail}/><br/>
        <button type='button' className='btn' onClick={submit}>Enviar</button>
        
      </form>
    </div>
  )
}

export default Form

