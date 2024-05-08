import { text } from "stream/consumers";
import ReviewCard from "../ReviewCard";
import SectionTitle from "../SectionTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Review() {

  const reviews = [
    {
      name: 'Elida Chrys Maceda',
      text: 'Eu super indico muito incrível maravilhosa, nos deixa confiante e alto estima nas alturas, só quem tem melasma sabe o quanto é difícil esconder essas manchas no rosto. Obrigado por tudo 😘 bjs',
      insta: '@elidamaceda'
    },
    {
      name: 'Estela Borges',
      text: 'Eu amei o meu ensaio e já quero fazer outro . É real o que você diz 👏😍',
      insta: '@estelaborges'
    },
    {
      name: 'Amanda Vasques',
      text: 'Eu ameeeiii o seu trabalho😍😍❤️ Ansiosa para o próximo já',
      insta: '@'
    }
  ]

  return (
    <section className="mt-6 p-3 mx-auto md:w-[95%] lg:w-[85%]">
      <SectionTitle sectionTitle={'Avaliacoes'} />
      <Carousel >
        <CarouselContent className="p-2">
          {reviews.map(item =>
            <CarouselItem key={item.insta} className=" md:basis-1/2">
              <ReviewCard name={item.name} text={item.text} insta={item.insta} />
            </CarouselItem>
          )}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-[5%]" />
        <CarouselNext className="-right-[5%] absolute" />
      </Carousel>
    </section>
  )
}