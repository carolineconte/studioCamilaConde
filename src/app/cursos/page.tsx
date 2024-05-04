'use client'
import CardCursos from "@/components/CardCursos";
import SectionTitle from "@/components/SectionTitle";
import Cta from "@/components/layout/Cta";
import Gallery from "@/components/layout/Gallery.tsx";

export default function Cursos() {
  const cursos = [
    {
      title: 'Curso de Auto Maquiagem',
      duration: '8 horas',
      price: 'R$ 400,00',
      description: 'Dominar técnicas de maquiagem para uso diário e ocasiões especiais.',
      includes: [
        'Identificação do tipo e cor da pele para escolha de produtos adequados.',
        'Técnicas de preparação da pele, incluindo correção de imperfeições e aplicação de base.',
        'Maquiagens para o dia a dia e para eventos',
        'Preparação da pele para melhorar o resultado',
        'Dicas para manter uma maquiagem duradoura.'
      ],
      require: 'Nenhum',
      certificate: 'Não'
    },
    {
      title: 'Curso Profissional de Maquiagem',
      duration: '24 horas',
      price: 'R$ 1200,00',
      description: 'Capacitar profissionais a se tornarem maquiadores qualificados e preparados para o mercado de trabalho.',
      includes: [
        'Fundamentos da maquiagem, incluindo preparação da pele, correção de imperfeições e aplicação de base.',
        'Técnicas avançadas de contorno e iluminação para realçar os traços faciais.',
        'Exploração de estilos de maquiagem para diferentes ocasiões e tipos de clientes.',
        'Como fotogar os resultados para suas redes sociais profissionais',
        'Como divulgar seu Trabalho',
        'Prática supervisionada em modelos reais.'
      ],
      require: 'Nenhum',
      certificate: 'Sim'
    },
    {
      title: 'Curso de Maquiagem para Noivas',
      duration: '16 horas',
      price: 'R$ 800,00',
      description: 'Capacitar maquiadores a dominar técnicas específicas para criar looks deslumbrantes para noivas.',
      includes: [
        'Preparação da pele para uma maquiagem duradoura.',
        'Técnicas avançadas de contorno e iluminação.',
        'Aplicação de produtos à prova d\'água e de longa duração.',
        'Maquiagem à prova d\'água e lágrimas',
        'Criação de looks de maquiagem para casamentos diurnos e noturnos.',
        'Demonstração de técnicas para destacar os olhos, lábios e maçãs do rosto.'
      ],
      require: 'Conhecimento de maquiagem.',
      certificate: 'Sim'
    },

    {
      title: 'Curso de Design de Sobrancelhas',
      duration: '12 horas',
      price: 'R$ 600,00',
      description: 'Capacitar profissionais a realizar serviços de design de sobrancelhas com precisão e habilidade.',
      includes: [
        'Identificação do formato de rosto e sobrancelhas ideais para cada cliente.',
        'Técnicas de medição e depilação das sobrancelhas.',
        'Demonstração de métodos de preenchimento e coloração das sobrancelhas.'
      ],
      require: 'Nenhum',
      certificate: 'Sim'
    }
  ];


  return (
    <main className="pt-20 lg:pt-28 lg:px-24">

      <SectionTitle sectionTitle='Cursos' />

      <p className="p-6 text-pretty text-center text-lg leading-5 mx-auto lg:text-xl lg:px-10">
        Explore seu potencial no mundo da maquiagem com cursos pensados para ajudá-la a dominar a auto maquiagem ou até mesmo iniciar uma carreira como profissional.<br />
        Meus cursos oferecem desde fundamentos básicos até técnicas avançadas, permitindo que você aprenda a se maquiar como um profissional e escolha os produtos certos para realçar sua beleza.<br />
        Se você sonha em se tornar um maquiador profissional, Vou te ensinar tudo que aprendi com meus 10 anos de experiência através de cursos práticos.
      </p>

      <section className="mb-24">
        {
          cursos.map((curso, index) => <CardCursos key={index} {...curso} />)
        }
      </section>


      <Cta
        title='Explore seu potencial no mundo da maquiagem'
        text='Descubra seu potencial na maquiagem e comece sua jornada para se tornar um profissional! Reserve agora seu lugar em meus cursos práticos e transforme sua paixão em uma carreira gratificante.'
      />

    </main>
  );
}
