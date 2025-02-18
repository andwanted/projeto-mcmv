import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css"; // Importa o estilo global

const InformacoesPessoais = () => {
  const navigate = useNavigate();

  // Estados para armazenar os valores dos inputs
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");

  // Função para avançar para a próxima página
  const avancar = () => {
    navigate("/renda");
  };

  return (
    <div className="container">
      {/* Imagem no topo */}
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
