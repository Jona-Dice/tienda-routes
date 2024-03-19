import React from "react";
import { Link } from "react-router-dom";
import { BtnLInk, CenterInfo, StyledLink } from "../estilos-componentes/Button";




const SearchPage = () => {
    const celulares = [
      'Samsung',
      'LG',
      'Xioami',
      'iPhone'
    ];
  
    return (
      <div className="features">
        <h2>Página de busqueda</h2>
       {celulares.map(celular => (
        <ul key={celular}>
          <li ><StyledLink to={`/celulares/${celular}`} ><BtnLInk>{celular}</BtnLInk></StyledLink></li>
        </ul>
       ))}
      </div>
    )
  };

  export default SearchPage;