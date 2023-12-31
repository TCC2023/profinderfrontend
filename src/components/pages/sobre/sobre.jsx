import React from "react";

import Cabecalho from "../../header/header";
import Rodape from "../../footer/footer";

import "./sobre.css";
import Icone from "../../../imagens/icons/logo.png";

function Sobre() {
  return (
    <div className="allquem">
      <Cabecalho />
      <section className="sobrenos">
        <div className="contquem">
          <div className="quemtitle">
            <h2>Sobre nós:</h2>
          </div>
          <div className="quemsomos">
            <p>
              No meio do emocionante desafio de concluir nosso curso de
              Desenvolvimento de Sistemas, nós, um grupo de três alunos
              dedicados, juntamos nossos conhecimentos e paixão pela tecnologia
              para criar algo inovador e útil para a comunidade.<br></br>
              <br></br>
              Juntos, formamos uma equipe diversificada, onde nossas habilidades
              e ideias se complementam, impulsionando-nos na criação do nosso
              Trabalho de Conclusão de Curso (TCC). <br></br>
              <br></br>A essência do nosso projeto é um site que serve como
              intermediário para serviços. Inspirados pela crescente necessidade
              de conectar profissionais qualificados a clientes em busca de
              soluções confiáveis, nossa plataforma tem como objetivo
              simplificar essa busca. <br></br>
              <br></br>
              Nosso site será um ambiente digital intuitivo e seguro onde os
              usuários poderão encontrar uma variedade de serviços, desde
              pequenos reparos domésticos até assistência técnica especializada.
              <br></br>
              <br></br>
              Ao desenvolver essa parte do site, pretendemos transmitir não
              apenas nossas habilidades técnicas, mas também a paixão que nos
              impulsionou ao longo do processo criativo. Queremos que os
              visitantes do nosso site sintam a energia e o comprometimento que
              colocamos em cada linha de código, em cada design cuidadosamente
              elaborado e em cada detalhe da experiência do usuário.
              <br></br>
              <br></br>
              Estamos ansiosos para compartilhar nosso projeto com o mundo e
              esperamos que ele sirva não apenas como uma plataforma funcional,
              mas também como um testemunho do poder da colaboração e da
              inovação.
              <br></br>
              <br></br>
              Convidamos você para explorar nosso site, descobrir mais sobre
              nossa equipe e se juntar a nós nessa empolgante jornada. Estamos
              construindo não apenas um site, mas também uma comunidade baseada
              em confiança e oportunidades.
              <br></br>
              <br></br>
              <div className = "icone">
                <img className="icone" src={Icone} />
              </div>
            </p>
          </div>
        </div>
      </section>
      <Rodape />
    </div>
  );
}
export default Sobre;
