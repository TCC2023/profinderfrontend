import React from 'react';
import { Link } from "react-router-dom";

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
          <a href='index.html'>
            <img className="logo" src={logo} alt="logo" />
          </a>
          <div className="centralizar">
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/">Serviços</Link></li>
              <li><Link to="/">Agendamento</Link></li>
              <li><a href="#informacoes">Informações</a></li>
            </ul>
          </div>
          <div className="direita">
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/cadusuario">Cadastrar-se</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Cabecalho;
