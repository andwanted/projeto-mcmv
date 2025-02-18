import React from "react";

const ProgressBar = ({ stepsCompleted, totalSteps }) => {
  const progress = (stepsCompleted / totalSteps) * 100;  // Calculando o progresso

  return (
    <div className="progress-container" style={{ width: "100%", height: "10px", backgroundColor: "#eee", borderRadius: "5px" }}>
      <div 
        className="progress-bar" 
        style={{
          width: `${progress}%`,
          height: "100%",
          backgroundColor: '#4caf50',
          borderRadius: '5px'
        }}
      />
    </div>
  );
};

export default ProgressBar;
