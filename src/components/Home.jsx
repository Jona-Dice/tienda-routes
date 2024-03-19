import React from "react";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";
//import { theme, invertTheme } from "../estilos-componentes/Button";
import { ButtonVM, invertTheme, theme } from "../estilos-componentes/theme";


const Home = () => {
    return (
      <ThemeProvider theme={theme}>
        <div className="features">
          <h2>Bienvenido</h2>
          <p>Somos una tienda onlina de celulares.</p>
          <ThemeProvider theme={invertTheme}>
          <Link to="/search-page"><ButtonVM>Ver más</ButtonVM></Link>
          </ThemeProvider>
        </div>
      </ThemeProvider>
    );
  };

  export default Home;