'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    className="fixed pt-12 left-0 right-0 top-0 bottom-0 bg-primaryBlack flex justify-center items-center"
    >
      <Image width={90} height={90} className="w-[80%] h-[80%] animate-pulse" src="/logo.svg" alt="Logo" />
    </motion.div>
  );
};

export default Logo;
