import About from "@/components/layout/About";
import Carrossel from "@/components/layout/Carrossel";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import Review from "@/components/layout/Review";
import WhatsBtn from "@/components/WhatsBtn"

export default function Home() {

  return (
    <>
      <Hero />
      <main className="">
        <Carrossel />
        <About />
        <Review />
      </main>
    </>

  );
}
