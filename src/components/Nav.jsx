import React from 'react'
import Lnk from './Lnk'



function Nav({lnkList, setter, op1, op2, op3}) {
  return (
    <nav className='App-nav'>
      {lnkList.map((lnk, index)=>{
      return <Lnk key={index} lnk={lnk} setter={setter} op1={op1} op2={op2} op3={op3}/>
    })}

    </nav>
  )
}

export default Nav