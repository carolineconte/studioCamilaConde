'use client'
//Hooks
import dynamic from 'next/dynamic'
import { useState, useEffect } from "react";
//Components
const About = dynamic(() => import("@/components/layout/About"))
const Review = dynamic(() => import("@/components/layout/Review"))
const Hero = dynamic(() => import("@/components/layout/Hero"))
const Carrossel = dynamic(() => import("@/components/layout/Carrossel"))
const Logo = dynamic(() => import("@/components/layout/Logo"))
import Contact from '@/components/layout/Contact';

export default function Home() {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if the splash page has been displayed before
    const isSplashDisplayed = localStorage.getItem('isSplashDisplayed');

    if (isSplashDisplayed) {
      // If splash has been displayed before, hide it immediately
      setIsVisible(false);
    } else {
      // If splash has not been displayed before, show it and mark as displayed
      const timeout = setTimeout(() => {
        setIsVisible(false);
        // Mark splash as displayed in local storage
        localStorage.setItem('isSplashDisplayed', 'true');
      }, 3000);

      return () => clearTimeout(timeout);
    }
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
