import React from "react";
import "./style.css";
import whatsapp from "././../../Images/whatsapp.png";
const WhatsAppChatButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  return (
    <div className="whatsapp-chat-button" onClick={handleClick}>
      <img src={whatsapp} alt="WhatsApp" size={15} />
    </div>
  );
};

export default WhatsAppChatButton;
