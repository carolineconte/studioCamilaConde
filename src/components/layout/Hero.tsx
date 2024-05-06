import Image from "next/image"

function Hero() {
  return (
    <section className="pt-14 w-full relative bg-primaryBlack pb-6 
    md:bg-transparent md:pt-10">
      <Image src="/fotoHero.jpg" width={1000} height={1000} priority={true}  loading="eager"
        alt="Foto perfil Camila"
        className="w-full object-cover lg:h-[80vh] md:pt-10 lg:pt-8"
        />
        <Image src="/testeLogo.png" width={500} height={500} priority={true}  loading="eager"
          alt="Logo Studio Camila"
          className="w-3/4 m-auto p-2 md:absolute
          md:w-[40%] md:right-10 md:top-[25%]" />
    </section>
  )
}

export default Hero