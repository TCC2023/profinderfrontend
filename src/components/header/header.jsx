import React from 'react';
import {Link} from "react-router-dom";

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
                    <li><a href="#"><Link to="">Início</Link></a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Sobre Nós</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>
            <div className="direita">
                <ul>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="cadUsuario.html">Cadastrar-se</a></li>
                </ul>
            </div>
        </nav>
      </div>
    </header>
  );
}

export default Cabecalho;
