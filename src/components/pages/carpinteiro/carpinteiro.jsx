import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import Cabecalho from "../../header/header";
import Rodape from "../../footer/footer";

import './carpinteiro.css';

function Carpinteiro(){

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
    return(
        <div>
            <Cabecalho />
            <section className="carpinteiro">
                <div className="title-carpinteiro">
                    <h1>Carpinteiro</h1>
                </div>

                <div className="carpinteiro-info">
                    <p>A carpintaria é voltada para uma produção mais industrial, como a fabricação de peças de madeira para aconstrução civil.</p>
                </div>
                
                <div className="listagem-servico">
          <ul className="lista-prestador">
            {servicos.map((item) => (
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

export default Carpinteiro;