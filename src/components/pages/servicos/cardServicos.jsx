import React from 'react';

import './servicos.css';

function CardServicos({ srv, srvLink }) {
    return (
        <div className="trabalho">
          <img className="imgservico" src={srv.tipoServImg} alt={srv.tipoServNome} />
          <h3>{srv.tipoServNome}</h3>
          <p>{srv.tipoServDescricao}</p>

          <div className="btnservico">
            {/* <Link onClick={() => direcionamento('eletricista')} className="btn btn-primary">Contratar Serviço!</Link> */}
            <span onClick={() => srvLink(srv.tipoServNome.toLowerCase(), srv.tipoServId)} className="btn btn-primary">Contratar Serviço!</span>
          </div>
        </div>

    );
}

export default CardServicos;