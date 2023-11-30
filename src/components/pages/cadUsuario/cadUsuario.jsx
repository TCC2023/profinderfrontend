import React, { useState } from "react";
import api from '../../services/api'

import Cabecalho from "../../header/header";
import Rodape from "../../footer/footer";

import "./cadUsuario.css";

function useCadUsuario() {

  const [cad, setCadastro] = useState({

  });
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [tipo, setTipo] = useState('')
  const [celular, setCelular] = useState('')
  const [data, setData] = useState('')


  const handleSubmit = async (e) => {
    try {
      if (tipo == 0) {
        alert("Selecione uma das opções");
      } else {
        const cadastro = {
          "usuarioNome": nome,
          "usuarioEmail": email,
          "usuarioSenha": senha,
          "usuarioTelefone": celular,
          "usuarioDataNasc": data,
          "usuarioTipoConta": tipo
        }
        const response = await api.post('/usuarios', cadastro);
        alert("id do texto: " + response.data);
        console.log(response);

      }

    } catch (error) {
      console.log(error);
      alert('Erro ao cadastrar usuario, tente novamente!' + "\n" + error);
    }
  }

  return (

    <div>
      <Cabecalho />
      <div className="div-cadusu">
        <div className="container">
          <div className="titulo-cad">
            <h1>Cadastro</h1>
            <br></br>
          </div>
          <form id="cadastro-form" action="#" method="post">
            <div className="form-nome">
              <label for="nome">Nome:</label>
              <input type="text" id="nome" name="nome" required onChange={(e) => { setNome(e.target.value); console.log(nome); }} />
            </div>

            <div className=" form-email">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required onChange={(e) => { setEmail(e.target.value); }} />
            </div>

            <div className="form-senha">
              <label for="senha">Senha:</label>
              <input type="password" id="senha" name="senha" required onChange={(e) => { setSenha(e.target.value); }} />
            </div>

            <div className="form-usu">
              <label htmlFor="tipo_usuario">Tipo de Usuário:</label>
              <select
                className="form-select"
                id="tipo_usuario"
                name="tipo_usuario"
                onChange={(e) => { setTipo(e.target.value); }}
              >
                <option value="0">Selecione uma opção</option>
                <option value="Cliente">Cliente</option>
                <option value="Prestador">Prestador de Serviços</option>
              </select>
            </div>

            <div className="form-cel">
              <label for="celular">Celular</label>
              <input
                type="number"
                id="celular"
                name="celular"
                maxlength="11"
                className="form-control"
                placeholder="Celular"
                required="required"
                pattern="^[0-9]{11}$"
                onChange={(e) => { setCelular(e.target.value); }} />
            </div>

            <div className="form-data">
              <label for="data_nasc">Data de Nascimento</label>
              <input type="date" id="data" name="data" lang="pt-BR" required onChange={(e) => { setData(e.target.value); }} />
            </div>

            <div className="btn-cadusu">
              <button type="button" onClick={() => handleSubmit()}>Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
      <Rodape />
    </div>
  );
}
export default useCadUsuario;
