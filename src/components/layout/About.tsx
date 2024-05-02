import Image from "next/image";
import SectionTitle from "../SectionTitle";

export default function About() {

  return (
    <section className="mt-6 p-3 mx-auto md:p-0 md:w-[90%]  lg:w-[85%]">
      <SectionTitle sectionTitle={'Quem sou eu?'} />
      <div className="bg-[url('/aboutMobile.jpg')] bg-primaryBlack h-[40vh] bg-center bg-no-repeat rounded-lg mt-3 relative 
      md:flex md:px-3 md:bg-none md:bg-transparent md:justify-between xl:h-[60vh] gap-6">
        <Image className="hidden object-cover object-top md:block xl:w-5/12 h-full md:rounded-lg" src='/aboutDesktop.jpg' height={90} width={200} alt="" />
        <div>
          <p className="text-white text-[1.1rem] text-center px-6 absolute bottom-2 text-md	font-['Tenor_Sans']
          md:bg-primaryBlack md:w-full md:h-full md:static md:p-6 md:rounded-lg">
            Com uma abordagem personalizada e foco em realçar sua beleza natural
            Com uma abordagem personalizada e foco em realçar sua beleza natural
          </p>
        </div>

      </div>
    </section>
  )
}