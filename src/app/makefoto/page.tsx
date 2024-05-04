import SectionTitle from "@/components/SectionTitle";
import Cta from "@/components/layout/Cta";
import MakeupIcon from "@/components/icons/MakeupIcon"
import ClockIcon from "@/components/icons/ClockIcon";
import DressIcon from "@/components/icons/DressIcon";
import PhotoIcon from "@/components/icons/PhotoIcon";
import HairIcon from "@/components/icons/HairIcon";
import VideoIcon from "@/components/icons/VideoIcon";
import Gallery from "@/components/layout/Gallery.tsx";
import { PiStarFill } from "react-icons/pi";
import { FaHeart, FaPlay } from "react-icons/fa";

export default function MakeFoto() {

  return (
    <main className="pt-20 lg:pt-28 lg:px-24">

      <SectionTitle sectionTitle='Make & Foto' />

      <p className="pt-3 text-pretty text-center font-['Tenor_Sans'] text-lg leading-5 mx-auto
      lg:text-xl lg:px-10">
        <strong className="block mb-1">Make e Foto oferece um pacote completo que inclui serviços de beleza para um ensaio fotográfico sob medida.</strong>
        Este ensaio pode ser adaptado para diversas finalidades, como realinhamento de imagem nas redes sociais, celebração de
        aniversários, necessidades corporativas ou até mesmo para explorar a sensualidade, tudo isso visando elevar a autoestima.
      </p>

      <Gallery img1={'/7.jpg'} img2={'/1.jpg'} img3={'/4.jpg'} img4={'/6.jpg'} img5={'/3.jpg'} img6={'/7.jpg'} />

      <section className="my-10 flex flex-col gap-3">
        <h2 className="subtitlePage">Como Funciona?</h2>

        <div className="description">
          <span><FaPlay /></span>
          <p>
            Começamos com a maquiagem e, se desejado, o penteado.
          </p>
        </div>

        <div className="description">
          <span><PiStarFill /></span>
          <p>
            Enquanto estamos fotografando, você pode acompanhar o progresso e fazer ajustes conforme desejar.
          </p>
        </div>
        <div className="description">
          <span><FaHeart /></span>
          <p>
            Depois da sessão, você pode selecionar suas fotos preferidas. Com base na quantidade escolhida, nós realizamos a edição de todas elas.            </p>
        </div>
      </section>

      <section className="my-10">
        <h2 className="subtitlePage">Pacotes Disponiveis</h2>

        <div className="border-double px-10 border-4 border-primaryBlack mx-auto rounded justify-between  
         md:flex md:py-6">

          <div className="pacotes">
            <p>Básico</p>
            <p><MakeupIcon />Maquiagem completa.</p>
            <p><ClockIcon />2 Horas de ensaio.</p>
            <p><DressIcon />2 Trocas de roupas.</p>
            <p><PhotoIcon />15 Fotos.</p>
            <p>R$ 500,00</p>
          </div>

          <div className="max-md:h-[2px] md:w-[2px] md:my-12 bg-primaryBlack/50"></div>
          
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

          <div className="max-md:h-[2px] md:w-[2px] md:my-12 bg-primaryBlack/50"></div>

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
