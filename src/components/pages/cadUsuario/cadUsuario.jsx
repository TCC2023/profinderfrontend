import React from "react";

import Cabecalho from "../../header/header";
import Rodape from "../../footer/footer";

import "./cadUsuario.css";

function cadUsuario() {

    const [cadastro, setCadastro] = useState([]);

    const postCadastro = async () => {
        txt_nome,
        txt_email,
        txt_senha,
        txt_tipo_usuario,
        txt_celular,
        txt_data_nasc
    };

  try {
    const response = await api.post("/cadastro", postCadastro);
    alert("Id do texto: " + response.data);
  } catch (error) {
    alert("Erro ao cadastrar usuário, tente novamente!" + "\n" + error);
  }


  return (

    <div>
        <Cabecalho />
      <div className="div-cadusu">
        <div className="container">
          <div className="titulo-cad">
            <h1>Cadastro de Usuário</h1>
            <br></br>
          </div>
          <form id="cadastro-form" action="#" method="post">
            <div className="form-nome">
              <label for="nome">Nome:</label>
              <input type="text" id="nome" name="nome" required />
            </div>

            <div className=" form-email">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-senha">
              <label for="senha">Senha:</label>
              <input type="password" id="senha" name="senha" required />
            </div>

            <div className="form-usu">
              <label for="tipo_usuario">Tipo de Usuário:</label>
              <select className="form-select" id="tipo_usuario" name="tipo-usuario">
                <option value="cliente">Cliente</option>
                <option value="prestador">Prestador de Serviços</option>
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
              />
            </div>

            <div className="form-data">
              <label for="data_nasc">Data de Nascimento</label>
              <input type="date" id="data" name="data" lang="pt-BR" required />
            </div>

            <div className="btn-cadusu">
              <button type="submit">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
      <Rodape />
    </div>
  );
}
export default cadUsuario;
