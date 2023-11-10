import React from "react"; 
import { Link } from "react-router-dom";
import Cabecalho from "../../header/header";
import Rodape from "../../footer/footer";

import './contato.css';

function Contato(){
    return(
        <div>
            <Cabecalho />
            <section className="contatos">
                <h1>Nossos contatos:</h1>
                    <div className="contatoinfo">
                        <div className="tipocontato">
                            <ul>
                                <h2>Fones/WhatsApp:</h2>
                                <li><Link to="http://wa.me/5514991234411/?text=Olá, Bruno" target="_blank">(14) 99123-4411</Link></li>
                                <li><Link to="http://wa.me/5511997776213/?text=Olá, Victor" target="_blank">(11) 99777-6213</Link></li>
                                <li><Link to="http://wa.me/5514996544839/?text=Olá, Luiz Otavio" target="_blank">(14) 99654-4839</Link></li>
                            </ul>
                        </div>
                        <div className="tipocontato">
                            <ul>
                                <h2>E-mails:</h2>
                                <li><Link to="mailto:brunorodrigues.p54@gmail.com">brunorodrigues.p54@gmail.com</Link></li>
                                <li><Link to="mailto:vtrslion@gmail.com">vtrslion@gmail.com</Link></li>
                                <li><Link to="mailto:luthi_gasparetto@hotmail.com">luthi_gasparetto@hotmail.com</Link></li>
                            </ul>
                        </div>
                        <div className="tipocontato">
                            <ul>
                                <h2>Outras Redes:</h2>
                                <h3>Bruno Pinheiro Rodrigues:</h3>
                                <li><Link to="https://www.linkedin.com/in/brunoprodrigues/">Linkedin</Link> | <Link to="https://github.com/brurodri712">GitHub</Link></li>

                                <h3>Victor Affonso de Souza Leão:</h3>
                                <li><Link to="https://www.linkedin.com/in/victorsouzaleao/">Linkedin</Link> | <Link to="https://github.com/vtrLionn">GitHub</Link></li>

                                <h3>Luis Otávio Audacio Gasparetto:</h3>
                                <li><Link to="https://www.instagram.com/luthi_gasparetto/">Instagram</Link> | <Link to="https://pt-br.facebook.com/luthi.gasparetto/">Facebook</Link> | <Link to="https://github.com/LuthiGasparetto">GitHub</Link></li>
                            </ul>
                        </div>
                    </div>
            </section>
            <Rodape />
        </div>
    );
}
export default Contato;