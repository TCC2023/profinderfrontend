import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import Cabecalho from "../../header/header";
import Rodape from "../../footer/footer";

import "./pedreiro.css";

function Pedreiro() {
  const [servicos, setServicos] = useState([]);

  const getPrestadores = async () => {
    try {
      const response = await api.get("/prestadores");
      const data = response.data.itens;

      setServicos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPrestadores();
  }, []);

  return (
    <div>
      <Cabecalho />
      <section className="pedreiro">
        <div className="title-pedreiro">
          <h1>Pedreiro</h1>
        </div>

        <div className="pedreiro-info">
          <p>
            O pedreiro é o profissional da obra que atua na construção das
            etapas de fundação, paredes e acabamento. Ele deve ter conhecimento
            sobre o emprego de materiais, sobre ferramentas e equipamentos,
            sobre as técnicas utilizadas na construção, entre outros..
          </p>
        </div>

        <div className="listagem-servico">
          <ul className="lista-prestador">
            {servicos.map((item) => (
              <div className="prestador-listado" key={item.usuarioId}>
                <span className="name"> {item.prestadorEmpresa}</span>
              </div>
            ))}
          </ul>
        </div>
      </section>
      <Rodape />
    </div>
  );
}

export default Pedreiro;
