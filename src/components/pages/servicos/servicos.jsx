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
                    <img className="imgservico" src={manuteletrica} alt="eletricista" />       
                    <h3>Eletricista.</h3>
                    <p>Instalações e manutenções elétricas são serviços essenciais relacionados à infraestrutura elétrica de
                    residências, edifícios comerciais e industriais. Eles abrangem uma série de atividades que visam
                    garantir o funcionamento seguro e eficiente dos sistemas elétricos.</p>
                    <div className="btnservico">    
                      <Link to="/agendamento" className="btn btn-primary">Contratar Serviço!</Link>
                    </div>
                </div>

                <div className="trabalho">
                    <img className="imgservico" src={pedreiro} alt="pedreiro" />   
                    <h3>Pedreiro / Auxiliar de Pedreiro.</h3>
                    <p>O pedreiro é o profissional da obra que atua na construção das etapas de fundação, paredes e acabamento.
                    Ele deve ter conhecimento sobre o emprego de materiais, sobre ferramentas e equipamentos, sobre as
                    técnicas utilizadas na construção, entre outros.</p>
                    <div className="btnservico">    
                      <Link to="/agendamento" className="btn btn-primary">Contratar Serviço!</Link>
                    </div>
                </div>

                <div className="trabalho">
                    <img className="imgservico" src={carpinteiro} alt="carpinteiro" />   
                    <h3>Carpinteiro.</h3>
                    <p>A carpintaria é voltada para uma produção mais industrial, como a fabricação de peças de madeira para aconstrução civil.</p>
                    <div className="btnservico">    
                      <Link to="/agendamento" className="btn btn-primary">Contratar Serviço!</Link>
                    </div>
                </div>
                
                <div className="trabalho">
                    <img className="imgservico" src={pintor} alt="pintor" />   
                    <h3>Pintor.</h3>
                    <p>Realiza pintura em paredes internas e externas. Prepara as superfícies antes de pintá-las, como limpeza,
                    aplicação de massa fina ou corrida e lixamento. Aplica papel de parede e gesso para acabamento.</p>
                    <div className="btnservico">    
                      <Link to="/agendamento" className="btn btn-primary">Contratar Serviço!</Link>
                    </div>
                </div>
            </section>
      <Rodape />
    </div>
  );
}

export default Servicos;
