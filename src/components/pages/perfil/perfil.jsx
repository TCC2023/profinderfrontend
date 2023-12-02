import React, { useState, useEffect } from "react";
import api from '../../services/api'
import { Link } from "react-router-dom";
import Cabecalho from "../../header/header";
import Rodape from "../../footer/footer";

import "./perfil.css";

function Perfil() {

    const [usuario, setUsuario] = useState([]);

    const getPrestadores = async (id) => {
        try {
            const response = await api.get("/perfil/" + id); const data = response.data.itens;

            setUsuario(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        getPrestadores(user.id);
    }, []);


    return (
        <div>
            <Cabecalho />
            <div className="perfil-all">
                <section className="perfil">

                    <div className="perfil-title">
                        <h2>Perfil</h2>
                    </div>

                    <div className="nome-usuario">
                        {usuario.map((item) => (
                            <>


                                <div className="usuario-listado" key={item.usuarioNome}>
                                    <p>
                                        Nome:
                                    </p>
                                    <span className="l-nome"> {item.usuarioNome}</span>
                                </div>
                                <div className="usuario-listado" key={item.usuarioEmail}>
                                    <p>Email:</p>
                                    <span className="l-email"> {item.usuarioEmail}</span>
                                </div>
                                <div className="usuario-listado" key={item.usuarioTelefone}>
                                    <p>
                                        Celular:
                                    </p>
                                    <span className="l-telefone"> {item.usuarioTelefone}</span>
                                </div>
                                <div className="usuario-listado" key={item.usuarioDataNasc}>
                                    <p>Data:</p>
                                    <span className="l-data"> {item.usuarioDataNasc}</span>
                                </div>
                                <div className="usuario-listado" key={item.usuarioTipoConta}>
                                    <p>Tipo de Conta:</p>
                                    <span className="l-conta"> {item.usuarioTipoConta}</span>
                                </div>
                            </>
                        ))}


                        <div className="buttons">
                            <div className="btnfim">
                                <Link to="" className="btn btn-primary">Alterar informaçôes</Link>
                            </div>
                            <div className="btnfim">
                                <Link to="" className="btn btn-primary">Excluir conta</Link>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            <Rodape />
        </div>
    );
}


export default Perfil;
