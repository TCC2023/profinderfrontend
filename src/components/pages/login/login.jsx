import React from "react";

import Cabecalho from "../../header/header";
import Rodape from "../../footer/footer";

import "./login.css";

function Login() {
  return (
    <div>
      <Cabecalho />
      <div class="div-login">
        <div class="container">
          <div class="titulo-login">
            <h1>Login</h1>
            <br></br>
          </div>

          <form id="login" action="#" method="post">
            <div class="login-email">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div class="login-senha">
              <label for="senha">Senha:</label>
              <input type="password" id="senha" name="senha" required />
            </div>

            <div class="btn-login">
              <button type="submit">Login</button>
            </div>
            <a href="cadUsuario.html" class="button">
              Cadastrar-se
            </a>
          </form>
        </div>
      </div>

      <Rodape />
    </div>
  );
}


export default Login;