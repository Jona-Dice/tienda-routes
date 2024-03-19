import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../estilos-componentes/theme";
import { Buttonn } from "../estilos-componentes/Button";


const Celulares = ({name}) => {
    //const { name } = useParams(); // Corrige el nombre del parámetro aquí
    
  
    return (
     
        <div className="features">
        <h2>Info de celulares</h2>
        <p>Somos una tienda de celulare, online</p>
        <h1>{name}</h1>
        <Link to='details'><Buttonn>Ver detalles</Buttonn></Link>
        <Outlet /> 
      
      </div>
     
    )
  }
  
  export default Celulares;