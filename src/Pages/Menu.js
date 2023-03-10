import React from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import Form from '../components/Form'
import Footer from '../components/Footer'
import { lnkMenu } from '../utils/btnNames'
import { Outlet } from 'react-router-dom'


function Menu() {

  return (
    <React.Fragment>
      <Header/>
      <section className={'sidebar-outlet'}>
      <SideBar lnkList={lnkMenu}/>
      <Outlet/>
      </section>

      <section className='form-footer'>
        <Form />
        <Footer />
      </section>
    </React.Fragment>

  
    

    )
}

export default Menu