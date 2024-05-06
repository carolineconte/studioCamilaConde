'use client'
import dynamic from 'next/dynamic'
import { useState, useEffect } from "react";

const About = dynamic(() => import("@/components/layout/About"))
const Review = dynamic(() => import("@/components/layout/Review"))
// import About from "@/components/layout/About";
import Carrossel from "@/components/layout/Carrossel";
import Hero from "@/components/layout/Hero";
// import Review from "@/components/layout/Review";
import Logo from "@/components/layout/Logo";
import Contact from '@/components/layout/Contact';

export default function Home() {

  const [isVisible, setIsVisible] = useState(false);

  // Verifica se está no lado do cliente antes de acessar o localStorage
  useEffect(() => {
    const initialState = typeof window !== 'undefined' && localStorage.getItem('isVisible') === 'true';
    setIsVisible(initialState);
  }, []);

  // Salva o estado isVisible no localStorage sempre que ele mudar
  useEffect(() => {
    localStorage.setItem('isVisible', isVisible.toString()); // Convertendo para string
  }, [isVisible]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);


  return (
    <>
      {isVisible && <Logo isVisible={isVisible} setIsVisible={setIsVisible} />}
      <Hero />
      <main className="">
        <Carrossel />
        <About />
        <Review />
      </main>
      <Contact />
    </>
  );
}
