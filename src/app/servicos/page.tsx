import SectionTitle from "@/components/SectionTitle";
import Cta from "@/components/layout/Cta";
import MakeupIcon from "@/components/icons/MakeupIcon"
import ClockIcon from "@/components/icons/ClockIcon";
import DressIcon from "@/components/icons/DressIcon";
import PhotoIcon from "@/components/icons/PhotoIcon";
import HairIcon from "@/components/icons/HairIcon";
import VideoIcon from "@/components/icons/VideoIcon";
import Gallery from "@/components/layout/Gallery.tsx";

export default function Servicos() {

  return (
    <main className="pt-20 lg:pt-28 lg:px-24">

      <SectionTitle sectionTitle='Serviços' />

      <p className="p-3 text-pretty text-center font-['Tenor_Sans'] text-lg leading-5 mx-auto
      lg:text-xl lg:px-10">
        
      </p>

      <Gallery img1={'/1.jpg'} text1={'Tipo tal'} img2={'/1.jpg'} text2={'Tipo tal'} img3={'/1.jpg'} text3={'Tipo tal'} 
      img4={'/1.jpg'} text4={'Tipo tal'} img5={'/1.jpg'} text5={'Tipo tal'} />

      <Cta
        title='Quando foi a ultima vez que você tirou um dia ou um momento e fez algo somente para você?'
        text='Agende agora mesmo um momento só para você no nosso salão de beleza. Cuide de si mesma e deixe-me realçar 
        sua beleza interior e exterior. Reserve seu momento de cuidado e renovação hoje!'  />

    </main>
  );
}
