import React from "react";

import { Link } from "react-router-dom";
import Cabecalho from "../../header/header";
import Rodape from "../../footer/footer";

import manuteletrica from "../../../imagens/manuteletrica.png";
import pedreiro from "../../../imagens/pedreiro.png";
import carpinteiro from "../../../imagens/carpinteiro.png";
import pintor from "../../../imagens/pintor.png";

import "./servicos.css";

function Servicos() {
  return (
    <div>
      <Cabecalho />
      <section className="servicos">
        <h2>Nossos Serviços:</h2>

        <div className="trabalho">
          <Link to="/eletricista" className="linkeletricista">
            <img className="imgservico" src={manuteletrica} />
          </Link>
          <h3>Eletricista.</h3>
        </div>

        <div className="trabalho">
          <Link to="/pedreiro" className="linkpedreiro">
            <img className="imgservico" src={pedreiro} />
          </Link>
          <h3>Pedreiro / Auxiliar de Pedreiro.</h3>
        </div>

        <div className="trabalho">
          <Link to="/carpinteiro" className="linkcarpinteiro">
            <img className="imgservico" src={carpinteiro} />
          </Link>
          <h3>Carpinteiro.</h3>
        </div>

        <div className="trabalho">
          <Link to="/pintor" className="linkpintor">
            <img className="imgservico" src={pintor} />
          </Link>
          <h3>Pintor.</h3>
        </div>
      </section>
      <Rodape />
    </div>
  );
}

export default Servicos;
