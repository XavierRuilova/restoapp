import React from 'react'
import Card from './Card'

function CardList({list}) {
  return (
    <div className='cardList'>
        {list.map((cards, index)=>{
            return <Card key={index} image={cards.img} title={cards.name} description={cards.description}/>

        })}
    </div>
  )
}

export default CardList