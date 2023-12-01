import React from "react";
import { Link } from "react-router-dom"; 
import { Carousel } from "react-responsive-carousel"

import Cabecalho from "../../header/header";
import Rodape from "../../footer/footer";

import './home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import sobre from '../../../imagens/icons/sobre.png';
import contato from '../../../imagens/icons/contato.png';
import logo from '../../../imagens/icons/logo.png';

function Home() {
    return (
        <div>
            <Cabecalho />
            <section className="topo_pagina">
                <h1>Bem-vindo ao ProFinder!</h1>
                <p>Sua solução confiável para todos os serviços que você precisa.</p>

            </section>
            <section className="content">
                <h2>Contrate um serviço sem sair da sua casa!</h2>
                <div className="home-contratar">    
                    <img className="imgcontent" src={logo} />
                    <p>Somos uma plataforma simples que conecta clientes a prestadores de serviço qualificados. Na homepage, você encontrará uma pesquisa fácil para encontrar profissionais. Explore perfis e solicite orçamentos diretamente. Nosso foco é na eficiência e simplicidade, proporcionando uma experiência direta e sem complicações.</p>
                    <div className="btnservico">    
                    <Link to="/servicos" className="btn btn-primary">Buscar serviços.</Link>
                    </div>
                </div>

            </section>

            <section className="fim_pagina">
                <h2 id="informacoes">Informações:</h2>
                <div className="cardfim">
                    <img className="imgfim" src={sobre} />
                        <h3>Quem somos nós?</h3>
                            <p>Bem-vindo ao nosso projeto! Somos um grupo de estudantes universitários dedicados que compartilham uma paixão
                            pelo empreendedorismo e pela autonomia no mercado de trabalho. Em nossa jornada acadêmica, nos reunimos para
                            criar um site que representa uma resposta à crescente necessidade de se encontrar trabalho autônomo na
                            sociedade atual.</p>
                        <div className="btnfim">    
                            <Link to="/sobre" className="btn btn-primary">Sobre nós.</Link>
                        </div>
                </div>

                <div className="cardfim">
                    <img className="imgfim" src={contato} />
                        <h3>Entre em Contato</h3> 
                            <p>Estamos à disposição para responder às suas perguntas. Entre em contato conosco.</p>      
                        <div className="btnfim">
                            <Link to="/contato" className="btn btn-primary">Contate-nos.</Link>
                        </div>
                </div>
            </section>
            <Rodape />
        </div>
    );
}

/*function Slider() {
    return (
        <Carousel 
            className="slider"
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            inifiniteLoop={true}
            interval={5000}
        >
            <div>
                <img src={manuteletrica} alt="eletricista" />
            </div>
            <div>
                <img src={pedreiro} alt="pedreiro" />
            </div>
            <div>
                <img src={carpinteiro} alt="carpinteiro" />
            </div>
            <div>
                <img src={pintor} alt="pintor" />
            </div>
        </Carousel>
    )
}*/

export default Home;