import SectionTitle from "@/components/SectionTitle";
import Cta from "@/components/layout/Cta";
import MakeupIcon from "@/components/icons/MakeupIcon"
import ClockIcon from "@/components/icons/ClockIcon";
import DressIcon from "@/components/icons/DressIcon";
import PhotoIcon from "@/components/icons/PhotoIcon";
import HairIcon from "@/components/icons/HairIcon";
import VideoIcon from "@/components/icons/VideoIcon";
import Gallery from "@/components/layout/Gallery.tsx";

export default function MakeFoto() {

  return (
    <main className="pt-20 lg:pt-28 lg:px-24">

      <SectionTitle sectionTitle='Make & Foto' />

      <p className="p-3 text-pretty text-center font-['Tenor_Sans'] text-lg leading-5 mx-auto
      lg:text-xl lg:px-10">
        Make e Foto oferece um pacote completo que inclui serviços de maquiagem e cabelo para um ensaio fotográfico sob medida.
        Este ensaio pode ser adaptado para diversas finalidades, como realinhamento de imagem nas redes sociais, celebração de
        aniversários, necessidades corporativas ou até mesmo para explorar a sensualidade, tudo isso visando elevar a autoestima.
      </p>

      <Gallery img1={'/1.jpg'} text1={'Tipo tal'} img2={'/1.jpg'} text2={'Tipo tal'} img3={'/1.jpg'} text3={'Tipo tal'} 
      img4={'/1.jpg'} text4={'Tipo tal'} img5={'/1.jpg'} text5={'Tipo tal'} />

      <section className="my-20 flex flex-col gap-3">
        <h2 className="subtitlePage">Como Funciona?</h2>

        <div className="description">
          <span>a</span>
          <p className=" grow p-3">sdsadasdasd</p>
        </div>

        <div className="description">
          <span>a</span>
          <p className=" grow p-3">sdsadasdasd</p>
        </div>
        <div className="description">
          <span>a</span>
          <p className=" grow p-3">sdsadasdasd</p>
        </div>
      </section>

      <section className="my-20">
        <h2 className="subtitlePage">Pacotes Disponiveis</h2>

        <div className="border-double px-10 border-4 border-primaryBlack mx-auto rounded justify-between  
        md:w-[90%] md:py-6 lg:flex">

          <div className="pacotes">
            <p>Básico</p>
            <p><MakeupIcon />Maquiagem completa.</p>
            <p><ClockIcon />2 Horas de ensaio.</p>
            <p><DressIcon />2 Trocas de roupas.</p>
            <p><PhotoIcon />15 Fotos.</p>
            <p>R$ 500,00</p>
          </div>

          <div className="max-lg:h-[2px] lg:w-[2px] lg:my-12 bg-primaryBlack/50"></div>
          <div className="pacotes">
            <p>Intermediário</p>
            <p><MakeupIcon />Maquiagem completa.</p>
            <p><HairIcon />Cachos.</p>
            <p><ClockIcon />3 Horas de ensaio.</p>
            <p><DressIcon />3 Trocas de roupas.</p>
            <p><PhotoIcon />25 Fotos.</p>
            <p><VideoIcon />1 Video para redes sociais.</p>
            <p>R$ 500,00</p>
          </div>
          <div className="max-lg:h-[2px] lg:w-[2px] lg:my-12 bg-primaryBlack/50"></div>

          <div className="pacotes">
            <p>Avançado</p>
            <p><MakeupIcon />Maquiagem completa.</p>
            <p><HairIcon />Cachos.</p>
            <p><ClockIcon />3 Horas de ensaio.</p>
            <p><DressIcon />4 Trocas de roupas.</p>
            <p><PhotoIcon />40 Fotos.</p>
            <p><VideoIcon />1 Video para redes sociais.</p>
            <p>R$ 500,00</p>
          </div>

        </div>
      </section>


      <div className="boder border-primaryBlack">

      </div>

      <Cta
        title='Quando foi a ultima vez que você tirou um dia ou um momento e fez algo somente para você?'
        text='Agende agora mesmo um momento só para você no nosso salão de beleza. Cuide de si mesma e deixe-me realçar 
        sua beleza interior e exterior. Reserve seu momento de cuidado e renovação hoje!'  />

    </main>
  );
}
