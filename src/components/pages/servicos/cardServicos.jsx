import React from 'react';

import './cardServicos.css';

function CardServicos({ tbServicos }) {
    return (
        <div className='cardServ'>
            <div className='controlImgServ'>
            </div>
            <span className='descricao'>{tbServicos.servicoDesc}</span>
            <span>{tbServicos.servicoValor}</span>
        </div>
    );
}

export default CardServicos;