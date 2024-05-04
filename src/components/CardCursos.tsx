import { motion, useTransform } from "framer-motion"
import { useScroll } from 'framer-motion';
import { CiTimer, CiMoneyBill } from "react-icons/ci";
import { useRef } from "react";
import { PiGraduationCapThin, PiCertificateThin } from "react-icons/pi";
import Image from "next/image";


interface Props {
  title: string;
  duration: string;
  price: string;
  description: string;
  includes: string[];
  require: string;
  certificate: string;
}

function CardCursos({ title, duration, price, description, includes, require, certificate }: Props) {

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

      <section className="w-full p-2 md:w-[90%] md:p-10 border-double border-4 border-rose shadow rounded  text-xl text-primaryBlack bg-rose/30">

        <h1 className="text-3xl text-center font-semibold">{title}</h1>
        <p className="font-light text-center mb-5">{description}</p>

        <div className="pt-2 w-full md:flex">

          <div className="md:w-[60%] grow flex flex-col">
            <p className="inline-block items-center gap-2 md:flex"><CiTimer /> <strong>Duração:</strong> {duration}</p>
            <p className="inline-block items-center gap-2 md:flex"><CiMoneyBill /><strong>Valor:</strong> {price}</p>
            <p className="inline-block items-center gap-2 md:flex"><PiGraduationCapThin /> <strong>Pré-requisitos:</strong>{require}</p>
            <p className="items-center gap-2 inline-block md:flex"><PiCertificateThin /> <strong>Certificado de Conclusão:</strong>{certificate}</p>
            <p className="mt-5"><strong>O que voce irá aprender:</strong></p>
            <ul className="px-10 list-disc	">
              {includes.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <Image src='/1.jpg' width={100} height={100} quality={95} loading="lazy" alt=""
            className="rounded max-w-[100%] object-cover grow hidden shadow-2xl md:block" />
        </div>

      </section>

    </motion.div>
  )
}

export default CardCursos;