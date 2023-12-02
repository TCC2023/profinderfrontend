import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import Cabecalho from "../../header/header";
import Rodape from "../../footer/footer";
import {useLocation} from 'react-router-dom';


import './listaPrest.css';

function ListaPrest(){

    const [servicos, setServicos] = useState([]); 
    const [tpServicos, setTpServicos] = useState([{
      "tipoServId": "",
			"tipoServNome": "",
			"tipoServDescricao": "",
			"tipoServImg": ""
    },]); 
    const location = useLocation();

    const getPrestadores = async () => {
      try {
        const response = await api.get("/servicostipo/" + location.state);
        const data = response.data.itens;
        
        setServicos(data);
      } catch (error) {
        console.log(error);
      }
    };
  

    const listaServicos = async () => {
      try {
        const response = await api.get("/tiposervicoid/" + location.state);               
        setTpServicos(response.data.itens);
      } catch (error) {
        console.log(error);
      }
    };
    // console.log(tpServicos[0].tipoServNome);
    useEffect(() => {
      listaServicos();
      getPrestadores();      
    }, []);
    return(
        <div>
            <Cabecalho />
            <section className="carpinteiro">
                <div className="title-carpinteiro">
                    <h1>{tpServicos[0].tipoServNome}</h1>
                </div>

                <div className="carpinteiro-info">
                    <p>{tpServicos[0].tipoServDescricao}</p>
                    <img src={tpServicos[0].tipoServImg} alt={tpServicos[0].tipoServNome} style={{width: 50, height: 50}} />
                </div>
                
                <div className="listagem-servico">
          <ul className="lista-prestador">
            {servicos.map((item) => (
              <div className="prestador-listado" key={item.servicoId}>
                <span className="name"> {item.usuarioNome}</span>
                <span className="name"> {item.servicoDesc}</span>
                <span className="name"> {item.servicoValor}</span>
                <span className="name"> {item.usuarioTelefone}</span>
              </div>
            ))}
          </ul>
        </div>
            </section>
            <Rodape />
        </div>
    );
}

export default ListaPrest;