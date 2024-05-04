'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Logo = ({ setIsVisible, isVisible } : any) => {

  return (
    <motion.div
      initial={{ opacity: 1 }} 
      animate={{ opacity: isVisible ? 1 : 0 }} 
      transition={{ duration: 1 }} 
    className="fixed z-50 pt-12 left-0 right-0 top-0 bottom-0 bg-primaryBlack flex justify-center items-center"
    >
      <Image width={90} height={90} className="w-[80%] h-[80%] animate-pulse" src="/logo.svg" alt="Logo" />
    </motion.div>
  );
};

export default Logo;
