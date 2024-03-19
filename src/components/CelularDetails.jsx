import React from "react";
import { useParams } from "react-router-dom";
import { DetailsCont } from "../estilos-componentes/Button";
import dataCelu from "../data/dataCelu";


const CelularDetails = () => {
    const { name } = useParams();
    const detalles = dataCelu [name]; //Hacemos la referencia a la dataCelu
    return (
      <DetailsCont>
        
        <h1>Detalles del movil {name}</h1>
        <h4>Modelo: {detalles.modelo}</h4>
        <h3>Precio: {detalles.precio}</h3>
        <h3>Descripción: {detalles.desc}</h3>
      </DetailsCont>
    )
  };
export default CelularDetails;  