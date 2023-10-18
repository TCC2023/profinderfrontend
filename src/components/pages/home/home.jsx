import React from "react";

import Cabecalho from "../../header/header";
import Rodape from "../../footer/footer";

import './home.css';

import manuteletrica from '../../../imagens/manuteletrica.png';
import pedreiro from '../../../imagens/pedreiro.png';
import carpinteiro from '../../../imagens/carpinteiro.png';
import pintor from '../../../imagens/pintor.png';
/*import sobre from '../../imagens/icons/quemsomos.png';
import contato from '../../imagens/icons/contato.png';*/

function Home() {
    return (
        <div>
            <Cabecalho />
            <section className="topo">
                <h1>Bem-vindo ao ProFinder!</h1>
                <p>Sua solução confiável para todos os serviços que você precisa.</p>
                <a href="#" className="btn">Saiba mais</a>
            </section>

            <section className="servicos">
                <h2>Nossos Serviços:</h2>

                <div className="manuteletrica">
                    <img class="manuteletrica" src={manuteletrica} />       
                    <h3>Eletricista.</h3>
                    <p>Instalações e manutenções elétricas são serviços essenciais relacionados à infraestrutura elétrica de
                        residências, edifícios comerciais e industriais. Eles abrangem uma série de atividades que visam
                        garantir o funcionamento seguro e eficiente dos sistemas elétricos.</p>
                </div>

                <div className="pedreiro">
                    <img class="pedreiro" src={pedreiro} />   
                    <h3>Pedreiro / Auxiliar de Pedreiro.</h3>
                    <p>O pedreiro é o profissional da obra que atua na construção das etapas de fundação, paredes e acabamento.
                        Ele deve ter conhecimento sobre o emprego de materiais, sobre ferramentas e equipamentos, sobre as
                        técnicas utilizadas na construção, entre outros.</p>
                </div>

                <div className="carpinteiro">
                    <img class="carpinteiro" src={carpinteiro} />   
                    <h3>Carpinteiro e afins.</h3>
                    <p>A carpintaria é voltada para uma produção mais industrial, como a fabricação de peças de madeira para a
                        construção civil.</p>
                </div>
                
                <div className="pintor">
                    <img class="pintor" src={pintor} />   
                    <h3>Pintor.</h3>
                    <p>Realiza pintura em paredes internas e externas. Prepara as superfícies antes de pintá-las, como limpeza,
                        aplicação de massa fina ou corrida e lixamento. Aplica papel de parede e gesso para acabamento.</p>
                </div>
            </section>
            

            <Rodape />
        </div>
    );
}

export default Home;