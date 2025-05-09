import React from "react";
import "./FancyButton.css"; // Importa o CSS separado

const FancyButton = ({ text, onClick }) => {
  return (
    <button className="fancy-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default FancyButton;