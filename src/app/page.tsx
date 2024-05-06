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

  const initialState = localStorage.getItem('isVisible') === 'true';
  const [isVisible, setIsVisible] = useState(initialState);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  // Salva o estado isVisible no localStorage sempre que ele mudar
  useEffect(() => {
    localStorage.setItem('isVisible', isVisible.toString()); // Convertendo para string
  }, [isVisible]);


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
