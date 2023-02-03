import React from 'react'

function Section({src, title, description}) {
  return (
    <section className='App-section'> 
        <div>
        <img src={src} alt="" />
        </div>
        <div >
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

     </section>
  )
}

export default Section