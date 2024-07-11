"use client";

import React from "react";

interface ButtonProps {
  text: string;
  consoleMessage?: string | undefined;
  href?: string | undefined;
  redButton?: boolean;
  whiteButton?: boolean;
}

// Write message to console if message is not undefined
const writeMessage = (message: string | undefined) => {
  message === undefined ? null : console.log(message);
};

const redirect = (url: string | undefined) => {
  console.log(url);
  url === undefined ? null : (window.location.href = url);
};

const Button: React.FC<ButtonProps> = ({
  text,
  consoleMessage,
  href,
  redButton,
  whiteButton,
}) => {
  // Define button style
  const redButtonStyle = redButton ? "bg-red-500 text-white hover:bg-red-400" : "";
  const whiteButtonStyle = whiteButton ? "bg-white text-red-500 hover:bg-gray-100" : "";
  const buttonStyle = `px-4 py-2 font-bold rounded-md ${redButtonStyle} ${whiteButtonStyle}
    shadow-md`;

  return (
    <button
      className={buttonStyle}
      onClick={() => {
        writeMessage(consoleMessage);
        redirect(href);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
