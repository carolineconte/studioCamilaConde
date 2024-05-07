import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Card from "../Card";

function Carrossel() {
  return (
    <section className="mx-auto mt-3 mb-16 relative md:-mt-24 md:w-[100%] lg:w-[75%] lg:-mt-40">
      <Carousel>
        <CarouselContent>
          <CarouselItem className=" md:basis-1/3 lg:basis-1/3">
            <Card imageUrl={'/1.jpg'} alt={'Foto de uma modelo de maquiagem'} titleCard={'Beleza'} 
            textBody={'Atendendimento personalizado com foco em realçar sua beleza natural.'} 
            href='/servicos'/>
          </CarouselItem>

          <CarouselItem className="md:basis-1/3 lg:basis-1/3">
          <Card imageUrl={'/2.jpg'} alt={'Foto de uma Camila maquiando uma noiva'} titleCard={'Cursos'} 
          textBody={'Aprenda a realçar sua beleza ou inicie na profissao de maquiador.'} 
          href='/cursos'/>
          </CarouselItem>

          <CarouselItem className="md:basis-1/3 lg:basis-1/3">
          <Card imageUrl={'/5.jpg'} alt={'Foto cliente'} titleCard={'Make + Foto'} 
          textBody={'Ensaio fotográfico sob medida para diversas finalidades.'} 
          href='/makefoto'/>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="absolute top-[28vh] left-[40%] md:hidden" />
        <CarouselNext className="right-[40%] top-[28vh] absolute md:hidden" />
      </Carousel>
    </section>
  )
}

export default Carrossel;