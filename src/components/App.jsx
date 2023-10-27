import React from "react"; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import Home from "./pages/home/home"; 
import CadUsuario from "./pages/cadUsuario/cadUsuario"; 
import Login from "./pages/login/login";
import Contato from "./pages/contato/contato";
import Header from "./header/header";
import QuemSomos from "./pages/sobre/sobre";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadusuario" element={<CadUsuario />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/header" element={<Header />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
