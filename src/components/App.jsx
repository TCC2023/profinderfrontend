import React from "react"; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import Home from "./pages/home/home"; 
import CadUsuario from "./pages/cadUsuario/cadUsuario"; 
import Contato from "./pages/contato/contato";
import Sobre from "./pages/sobre/sobre";
import Cabecalho from "./header/header";
import Rodape from "./footer/footer";
import Login from "./pages/login/login";
import Servicos from "./pages/servicos/servicos";
import Agendamento from "./pages/agendamento/agendamento";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadusuario" element={<CadUsuario />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/header" element={<Cabecalho />} />
        <Route path="/footer" element={<Rodape />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/agendamento" element={<Agendamento />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
