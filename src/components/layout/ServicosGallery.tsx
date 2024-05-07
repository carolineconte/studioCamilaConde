'use client'
import Image from "next/image";
import SectionTitle from "../SectionTitle";
import { useState } from "react";
import { TiHeart } from "react-icons/ti";
import CardServicos from '@/components/CardServicos'

type Servico = {
  title: string;
  price: string;
  servicos?: string[];
}

function ServicosGallery() {

  const servicosMaquiagemPenteado = [
    {
      title: 'Maquiagem Básica',
      price: '50,00'
    },
    {
      title: 'Maquiagem Deluxe',
      price: '70,00'
    },
    {
      title: 'Maquiagem de Debutante',
      price: '80,00'
    },
    {
      title: 'Penteado Simples',
      price: '40,00'
    },
    {
      title: 'Penteado Elaborado',
      price: '60,00'
    },
    {
      title: 'Pacote Básico (Maquiagem Básica + Penteado Simples)',
      price: '80,00'
    },
    {
      title: 'Pacote Deluxe (Maquiagem Deluxe + Penteado Elaborado)',
      price: '120,00'
    },
  ];

  const servicosCabelos = [
    {
      title: 'Escova',
      price: '50,00'
    },
    {
      title: 'Cachos',
      price: '70,00'
    },
    {
      title: 'Corte Feminino',
      price: '80,00'
    },
    {
      title: 'Coloração',
      price: '40,00'
    },
    {
      title: 'Mechas',
      price: '60,00'
    },
    {
      title: 'Detox cachos',
      price: '80,00'
    },
    {
      title: 'Hidratação',
      price: '120,00'
    },
  ];

  const servicosNoiva = [
    {
      title: 'Noiva civil - Pacote Safira',
      servicos: [
        'Maquiagem resistente',
        'Penteado', 'Sobrancelha',
        'Robe para usar no local',
        'Fotos'
      ],
      price: '300,00'
    },
    {
      title: 'Noiva Religioso - Pacote Silver',
      servicos: [
        "Maquiagem resistente",
        "Penteado",
        "Robe da noiva",
        "Assistência para se vestir",
        "Fotos",
        "Manicure e pedicure"
      ],
      price: '500,00'
    },
    {
      title: 'Noiva civil - Pacote Rubi',
      servicos: [
        'Maquiagem teste',
        'Maquiagem resistente',
        'Penteado', 'Sobrancelha',
        'Robe para usar no local',
        'Fotos',
        'Manicure e pedicure'
      ],
      price: '400,00'
    },
    {
      title: 'Noiva Religioso - Pacote Bronze',
      servicos: [
        "Maquiagem resistente",
        "Penteado",
        "Robe da noiva",
        "Assistência para se vestir",
        "Fotos",
        "Manicure e pedicure"
      ],
      price: '800,00'
    },
    {
      title: 'Noiva civil - Pacote Esmeralda',
      servicos: ['Maquiagem pré wedding',
        'Penteado simples pré wedding',
        'Maquiagem resistente', 'Penteado',
        'Sobrancelha',
        'Robe para usar no local',
        'Fotos',
        'Manicure e pedicure'],
      price: '650,00'
    },
    {
      title: 'Noiva Religioso - Pacote Gold',
      servicos: [
        "Massagem relaxante",
        "Maquiagem pré wedding",
        "Maquiagem teste",
        "Maquiagem dia do casamento",
        "Penteado",
        "Penteado teste",
        "Sobrancelha",
        "Making Off",
        "Espaço para fotos",
        "Robe da Noiva",
        "Coffe Break",
        "Assistência para se vestir"
      ],
      price: '1000,00'
    },
  ];
  const [exibir, setExibir] = useState<Servico[]>(servicosMaquiagemPenteado);


  return (
    <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-full">
        <CardServicos setExibir={setExibir} src={'/maquiagem.jpg'} setar={servicosMaquiagemPenteado} text={'Maquiagem & Penteados'} />
        <CardServicos setExibir={setExibir} src={'/cabelos.jpg'} setar={servicosCabelos} text={'Cabelos'} />
        <CardServicos setExibir={setExibir} src={'/noiva.jpg'} setar={servicosNoiva} text={'Noivas'} />
      </div>

      <div id="valores" className="w-full mt-12">
        <SectionTitle sectionTitle="Valores" />
        <h2 className="text-sm font-thin block text-center my-1">(Clique na imagem para ver os valores relacionados)</h2>
        <div className="py-6 md:px-10 px-2 text-lg">
          {exibir.some(item => item.title === 'Noiva civil - Pacote Safira') ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {
                  servicosNoiva.map((pacote, index) => (
                    <div key={pacote.title} className="border border-primaryBlack rounded-lg p-4 w-full flex flex-col">
                      <h2 className="text-2xl text-center mb-3 font-semibold">{pacote.title}</h2>
                      <ul className="text-lg grow mb-5">
                        {pacote.servicos.map((servico, i) => (
                          <li key={servico} className="flex items-center gap-2 text-xl"><TiHeart className="text-rose" />{servico}</li>
                        ))}
                      </ul>
                      <p className="w-2/3 max-w-[150px] rounded text-lg mx-auto px-4 py-1 mt-auto font-bold bg-primaryBlack text-primaryWhite text-center">R$ {pacote.price}</p>
                    </div>
                  ))
                }
              </div>
              <div className="w-full mt-10">
                <p className="font-bold">Informações importantes</p>
                <ul className="list-disc	">
                  <li>Todos os pacotes podem ser personalizados com seu gosto pessoal.</li>
                  <li>Para fechamento do pacote e reservar data mediante pagamento de 30% do valor do pacote, restante pode ser pago ate data do casamento.</li>
                  <li>Em caso de cancelamento o adiantamento de reserva não será devolvido.</li>
                  <li>Podendo alterar data até 30 dias antes.</li>
                  <li>Robe dos pacotes é emprestado para o dia da noiva.</li>
                </ul>
              </div>
            </>
          ) : (
            <table className="w-full">
              <thead className="border-b border-primaryBlack text-left">
                <tr>
                  <th>Serviços</th>
                  <th className="w-[25%] text-right">Valor (R$)</th>
                </tr>
              </thead>
              <tbody>
                {exibir.map(servico => (
                  <tr key={servico.title} className="border-b ">
                    <td className="py-2">{servico.title}</td>
                    <td className="text-right">{servico.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
          }

        </div>
      </div>
    </div>
  )
}
// ALLE 11:00
export default ServicosGallery;