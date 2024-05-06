import SectionTitle from "@/components/SectionTitle";
import Cta from "@/components/layout/Cta";
import MakeupIcon from "@/components/icons/MakeupIcon"
import ClockIcon from "@/components/icons/ClockIcon";
import DressIcon from "@/components/icons/DressIcon";
import PhotoIcon from "@/components/icons/PhotoIcon";
import HairIcon from "@/components/icons/HairIcon";
import VideoIcon from "@/components/icons/VideoIcon";
import ServicosGallery from "@/components/layout/ServicosGallery";

export default function Servicos() {

  return (
    <main className="pt-20 lg:pt-28 lg:px-24">

      <SectionTitle sectionTitle='Serviços' />

      <ServicosGallery />

      <Cta
        title='Agende seu horário'
        text='Para mais informações e para reservar o seu momento de cuidado e renovação, entre em contato conosco hoje mesmo!'
      />

    </main>
  );
}
