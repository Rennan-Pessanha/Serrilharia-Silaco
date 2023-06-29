import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Perfil from './Pages/Perfil';
import Produtos from './Pages/Produtos';
import FaleConosco from './Pages/FaleConosco/index.js';
import PerfisEspeciais from './Pages/ProdutosList/PerfisEspeciais';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Perfil" element={<Perfil />} />
      <Route path="/Produtos" element={<Produtos />} />
      <Route path="/FaleConosco" element={<FaleConosco />} />
      <Route path="/PerfisEspeciais" element={<PerfisEspeciais />} />
    </Routes>
  </BrowserRouter>
</React.StrictMode>,
document.getElementById('root')
);
