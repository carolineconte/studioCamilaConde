import SectionTitle from "@/components/SectionTitle";
import Cta from "@/components/layout/Cta";
import MakeupIcon from "@/components/icons/MakeupIcon"
import ClockIcon from "@/components/icons/ClockIcon";
import DressIcon from "@/components/icons/DressIcon";
import PhotoIcon from "@/components/icons/PhotoIcon";
import HairIcon from "@/components/icons/HairIcon";
import VideoIcon from "@/components/icons/VideoIcon";
import Gallery from "@/components/layout/Gallery";
import { PiStarFill } from "react-icons/pi";
import { FaHeart, FaPlay } from "react-icons/fa";
import { TbColorSwatch } from "react-icons/tb";

import Infos from "@/components/Infos";



export default function MakeFoto() {

  const infosList = [
    'Os ageendamentos são feitos com no mínimo 15 dias de antecedência por questões de agenda.',
    'Esses ensaios são agendados apenas durante a semana.',
    'O não comparecimento no dia do ensaio não dá direito a reembolso, valor de entrada ficará como multa pela falta.',
    'Caso precise remarcar seu ensaio você terá prazo de 30 dias para agendar outra data, caso não remarcar, precisará fazer outra entrada, valor ficará como multa.',
  ];

  return (
    <main className="pt-20 lg:pt-28 lg:px-24">

      <SectionTitle sectionTitle='Make & Foto' />

      <p className="py-6 text-pretty text-center font-['Tenor_Sans'] text-lg leading-5 mx-auto
      lg:text-xl lg:px-10">
        <strong className="block mb-1">Make e Foto oferece um pacote completo que inclui serviços de beleza para um ensaio fotográfico sob medida.</strong>
        Este ensaio pode ser adaptado para diversas finalidades, como realinhamento de imagem nas redes sociais, celebração de
        aniversários, necessidades corporativas ou até mesmo para explorar a sensualidade, tudo isso visando elevar a autoestima.
      </p>

      <Gallery img1={'/9.png'} img2={'/5.jpg'} img3={'/4.jpg'} img4={'/10.png'} img5={'/11.pNg'} img6={'/6.jpg'} />

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
          md:py-6 md:grid grid-cols-[1fr_15px_1fr_15px_1.2fr] gap-3">

          <div className="pacotes">
            <p>Pack Glow</p>
            <p><MakeupIcon />Maquiagem com cílios.</p>
            <p><ClockIcon />2 Horas de ensaio.</p>
            <p><DressIcon />2 Trocas de roupas.</p>
            <p><PhotoIcon />20 fotos editadas (enviadas por drive)</p>
            <p className="priceBadge">R$ 400,00</p>
            <span className="infosPacotes">Entrada: R$150,00 no pix para reserva de hórario.</span>
            <span className="infosPacotes">Restante no pix ou até 2x com acréscimo da máquina</span>
          </div>

          <div className="max-md:h-[2px] md:w-[2px] bg-primaryBlack/50"></div>

          <div className="pacotes">
            <p>Pack Glow Up</p>
            <p><MakeupIcon />Maquiagem com cílios.</p>
            <p><ClockIcon />2:30 Horas de ensaio.</p>
            <p><DressIcon />2 Trocas de roupas.</p>
            <p><DressIcon />Assessoria para escolha dos looks</p>
            <p><PhotoIcon />40 fotos editadas (enviadas por drive)</p>
            <p><VideoIcon />Consultoria para redes sociais</p>
            <p className="priceBadge">R$ 500,00</p>
            <span className="infosPacotes">Entrada: R$150,00 no pix para reserva de hórario.</span>
            <span className="infosPacotes">Restante no pix ou até 4x com acréscimo da máquina</span>
          </div>

          <div className="max-md:h-[2px] md:w-[2px] bg-primaryBlack/50"></div>

          <div className="pacotes">
            <p>Girl Boss</p>
            <p><MakeupIcon />Maquiagem com cílios</p>
            <p><HairIcon />Babyliss (sem lavagem,vir com cabelo limpo)</p>
            <p><ClockIcon />3 Horas de ensaio.</p>
            <p><DressIcon />3 Trocas de roupas.</p>
            <p><PhotoIcon />40 fotos editadas (enviadas por drive)</p>
            <p><VideoIcon />Consultoria para redes sociais</p>
            <p><TbColorSwatch />Consultoria de Coloração pessoal com Estela Borges.</p>
            <p className="priceBadge">R$ 650,00</p>
            <span className="infosPacotes">Entrada: R$150,00 no pix para reserva de hórario.</span>
            <span className="infosPacotes">Restante no pix ou até 6x com acréscimo da máquina</span>
          </div>

          <div className="col-span-full border-t-2 py-2">
            <h3 className="font-bold">ENTREGA</h3>
            <ul className="list-disc">
              <li>
                As fotos são realizadas no meu espaço de trabalho, meu studio em meu
                celular Iphone, com técnicas profissionais de fotografia, iluminação e edição.
              </li>
              <li>
                Equipamentos e estrutura para um ensaio de alta qualidade. Após o ensaio a
                cliente escolherá as fotos no studio mesmo (por favor deixe tempo reservado
                para isso), e as fotos são entregues somente editadas.
              </li>
              <li>
                As fotos editadas serão enviadas em até 7 dias úteis.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Infos infosList={infosList} />

      <Cta
        title='Quando foi a ultima vez que você tirou um dia ou um momento e fez algo somente para você?'
        text='Agende agora mesmo um momento só para você no nosso salão de beleza. Cuide de si mesma e deixe-me realçar 
        sua beleza interior e exterior. Reserve seu momento de cuidado e renovação hoje!'  />

    </main>
  );
}
