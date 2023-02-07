import React from 'react'

function Card({pic, title, description}) {
  return (
    <div className='card'>
        <img src={pic} alt='ilustracion'/>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default Card