import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Section from "../components/Section";
import { useState } from "react";
import { about, mision, vision, jumbo } from "../utils/info";
import { lnkMain } from "../utils/btnNames";

function Main() {

  const [data, setData] = useState(about);
  return (
    <React.Fragment>
      <Header />
      <Nav lnkList={lnkMain} setter={setData} op1={mision} op2={vision} op3={about}/>
      <Jumbotron title={jumbo.title} text={jumbo.description} imgSource={jumbo.src} />
      <Section src={data.src} title={data.title} description={data.description}/>;      
      <div className='form-footer'>
        <Form />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Main;
