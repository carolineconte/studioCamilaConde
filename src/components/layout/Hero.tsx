import Image from "next/image"

function Hero() {
  return (
    <section className="pt-14 w-full relative bg-primaryBlack pb-6 md:bg-transparent md:pt-10">
      <Image src="/fotoHero.jpg" width={1500} height={1000    }
        alt="Foto perfil Camila"
        className="w-full object-cover xl:h-[90vh] md:pt-10"
        />
        <Image src="/testeLogo.png" width={500} height={500}
          alt="Logo Studio Camila"
          className="w-3/4 m-auto p-2 md:absolute
          md:w-[40%] md:right-10 md:top-[25%]" />
    </section>
  )
}

export default Hero