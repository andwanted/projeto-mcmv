import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css"; // Importa o estilo global
import ProgressBar from '../ProgressBar';  // Importe o componente da barra de progresso

const Financiamento = () => {
  const navigate = useNavigate();

  // Estados (não precisam ser alterados, apenas exemplo)
  const [possuiFinanciamento, setPossuiFinanciamento] = useState("");
  const [trabalhaRegistrado, setTrabalhaRegistrado] = useState("");
  const [restricaoNome, setRestricaoNome] = useState("");

  const avancar = () => {
    navigate("/resultado"); // Navega para o resultado final
  };

  // Configuração da barra de progresso
  const stepsCompleted = 3; // Estamos na terceira e última etapa
  const totalSteps = 3; // Total de etapas (páginas)

  return (
    <div className="container">
      {/* Barra de Progresso */}
      <ProgressBar stepsCompleted={stepsCompleted} totalSteps={totalSteps} />

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

export default Financiamento;
