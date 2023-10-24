import React from "react";


import Cabecalho from "../../header/header";
import Rodape from "../../footer/footer";

import './home.css';

import manuteletrica from '../../../imagens/manuteletrica.png';
import pedreiro from '../../../imagens/pedreiro.png';
import carpinteiro from '../../../imagens/carpinteiro.png';
import pintor from '../../../imagens/pintor.png';
import sobre from '../../../imagens/icons/sobre.png';
import contato from '../../../imagens/icons/contato.png';

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
                    <img className="manuteletrica" src={manuteletrica} />       
                    <h3><strong>Eletricista.</strong></h3>
                    <p>Instalações e manutenções elétricas são serviços essenciais relacionados à infraestrutura elétrica de
                        residências, edifícios comerciais e industriais. Eles abrangem uma série de atividades que visam
                        garantir o funcionamento seguro e eficiente dos sistemas elétricos.</p>
                </div>
                <div className="pedreiro">
                    <img className="pedreiro" src={pedreiro} />   
                    <h3><strong>Pedreiro / Auxiliar de Pedreiro.</strong></h3>
                    <p>O pedreiro é o profissional da obra que atua na construção das etapas de fundação, paredes e acabamento.
                        Ele deve ter conhecimento sobre o emprego de materiais, sobre ferramentas e equipamentos, sobre as
                        técnicas utilizadas na construção, entre outros.</p>
                </div>
                <div className="carpinteiro">
                    <img className="carpinteiro" src={carpinteiro} />   
                    <h3><strong>Carpinteiro.</strong></h3>
                    <p>A carpintaria é voltada para uma produção mais industrial, como a fabricação de peças de madeira para aconstrução civil.</p>
                </div>
                <div className="pintor">
                    <img className="pintor" src={pintor} />   
                    <h3><strong>Pintor.</strong></h3>
                    <p>Realiza pintura em paredes internas e externas. Prepara as superfícies antes de pintá-las, como limpeza,
                        aplicação de massa fina ou corrida e lixamento. Aplica papel de parede e gesso para acabamento.</p>
                </div>
            </section>

            <section id="cards" className="container_rodape">
            <div className="carsaibamais">
                <div className="box_img-title">
                    <img className="saiba-img" src={sobre} />
                </div>
                <div className="title-saiba">
                    <h3><strong>Quem somos nós?</strong></h3>
                </div>
                <div className="p-saiba">
                    <p>Bem-vindo ao nosso projeto! Somos um grupo de estudantes universitários dedicados que compartilham uma paixão
                        pelo empreendedorismo e pela autonomia no mercado de trabalho. Em nossa jornada acadêmica, nos reunimos para
                        criar um site que representa uma resposta à crescente necessidade de se encontrar trabalho autônomo na
                        sociedade atual.
                    </p>
                </div>
                <div className="btn-saiba">    
                    <a href="../../pages/sobre/sobre" className="btn btn-primary">Saiba mais.</a>
                </div>
            </div>

            <div className="cardsaibamais">
                <div cclassName="box_img-title">
                    <div className="saiba-img">
                        <img className="conticon" src={contato} />
                    </div>
                </div>
                <div className="title-saiba">
                    <h3><strong>Entre em Contato</strong></h3>
                </div>    
                <div className="p-saiba">
                    <p>Estamos à disposição para responder às suas perguntas. Entre em contato conosco.</p>
                </div>
                <div className="btn-saiba">
                    <a href="../../pages/contato/contato" className="btn btn-primary">Contate-nos.</a>
                </div>
            </div>
            </section>
            <Rodape />
        </div>
    );
}

export default Home;