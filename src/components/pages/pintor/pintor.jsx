import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import Cabecalho from "../../header/header";
import Rodape from "../../footer/footer";

import './pintor.css';

function Pintor() {

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
      <section className="pintor">
        <div className="title-pintor">
          <h1>Pintor</h1>
        </div>

        <div className="pintor-info">
          <p>Realiza pintura em paredes internas e externas. Prepara as superfícies antes de pintá-las, como limpeza,
            aplicação de massa fina ou corrida e lixamento. Aplica papel de parede e gesso para acabamento</p>
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

export default Pintor;