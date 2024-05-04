import Image from "next/image";
import SectionTitle from "../SectionTitle";

export default function About() {

  return (
    <section className="mt-6 p-3 mx-auto md:p-0 md:w-[90%] lg:w-[85%]">

      <SectionTitle sectionTitle={'Quem sou eu?'} />

      <div className=" bg-primaryBlack rounded-lg mt-3 overflow-hidden md:grid md:grid-cols-[300px_auto] md:px-2 md:bg-none md:bg-transparent md:justify-between gap-6 items-center">

        <Image className="w-[50%] m-auto mt-5 object-cover object-top h-full md:w-full md:mt-0 md:rounded-lg" src='/aboutDesktop.jpg' height={90} width={200} alt="" />

        <div className="text-white text-[1.1em] text-md font-['Tenor_Sans'] text-pretty  aboutText p-5 text-left
          md:bg-primaryBlack md:w-full md:h-full md:static md:rounded-lg md:text-[1.2em] lg:py-10 lg:text-[1.3em]">

          <p className="font-['Abhaya_Libre'] text-[1.4em] leading-6 text-center mb-3 text-rose lg:mb-5 lg:text-[1.6em]">
            Seja bem-vinda ao meu mundo onde a arte da beleza ganham vida!
          </p>

          <p>
            <strong>Sou uma maquiadora, cabeleireira e fotógrafa. </strong>
            Com um olhar atento aos detalhes, meu objetivo é revelar a verdadeira essência da beleza em cada cliente que tenho o privilégio de trabalhar.
          </p>
          <p>
            Minha jornada começou há mais de 10 anos, e meu maior objetivo sempre foi realçar a beleza natural das minhas clientes
            e capturar momentos preciosos e eternizá-los em imagens que contam histórias.
          </p>
          <p>
            <strong>
              Combinando minha experiência em maquiagem, cabelo e fotografia, ofereço uma abordagem personalizada
              a cada cliente. Meu compromisso é proporcionar uma experiência excepcional,
              onde cada detalhe é cuidadosamente planejado e executado para superar as expectativas.
            </strong>
          </p>
        </div>
      </div>
    </section>
  )
}