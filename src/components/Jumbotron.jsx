import React from 'react'

function Jumbotron({title, text, imgSource}) {
  return (
    <section className='App-jumbotron'>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div>
        <img src={imgSource} alt=""/>
      </div>
    </section>
  )
}

export default Jumbotron