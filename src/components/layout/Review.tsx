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

  return (
    <section className="mt-6 p-3 mx-auto md:w-[95%] lg:w-[85%]">
      <SectionTitle sectionTitle={'Avaliacoes'} />
      <Carousel >
        <CarouselContent className="md:px-2">
          <CarouselItem className=" md:basis-1/2">
            <ReviewCard name='Caroline Conde' text=' only five centuries, but also the leap into electronic typesetting, remaining essentiasheets containing
              e like Aldus PageMaker including versions of Lorem Ipsum.' />
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="absolute -left-[5%]" />
        <CarouselNext className="-right-[5%] absolute" />
      </Carousel>
    </section>
  )
}