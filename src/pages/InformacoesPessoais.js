import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css"; // Importa o estilo global
import ProgressBar from '../ProgressBar';  // Importe o componente da barra de progresso

const InformacoesPessoais = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");

  const avancar = () => {
    navigate("/renda"); // Navega para a próxima página
  };

  // Configuração da barra de progresso
  const stepsCompleted = 1; // Estamos na primeira etapa
  const totalSteps = 3; // Total de etapas (páginas)

  return (
    <div className="container">
      {/* Barra de Progresso */}
      <ProgressBar stepsCompleted={stepsCompleted} totalSteps={totalSteps} />

      <div className="image-container">
        <img src={require("../img/mcmv.png")} alt="Imagem" className="page-image" />
      </div>

      <h2>Informações Pessoais</h2>
      
      <div className="input-container">
        <input 
          type="text" 
          placeholder="Nome Completo" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Telefone" 
          value={telefone} 
          onChange={(e) => setTelefone(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Endereço" 
          value={endereco} 
          onChange={(e) => setEndereco(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Estado Civil" 
          value={estadoCivil} 
          onChange={(e) => setEstadoCivil(e.target.value)} 
        />
      </div>

      {/* Botão de navegação */}
      <button onClick={avancar}>Próximo</button>
    </div>
  );
};

export default InformacoesPessoais;
