import React from "react";
import './App.css';
import { Routes, Route, NavLink as NL } from "react-router-dom";
import {  Header  } from "./estilos-componentes/Button";
import Celulares from "./components/Celulares";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import CelularDetails from "./components/CelularDetails";
import NavLink from "./components/NavLink";

function App() {
  return(
    <div>
      <Header>
        <h1>Logo</h1>
        <nav id="menu"> 
          <ul>
          <li><NavLink to = "/">Home</NavLink></li>
          <li><NavLink to ="/search-Page">Página de Búsqueda</NavLink></li>
          </ul>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search-page" element={<SearchPage />}/>
        <Route path="/celulares/:name" element={<Celulares />}>
          <Route path="details" element={<CelularDetails />} />
        </Route>
        <Route path="*" element={ <h1>Page Not Found</h1>}/>
      </Routes>
      
    </div>
  )
}
export default App