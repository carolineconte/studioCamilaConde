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
      title: 'Noiva Básica',
      servicos: ['Maquiagem blindada', 'Penteado', 'Auxílio para Vestir', 'Robe para usar no local'],
      price: '50,00'
    },
    {
      title: 'Noiva Clássica',
      servicos: ['Maquiagem blindada', 'Penteado', 'Design de sobrancelha', 'Auxílio para Vestir', 'Robe para usar no local'],
      price: '60,00'
    },
    {
      title: 'Noiva Completa',
      servicos: ['Maquiagem blindada', 'Penteado', 'Teste de maquiagem e penteado', 'Auxílio para Vestir', 'Robe para usar no local'],
      price: '70,00'
    },
    {
      title: 'Noiva Premium',
      servicos: ['Maquiagem blindada', 'Penteado', 'Teste de maquiagem e penteado', 'Design de sobrancelha', 'Auxílio para Vestir', 'Fotos no local'],
      price: '80,00'
    }
  ];
  const [exibir, setExibir] = useState<Servico[]>(servicosMaquiagemPenteado);


  return (
    <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-24">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-full">
        <CardServicos setExibir={setExibir} src={'/maquiagem.jpg'} setar={servicosMaquiagemPenteado} text={'Maquiagem & Penteados'} />
        <CardServicos setExibir={setExibir} src={'/cabelos.jpg'} setar={servicosCabelos} text={'Cabelos'} />
        <CardServicos setExibir={setExibir} src={'/noiva.jpg'} setar={servicosNoiva} text={'Noivas'} />
      </div>

      <div id="valores" className="w-full mt-12">
        <SectionTitle sectionTitle="Valores" />
        <h2 className="text-sm font-thin block text-center my-1">(Clique na imagem para ver os valores relacionados)</h2>
        <div className="py-6 md:px-10 px-2 text-lg">
          {exibir.some(item => item.title === 'Noiva Básica') ? (
            // Se exibir contém pacotes de serviços de noiva
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {
                servicosNoiva.map((pacote, index) => (
                  <div key={pacote.title} className="border border-primaryBlack rounded-lg p-4 w-full flex flex-col">
                    <h2 className="text-2xl text-center mb-3 font-semibold">{pacote.title}</h2>
                    <ul className="text-lg grow">
                      {pacote.servicos.map((servico, i) => (
                        <li key={servico} className="flex items-center"><TiHeart className="text-rose" />{servico}</li>
                      ))}
                    </ul>
                    <p className="w-1/2 rounded text-lg mx-auto px-4 py-1 mt-auto font-bold bg-primaryBlack text-primaryWhite text-center">R$ {pacote.price}</p>
                  </div>
                ))
              }
            </div>
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