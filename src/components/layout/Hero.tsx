import Image from "next/image"

function Hero() {
  return (
    <section className="pt-14 w-full relative bg-primaryBlack">
      <Image src="/fotoHero.jpg" width={1500} height={1000    }
        alt="Foto perfil Camila"
        className="w-full object-cover xl:h-[90vh] md:pt-10"
        />
        <Image src="/testeLogo.png" width={500} height={500}
          alt="Logo Studio Camila"
          className="w-3/4 mx-auto top-[70%] p-2 right-[12%]
          md:w-[40%] md:right-10 md:top-[25%]" />
    </section>
  )
}

export default Hero