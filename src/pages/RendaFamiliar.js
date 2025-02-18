import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css"; // Importa o estilo global
import ProgressBar from '../ProgressBar';  // Importe o componente da barra de progresso

const RendaFamiliar = () => {
  const navigate = useNavigate();

  const [rendaMensal, setRendaMensal] = useState("");
  const [numeroPessoas, setNumeroPessoas] = useState("");
  const [possuiImovel, setPossuiImovel] = useState("");
  const [recebeBeneficioSocial, setRecebeBeneficioSocial] = useState("");
  const [resideCidade, setResideCidade] = useState("");

  const avancar = () => {
    navigate("/financiamento"); // Navega para a próxima página
  };

  // Configuração da barra de progresso
  const stepsCompleted = 2; // Estamos na segunda etapa
  const totalSteps = 3; // Total de etapas (páginas)

  return (
    <div className="container">
      {/* Barra de Progresso */}
      <ProgressBar stepsCompleted={stepsCompleted} totalSteps={totalSteps} />

      <div className="image-container">
        <img src={require("../img/mcmv.png")} alt="Imagem de Capa" className="page-image" />
      </div>

      <h2>Renda Familiar e Informações da Casa</h2>

      <div className="input-container">
        <input 
          type="number" 
          placeholder="Renda Mensal" 
          value={rendaMensal}
          onChange={(e) => setRendaMensal(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Número de Pessoas na Casa" 
          value={numeroPessoas}
          onChange={(e) => setNumeroPessoas(e.target.value)}
        />
        <select 
          value={possuiImovel} 
          onChange={(e) => setPossuiImovel(e.target.value)}
        >
          <option value="">Possui Imóvel Próprio?</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
        <select 
          value={recebeBeneficioSocial} 
          onChange={(e) => setRecebeBeneficioSocial(e.target.value)}
        >
          <option value="">Recebe algum Benefício Social?</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
        <select 
          value={resideCidade} 
          onChange={(e) => setResideCidade(e.target.value)}
        >
          <option value="">Reside na cidade onde deseja financiar?</option>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
      </div>

      {/* Botão de navegação */}
      <button onClick={avancar}>Próximo</button>
    </div>
  );
};

export default RendaFamiliar;
