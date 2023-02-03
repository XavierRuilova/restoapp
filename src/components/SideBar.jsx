import React from 'react'
import Lnk from './Lnk'

function SideBar({lnkList}) {
  return (
    <div style={{display:'flex'}}>
    <aside className='App-Sidebar'>
      <h4>Menu</h4>
      {lnkList.map((lnk, index)=>{
      return <Lnk key={index} lnk={lnk}/>
    })}
    </aside>
    </div>
  )
}

export default SideBar