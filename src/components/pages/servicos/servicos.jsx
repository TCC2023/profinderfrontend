import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from "../../services/api";

import Cabecalho from "../../header/header";
import Rodape from "../../footer/footer";

import manuteletrica from "../../../imagens/manuteletrica.png";
import pedreiro from "../../../imagens/pedreiro.png";
import carpinteiro from "../../../imagens/carpinteiro.png";
import pintor from "../../../imagens/pintor.png";

import "./servicos.css";

import CardServicos from './cardServicos';

function Servicos() {
  let navigate = useNavigate();

  const [logado, setLogado] = useState(false);
  const [servicos, setServicos] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLogado(true);
    }
    listaServicos();
  }, []);

  function direcionamento(rota, id) {
    if (logado) {
      navigate('/servtipos', {state: id});
    } else {
      alert('Para acessar o prestador é necessário fazer o login!');
      navigate('/login');
    }
  }

  const listaServicos = async () => {
    try {
      const response = await api.get("/tiposervico");
      setServicos(response.data.itens);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(servicos);
  return (
    <div>
      <Cabecalho />
      <section className="servicos">
        <h2>Nossos Serviços:</h2>

        {
          servicos.map(srv => {
            return <CardServicos srv={srv} srvLink={direcionamento} key={srv.tipoServId} />
          })
        }

      </section>
      <Rodape />
    </div>
  );
}



export default Servicos;
