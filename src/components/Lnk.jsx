import React from 'react'
import { Link } from 'react-router-dom'



function Lnk({lnk, setter, op1, op2, op3}) {
  if (lnk.action === 1){
    if(lnk.name == 'mision'){
      return (
        <>
            <Link to={lnk.url} name={lnk.name} className='btn' onClick={()=>setter(op1)}>{lnk.title}</Link>
        </>
      )
    }else if(lnk.name == 'vision'){
    return (
      <>
          <Link to={lnk.url} name={lnk.name} className='btn' onClick={()=>setter(op2)}>{lnk.title}</Link>
      </>
    )
    }else if(lnk.name == 'about'){
      return (
        <>
            <Link to={lnk.url} name={lnk.name} className='btn' onClick={()=>setter(op3)}>{lnk.title}</Link>
        </>
      )
      }
  }else{
    return (
      <>
          <Link to={lnk.url} name={lnk.name} className='btn'>{lnk.title}</Link>
      </>
    )
  }

}

export default Lnk