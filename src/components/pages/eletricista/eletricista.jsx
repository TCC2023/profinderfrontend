import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cabecalho from "../../header/header";
import Rodape from "../../footer/footer";
import api from "../../services/api";


import "./eletricista.css";

function Eletricista() {

    const [servicos, setServicos] = useState([]);

const getPrestadores = async () => {
    try{
        const response = await api.get("/prestadores");
        const data = response.data.itens;

        setServicos(data);
        
    }
    catch(error){
        console.log(error);
    }
};

useEffect(() => {
    getPrestadores();
}, []); 

  return (
    <div>
      <Cabecalho />
      <section className="eletricista">
        <div className="title-eletricista">
          <h1>Eletricista</h1>
        </div>

        <div className="eletricista-info">
          <p>
            Instalações e manutenções elétricas são serviços essenciais
            relacionados à infraestrutura elétrica de residências, edifícios
            comerciais e industriais. Eles abrangem uma série de atividades que
            visam garantir o funcionamento seguro e eficiente dos sistemas
            elétricos.
          </p>
        </div>

        <div className="listagem-servico">
          <ul className="lista-prestador">
            {servicos.map(item => (
                <div className="prestador-listado" key={item.usuarioId}>
                    <span className="Item">id: {item.usuarioId}</span>
                    <span className="name">id: {item.prestadorEmpresa}</span>
              
                </div>
              
            ))}
          </ul>
        </div>
      </section>
      <Rodape />
    </div>
  );
}

export default Eletricista;
