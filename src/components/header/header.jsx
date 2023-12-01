import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

/*import Home from "../../pages/home/home";
import Servicos from "../../pages/servicos/servicos";
import Sobre from "../../pages/sobre/sobre";
import Contato from "../../pages/contato/contato";
import Login from "../../pages/contato/contato";
import cadUsuario from "../../pages/cadUsuario/cadUsuario";*/

import './header.css';
import logo from '../../imagens/icons/logo.png';

function Cabecalho() {

  let navigate = useNavigate();
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState(false);

  function sair() {
    localStorage.clear();
    // window.location.reload(true);
    // setLogado(false);
    navigate('/');
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLogado(true);
      setUsuario(user.nome);
      // console.log(user);
    } 
  }, []);
  // console.log(logado);

  return (
    <header>
      <div className="nav-login">
        <nav className="navibar">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <div className="centralizar">
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/servicos">Serviços</Link></li>
              <li><a href="#informacoes">Informações</a></li>
            </ul>
          </div>
          <div className="direita">
            <ul>              
              <li> {logado ? <span className='menuSair' onClick={() => navigate('/perfil')}>{usuario}</span> : <Link to="/login">{logado ? 'Sair' : 'Login'}</Link>}</li>
              <li> {logado ? <span className='menuSair' onClick={() => sair()}>Sair</span> : <Link to="/cadUsuario">Cadastrar-se</Link>}</li>
              {/* <li> {logado ? <span className='menuSair' onClick={() => navigate('/perfil')}>{usuario}</span> : <Link to="/cadUsuario">Cadastrar-se</Link>}</li> */}
              {/* <li><Link to="/cadUsuario">Cadastrar-se</Link></li> */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Cabecalho;
