'use client'
import dynamic from 'next/dynamic'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = dynamic(() => import("@/components/layout/About"))
const Review = dynamic(() => import("@/components/layout/Review"))
// import About from "@/components/layout/About";
import Carrossel from "@/components/layout/Carrossel";
import Hero from "@/components/layout/Hero";
// import Review from "@/components/layout/Review";
import Logo from "@/components/layout/Logo";

export default function Home() {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    
  }, [setIsVisible]);

  return (
    <>
      {isVisible && <Logo isVisible={isVisible} setIsVisible={setIsVisible} />}

      <Hero />
      <main className="">
        <Carrossel />
        <About />
        <Review />
      </main>

    </>
  );
}
