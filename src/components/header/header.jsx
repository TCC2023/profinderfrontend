import React from 'react';
import {Link} from "react-router-dom";

/*import Home from "../../pages/home/home";
import Servicos from "../../pages/servicos/servicos";
import Sobre from "../../pages/sobre/sobre";
import Contato from "../../pages/contato/contato";
import Login from "../../pages/contato/contato";
import cadUsuario from "../../pages/cadUsuario/cadUsuario";*/

import './header.css';
import logo from '../../imagens/icons/logo.png';

function Cabecalho() {
  return (
    <header>
      <div className="nav-login">
        <nav className="navibar">
        <a href="index.html">
        <img className="logo" src={logo} />
        </a>
            <div className="centralizar">
                <ul>
                    <li><a href="#"><Link to="/">Início</Link></a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Sobre Nós</a></li>
                    <li><a href="#"><Link to="/contato">Contato</Link></a></li>
                </ul>
            </div>
            <div className="direita">
                <ul>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="cadUsuario.html"><Link to="/cadusuario">Cadastrar-se</Link></a></li>
                </ul>
            </div>
      <div class="nav-login">
        <nav class="navibar">
        <a href="home.jsx">
          <img class="logo" src={logo} />
        </a>
        <div class="centralizar">
          <ul>
            <li><a href="home.jsx">Início</a></li>
            <li><a href="servicos.jsx">Serviços</a></li>
            <li><a href="sobre.jsx">Sobre Nós</a></li>
            <li><a href="contato.jsx">Contato</a></li>
          </ul>
        </div>
        <div class="direita">
          <ul>
            <li><a href="login.jsx">Login</a></li>
            <li><a href="cadUsuario.jsx">Cadastrar-se</a></li>
          </ul>
        </div>
        </nav>
      </div>
    </header>
  );
}

export default Cabecalho;
