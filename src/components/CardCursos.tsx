import { motion, useTransform } from "framer-motion"
import { useScroll } from 'framer-motion';
import { CiTimer, CiMoneyBill } from "react-icons/ci";
import { useRef } from "react";
import { PiGraduationCapThin, PiCertificateThin } from "react-icons/pi";
import Image from "next/image";
import { FiAlertCircle } from "react-icons/fi";


interface Props {
  title: string;
  img: string;
  duration: string;
  price: string;
  description: string;
  includes: string[];
  require: string;
  certificate: string;
  parcelamento?: string;
  promo?: string;
}

function CardCursos({ title, duration, price, description, includes, require, certificate, parcelamento, promo,img }: Props) {

  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])


  return (
    <motion.div ref={ref} style={{
      scale: scaleProgress,
      opacity: opacityProgress
    }} className="mb-3 sm:mb-8 last:mb-0 group text-left flex items-center justify-center">

      <section className="w-full px-2 py-5 md:py-10 md:px-10 md:mx-10 border-double border-4 border-rose shadow rounded  text-xl text-primaryBlack bg-rose/30">

        <h1 className="text-3xl text-center font-semibold">{title}</h1>
        <p className="font-light text-center md:px-10 mb-5">{description}</p>

        <div className="pt-2 w-full flex">

          <div className="grow  ">
            <div className="md:grid grid-cols-2 w-[100%]">
            <p className="flex items-center gap-2"><CiTimer /> <strong>Duração:</strong> {duration}</p>
            <p className="flex items-center gap-2"><CiMoneyBill /><strong>Valor:</strong> {price}</p>
            <p className="flex flex-wrap items-center gap-2"><PiGraduationCapThin /> <strong>Pré-requisitos:</strong>{require}</p>
            <p className="items-center gap-2 flex"><PiCertificateThin /> <strong>Certificado:</strong>{certificate}</p>
            {parcelamento && <div className="flex flex-col">
            <p className="md:items-center flex gap-2"><FiAlertCircle /><strong>Parcelamento:</strong> {parcelamento}</p>
            <span className="-mt-2 text-[.8rem]">com taxa da maquininha</span>
            </div>}
            {promo && <p className="flex items-start md:items-center gap-2"><FiAlertCircle /><strong>Promoção:</strong> {promo}</p>}
            </div>
            <p className="mt-5"><strong>O que voce irá aprender:</strong></p>
            <ul className="px-10 list-disc">
              {includes.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <Image src={img} width={100} height={100} quality={95} loading="lazy" alt="Foto modelo maquiagem"
            className="hidden md:w-[250px] rounded object-cover shadow-2xl md:block" />

        </div>
      </section>

    </motion.div>
  )
}

export default CardCursos;