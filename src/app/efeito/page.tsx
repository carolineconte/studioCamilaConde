'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Componente de Logo
const Logo = ({ onLoad } : any) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Define um atraso para a animação da logo
    const timeout = setTimeout(() => {
      setIsVisible(false);
      onLoad(); // Chama a função de retorno quando a animação estiver concluída
    }, 2000); // Ajuste o tempo conforme necessário

    // Limpa o timeout quando o componente for desmontado
    return () => clearTimeout(timeout);
  }, [onLoad]);

  return (
    <motion.div
      initial={{ opacity: 1 }} // Opacidade inicial da logo
      animate={{ opacity: isVisible ? 1 : 0 }} // Animação para remover a logo (desvanecer)
      transition={{ duration: 0.5 }} // Duração da animação
    className="fixed left-0 right-0 top-0 bottom-0 bg-primaryBlack"
    >
      <img className="w-[90%] h-[90%] animate-pulse" src="/logo.svg" alt="Logo" />
    </motion.div>
  );
};

export default Logo;
