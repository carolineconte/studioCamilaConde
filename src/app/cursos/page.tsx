import SectionTitle from "@/components/SectionTitle";
import Cta from "@/components/layout/Cta";
import Gallery from "@/components/layout/Gallery.tsx";

export default function Cursos() {

  return (
    <main className="pt-20 lg:pt-28 lg:px-24">

      <SectionTitle sectionTitle='Cursos' />

      <p className="p-3 text-pretty text-center font-['Tenor_Sans'] text-lg leading-5 mx-auto
      lg:text-xl lg:px-10">
        Explore seu potencial no mundo da maquiagem com cursos especializados, projetados para ajudá-lo a dominar a arte da autoexpressão ou até mesmo iniciar uma carreira como maquiador profissional.<br/>
        Meus programas abrangentes oferecem desde fundamentos básicos até técnicas avançadas, permitindo que você aprenda a se maquiar como um profissional e escolha os produtos certos para realçar sua beleza única.<br/>
        Se você sonha em se tornar um maquiador profissional, Vou te ensinar tudo que aprendi com meus 10 anos de experiência através de cursos práticos.
        <strong className="block">Explore seu potencial no mundo da maquiagem e inicie sua jornada para se tornar um maquiador profissional.</strong>
      </p>

      {/* <Gallery /> */}


      <Cta
        title='Explore seu potencial no mundo da maquiagem'
        text='Descubra seu potencial na maquiagem e comece sua jornada para se tornar um profissional!
        Reserve agora seu lugar em meus cursos práticos e transforme sua paixão em uma carreira gratificante.'  />

    </main>
  );
}
