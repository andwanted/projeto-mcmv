import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InformacoesPessoais from "./pages/InformacoesPessoais";
import RendaFamiliar from "./pages/RendaFamiliar";
import FinanciamentoAtivo from "./pages/FinanciamentoAtivo";
import MensagemSaida from "./pages/MensagemSaida";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InformacoesPessoais />} />
        <Route path="/renda" element={<RendaFamiliar />} />
        <Route path="/financiamento" element={<FinanciamentoAtivo />} />
        <Route path="/resultado" element={<MensagemSaida />} />
      </Routes>
    </Router>
  );
};

export default App;
