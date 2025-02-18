import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css"; // Importa o estilo global

const FinanciamentoAtivo = () => {
  const navigate = useNavigate();

  const [possuiFinanciamento, setPossuiFinanciamento] = useState("");
  const [trabalhaRegistrado, setTrabalhaRegistrado] = useState("");
  const [restricaoNome, setRestricaoNome] = useState("");

  const avancar = () => {
    navigate("/resultado");
  };

  return (
    <div className="container">
      {/* Imagem no topo */}
      <div className="image-container">
        <img src={require("../img/mcmv.png")} alt="Imagem de Capa" className="page-image" />
      </div>

      <h2>Financiamento Ativo e Situação do Nome</h2>

      <div className="input-container">
        <select 
          value={possuiFinanciamento} 
          onChange={(e) => setPossuiFinanciamento(e.target.value)}
        >
          <option value="">Possui Financiamento Ativo?</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
        <select 
          value={trabalhaRegistrado} 
          onChange={(e) => setTrabalhaRegistrado(e.target.value)}
        >
          <option value="">Trabalha Registrado ou Tem Comprovação Financeira?</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
        <select 
          value={restricaoNome} 
          onChange={(e) => setRestricaoNome(e.target.value)}
        >
          <option value="">Tem Restrição no Nome?</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
      </div>

      {/* Botão de navegação */}
      <button onClick={avancar}>Próximo</button>
    </div>
  );
};

export default FinanciamentoAtivo;
