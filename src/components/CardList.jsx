import React from 'react'
import Card from './Card'

function CardList({list}) {
  return (
    <div className='cardList'>
        {list.map((cards, index)=>{
            return <Card key={index} pic={cards.img} title={cards.name} description={cards.description}/>

        })}
    </div>
  )
}

export default CardList