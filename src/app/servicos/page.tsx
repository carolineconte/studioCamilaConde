//Components
import SectionTitle from "@/components/SectionTitle";
import Cta from "@/components/layout/Cta";
import ServicosGallery from "@/components/layout/ServicosGallery";

export default function Servicos() {

  return (
    <main className="pt-20 md:pt-24 lg:pt-28 lg:px-24">

      <SectionTitle sectionTitle='Serviços' />

      <ServicosGallery />

      <Cta
        title='Agende seu horário'
        text='Para mais informações e para reservar o seu momento de cuidado e renovação, entre em contato conosco hoje mesmo!'
      />

    </main>
  );
}
