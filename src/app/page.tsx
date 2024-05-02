'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import About from "@/components/layout/About";
import Carrossel from "@/components/layout/Carrossel";
import Hero from "@/components/layout/Hero";
import Review from "@/components/layout/Review";
import Logo from "./efeito/page";

export default function Home() {

  const [isLoaded, setIsLoaded] = useState(false);
  
  const handleLogoAnimationComplete = () => {
    setIsLoaded(true); // Define isLoaded como true quando a animação da logo estiver completa
  };

  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;


  return (
    <>
       <Logo onLoad={handleLogoAnimationComplete} />
       {isLoaded && (
        <motion.div
          initial={false}
          animate={{ WebkitMaskImage: visibleMask, maskImage: visibleMask }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
      <Hero />
      <main className="">
        <Carrossel />
        <About />
        <Review />
      </main>
      </motion.div>
      )}
    </>

  );
}
