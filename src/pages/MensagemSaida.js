import React, { useState } from "react";
import "../styles.css"; // Importa o estilo global

const MensagemSaida = () => {
  const [status, setStatus] = useState("verde"); // Inicializa o estado com 'verde'
  const [animating, setAnimating] = useState(false); // Estado para controlar a animação

  // Função para alternar entre os estados
  const proximoStatus = () => {
    setAnimating(true); // Inicia a animação ao mudar o status

    // Alterar o status após a animação
    setTimeout(() => {
      setStatus((prevStatus) =>
        prevStatus === "verde"
          ? "amarelo"
          : prevStatus === "amarelo"
          ? "vermelho"
          : "verde"
      );
      setAnimating(false); // Para a animação
    }, 1000); // Tempo da animação (deve ser igual ao tempo da animação no CSS)
  };

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        position: "relative",  // Necessário para posicionar o splash
        backgroundColor: status === "verde" ? "green" : status === "amarelo" ? "yellow" : "red",
      }}
    >
      {/* Imagem do Projeto */}
      <img src={require("../img/mcmv.png")} alt="Imagem" className="page-image" />

      <h2 style={{ color: "#fff" }}>Resultado</h2>

      <p style={{ color: "#fff" }}>
        {status === "verde"
          ? "Parabéns! Tudo está certo."
          : status === "amarelo"
          ? "Atenção! Algo precisa ser ajustado."
          : "Infelizmente, a situação está difícil."}
      </p>

      {/* Efeito "Splash" */}
      {animating && <div className={`splash-circle ${status}`} />}

      {/* Botão para alternar entre os estados */}
      <button
        onClick={proximoStatus}
        style={{
          padding: "10px 20px",
          backgroundColor: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Próximo Status
      </button>
    </div>
  );
};

export default MensagemSaida;
