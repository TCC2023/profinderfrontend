import React from 'react';

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
