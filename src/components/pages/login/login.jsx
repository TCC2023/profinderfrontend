import React from "react";
import { Link } from "react-router-dom";

import Cabecalho from "../../header/header";
import Rodape from "../../footer/footer";

import "./login.css";

function Login() {
  return (
    <div>
      <Cabecalho />
      <div className="div-login">
        <div className="container">
          <div className="titulo-login">
            <h1>Login</h1>
          </div>

          <form id="login" action="#" method="post">
            <div className="login-email">
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="login-senha">
              <label htmlFor="senha">Senha:</label>
              <input type="password" id="senha" name="senha" required />
            </div>

            <div className="btn-login">
              <button type="submit">Login</button>
            </div>
            <div className="btn-login">
              <button type="">Cadastrar-se</button>
            </div>
          </form>
        </div>
      </div>
      <Rodape />
    </div>
  );
}


export default Login;