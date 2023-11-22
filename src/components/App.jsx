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
import Eletricista from "./pages/eletricista/eletricista";
import Pedreiro from "./pages/pedreiro/pedreiro";
import Carpinteiro from "./pages/carpinteiro/carpinteiro";
import Pintor from "./pages/pintor/pintor";


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
        <Route path="/eletricista" element={<Eletricista />} />
        <Route path="/pedreiro" element={<Pedreiro />} />
        <Route path="/carpinteiro" element={<Carpinteiro />} />
        <Route path="/pintor" element={<Pintor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
