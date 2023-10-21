import React from 'react';

import './header.css';

import logo from '../../imagens/icons/logo.png';

function Cabecalho() {
  return (
    <header>
      <div class="nav-login">
        <nav class="navibar">
        <a href="index.html">
        <img class="logo" src={logo} />
        </a>
            <div class="centralizar">
                <ul>
                    <li><a href="index.html">Início</a></li>
                    <li><a href="#">Serviços</a></li>
                    <li><a href="#">Sobre Nós</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>
            <div class="direita">
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
