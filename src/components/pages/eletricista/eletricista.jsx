import React from "react"; 
import { Link } from "react-router-dom";
import Cabecalho from "../../header/header";
import Rodape from "../../footer/footer";

import './eletricista.css';

function Eletricista(){
    return(
        <div>
            <Cabecalho />
            <section className="eletricista">
                <div className="title-eletri">
                    <h1>Eletricista</h1>
                </div>

                <div className="eletricista-info">
                    <p>Instalações e manutenções elétricas são serviços essenciais relacionados à infraestrutura elétrica de residências, edifícios comerciais e industriais. Eles abrangem uma série de atividades que visam garantir o funcionamento seguro e eficiente dos sistemas elétricos.</p>
                </div>
                
                <div className="listagem-servico">

                </div>

            </section>
            <Rodape />
        </div>
    );
}

export default Eletricista;