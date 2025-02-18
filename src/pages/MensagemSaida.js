import React from "react";
import "../styles.css"; // Importa o estilo global

const MensagemSaida = () => {
  return (

    
    <div className="input-container">
        
      <img src={require("../img/mcmv.png")} alt="Imagem" className="page-image" />
      <p></p>
      <p style={{ color: "#fff", textAlign: "center", fontSize: "18px" }}>
        Obrigado por preencher o formulário! Em breve entraremos em contato.
     
      <h2>Resultado</h2>
      </p>
    </div>
  );
};

export default MensagemSaida;
