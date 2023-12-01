import React, { useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import Cabecalho from "../../header/header";
import Rodape from "../../footer/footer";

import "./login.css";

function Login() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try { 

      const dados = {
        usuarioEmail: email, 
        usuarioSenha: senha
      }

      const response = await api.post("/login", dados);
      console.log(response);

      // Lógica para tratamento de sucesso
      console.log("Login bem-sucedido", response.data); 
      

      // Redirecionar para a página desejada após o login
    } catch (error) {
      // Lógica para tratamento de erro
      console.log(error);
      console.error("Erro ao fazer login", error.response.data);
      alert("Erro ao fazer login, tente novamente!");
    }
  };

  return (
    <div>
      <Cabecalho />
      <div className="div-login">
        <div className="container">
          <div className="titulo-login">
            <h1>Login</h1>
          </div>

          <form id="login" onSubmit={(e) => handleSubmit(e)}>
            <div className="login-email">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(v) => setEmail(v.target.value)}
                required
              />
            </div>

            <div className="login-senha">
              <label htmlFor="senha">Senha:</label>
              <input
                type="password"
                id="senha"
                name="senha"
                value={senha}
                onChange={(v) => setSenha(v.target.value)}
                required
              />
            </div>


            <div className="btn-login">
              <button type="submit">Login</button>
            </div>
            <div className="btn-cadastro">
              <Link to="/cadusuario">Cadastrar-se</Link>
            </div>
          </form>
        </div>
      </div>
      <Rodape />
    </div>
  );
}


export default Login;