import React, { useState, useEffect } from "react";
import api from '../../services/api'

import Cabecalho from "../../header/header";
import Rodape from "../../footer/footer";

import "./perfil.css";

function Perfil() {

    const [usuario, setUsuario] = useState([]);

    const getPrestadores = async () => {
        try {
            const response = await api.get("/usuarios");
            const data = response.data.itens;

            setUsuario(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPrestadores();
    }, []);


    return (
        <div>
            <Cabecalho />
            <section className="servicos">
                <h2>Perfil</h2>

                <div className="nome-usuario">
                        {usuario.map((item) => (
                            <div className="usuario-listado" key={item.usuarioId}>
                                <span className="name"> {item.usuarioNome}</span>
                            </div>
                        ))}

                </div>

                <div className="trabalho">


                </div>

                <div className="trabalho">

                </div>

                <div className="trabalho">

                </div>
            </section>
            <Rodape />
        </div>
    );
}


export default Perfil;
