import React from "react";
import { Link } from "react-router-dom";

import Cabecalho from "../../header/header";
import Rodape from "../../footer/footer";

import "./agendamento.css";

function Agendamento() {
  return (
    <div>
      <Cabecalho />
      <div className="agendamento">
        <div className="container-agendamento">
          <div className="titulo-agendamento">
            <h1>Faça seu agendamento:</h1>
          </div>

          <form id="form-agendamento" action="#" method="post">
            <div className="form-data-prevista">
              <label for="data_nasc">Data Prevista:</label>
              <input type="date" id="data" name="data" lang="pt-BR" required />
            </div>

            <div className="form-data-final">
              <label for="data_nasc">Data Final:</label>
              <input type="date" id="data" name="data" lang="pt-BR" required />
            </div>

            <div className="btn-agendamento">
              <button type="submit">Agendar Serviço.</button>
            </div>
          </form>
        </div>
      </div>
      <Rodape />
    </div>
  );
}
export default Agendamento;