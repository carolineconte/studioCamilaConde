'use client'
import CardCursos from "@/components/CardCursos";
import SectionTitle from "@/components/SectionTitle";
import Cta from "@/components/layout/Cta";

export default function Cursos() {

  const cursos = [
    {
      title: 'Curso de Automaquiagem',
      img:'',
      duration: '3 horas',
      promo: 'Em dupa R$ 250,00 cada.',
      price: 'R$ 350,00',
      pagamento: 'Pagamento de R$50,00 para reservar horário. Restante pode ser pago no dia do curso em pix, dinheiro ou cartão',
      description: 'Ensino maquiagem para o dia a dia e maquiagem para festa. Pego na sua mão e demonstro como deve fazer caso precise de ajuda.',
      includes: [
        'Identificação do tipo e cor da pele para escolha de produtos adequados.',
        'Técnicas de preparação da pele, incluindo correção de imperfeições e aplicação de base.',
        'Contornos.',
        'Dois tipos de olhos.',
        'Aplicação de cílios.',
        'Montando uma necessaire.',
        'Lista de produtos.'
      ],
      materiais: 'você vai ter acesso aos meu produtos e deve levar seu material para que eu possa te ajudar a ver o que ainda falta na sua necessaire. Podemos assim compor uma lista de produtos personalizada para suas necessidades.',
      require: 'Nenhum',
      certificate: 'Não'
    },
    {
      title: 'Curso Profissional Iniciante',
      duration: '24 horas (3 dias)',
      price: 'R$ 1300,00',
      parcelamento:'12x 142,41',
      description: 'Capacitar profissionais a se tornarem maquiadores qualificados e preparados para o mercado de trabalho.',
      includes: [
        'Maquiagem Beauty.',
        'Maquiagem social para festa glam.',
        'Pele resistente.',
        '6 a 7 modelos na prática',
        'Colorimetria aplicada na prática.',
        'Escondendo manchas e espinhas.',
        'Como escolher base correta para sua cliente na prática.',
        'Aula de como fazer fotos do seu trabalho.',
        'Contultoria de perfil.',
        'Consultoria de imagem e marketing.',
        'Transformação do seu instagram.',
        'Fotos profissionais suas ao final do curso.',
        'Alguns produtos para começar com pé direito.'
      ],
      require: 'Nenhum',
      certificate: 'Sim'
    },
    {
      title: 'Curso de Aperfeiçoamento',
      img:'',
      duration: '8 horas(um dia)',
      price: 'R$ 700,00',
      parcelamento:'12x 76,68',
      description: 'Capacitar maquiadores a dominar técnicas específicas para criar looks deslumbrantes para noivas.',
      includes: [
        'Maquiagem social.',
        'Maquiagem glam duas técnicas voltadas para eventos.',
        'Colorimetria aplicada na prática.',
        'Escondendo manchas e espinhas.',
        'Como escolher base correta para sua cliente na prática.',
        'Duas modelos, tudo na prática.'
      ],
      require: 'Conhecimento de maquiagem.',
      certificate: 'Sim'
    },

    {
      title: 'Curso de Aperfeiçoamento 2',
      img:'',
      duration: '9 horas (Um dia)',
      price: 'R$ 800,00',
      parcelamento:'12X 87,64',
      description: 'Capacitar profissionais a realizar serviços de design de sobrancelhas com precisão e habilidade.',
      includes: [
        'Maquiagem Beauty.',
        'Maquiagem social para festa glam.',
        'Pele resistente.',
        '3 técnicas tudo na prática, em 3 modelos.',
        'Colorimetria aplicada na prática.',
        'Escondendo manchas e espinhas.',
        'Como escolher base correta para sua cliente na prática.',
        'Aula de como fazer fotos do seu trabalho.',
        'Contultoria de perfil.'
      ],
      require: 'Conhecimento de maquiagem.',
      certificate: 'Sim'
    }
  ];

  return (
    <main className="pt-20 lg:pt-28">

      <SectionTitle sectionTitle='Cursos' />

      <p className="p-6 text-pretty text-center text-lg leading-5 mx-auto lg:text-xl lg:px-10">
        Explore seu potencial no mundo da maquiagem com cursos pensados para ajudá-la a dominar a auto maquiagem ou até mesmo iniciar uma carreira como profissional.<br />
        Meus cursos oferecem desde fundamentos básicos até técnicas avançadas, permitindo que você aprenda a se maquiar como um profissional e escolha os produtos certos para realçar sua beleza.<br />
        Se você sonha em se tornar um maquiador profissional, Vou te ensinar tudo que aprendi com meus 10 anos de experiência através de cursos práticos.
      </p>

      <section className="mb-12">
        {
          cursos.map((curso, index) => <CardCursos key={index} {...curso} />)
        }
      </section>

      <div className="flex flex-col text-left items-center mx-auto mb-24 mt-10">
                <p className="font-bold">Informações importantes</p>
                <ul className="list-disc grid grid-cols-2">
                  <li>Entrada para agendar data do curso de 30%.</li>
                  <li>Será permitido alteração de data somente uma vez.</li>
                  <li>Caso queira cancelar a entrada não será devolvida.</li>
                  <li>Curso pode ser parcelado até 12x com juros da máquina.</li>
                </ul>
              </div>

      <Cta
        title='Explore seu potencial no mundo da maquiagem'
        text='Descubra seu potencial na maquiagem e comece sua jornada para se tornar um profissional! Reserve agora seu lugar em meus cursos práticos e transforme sua paixão em uma carreira gratificante.'
      />

    </main>
  );
}
