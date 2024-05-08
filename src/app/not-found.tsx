import Image from "next/image";
import Link from "next/link";

import { RiArrowGoBackLine } from "react-icons/ri";

export default function NotFound() {
  return (
    <div className="w-full h-[100vh] font-['Abhaya_Libre'] bg-primaryBlack flex flex-col justify-center items-center text-primaryWhite">

      <Image src={'/404.png'} width={500} height={500} quality={95} alt='Erro 404' />

      <p className="text-[3em]">Página não encontrada</p>
      <Link className="bg-primaryWhite text-primaryBlack py-2 px-6 rounded font-bold text-lg mt-6 flex items-center gap-3" href={'/'}> <RiArrowGoBackLine /> Voltar pagina inicial</Link>

    </div>
  )
}