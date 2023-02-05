import "./App.css";
import Main from "./Pages/Main";
import Menu from "./Pages/Menu";
import NoMatch from "./Pages/NoMatch";
import React from "react";
import { Routes, Route } from "react-router-dom";
import CardList from './components/CardList'
import {menuPrincipal, menuEntradas, menuPostres} from './utils/menuContent'

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Main/>} />
          <Route path='/menu' element={<Menu/>} >
            <Route path='entradas' element={<CardList list={menuEntradas}/>} />
            <Route path='principal' element={<CardList list={menuPrincipal}/>} />
            <Route path='postres' element={<CardList list={menuPostres}/>} />
          </Route>
        <Route path="*" element={<NoMatch/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
