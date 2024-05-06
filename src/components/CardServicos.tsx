import Image from "next/image";


type Servico = {
  title: string;
  price: string;
  servicos?: string[];
} 

interface CardServicosProps {
  setExibir: React.Dispatch<React.SetStateAction<Servico[]>>;
  src: string;
  setar: Servico[];
  text: string;
}


function CardServicos({ setExibir, src, setar,text }: CardServicosProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow cursor-pointer"
      onClick={() => setExibir(setar)}>
      <Image loading="lazy" width={150} height={100} quality={95} src={src} alt="" className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
      <h3 className="z-10 text-2xl font-bold text-white absolute bottom-0 left-0 right-0 text-center xs:text-xl md:text-4xl transform">{text}</h3>
    </div>
  )
}

export default CardServicos;