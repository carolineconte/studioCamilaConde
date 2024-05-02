'use client'
import Image from "next/image"
import Link from "next/link"
import MenuIcon from '@/components/icons/MenuIcon'
import { useState } from "react"
import { usePathname } from "next/navigation"

function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Header Desktop */}
      <header className="z-50 hidden md:block fixed bg-primaryBlack w-full md:px-12 xl:px-64">
        <nav className=" w-full">
          <ul className="text-primaryWhite flex justify-center items-center gap-12">
            <Link className={`${pathname === '/' ? 'active' : ''} navLinkDesktop`} href="/">Home</Link>
            <Link className={`${pathname.startsWith('/servicos') ? 'active' : ''} navLinkDesktop`} href={'/servicos'}>Serviços</Link>
            <Image src='/logo.svg' width={100} height={50} alt="logo studio" ></Image>
            <Link className={`${pathname.startsWith('/makefoto') ? 'active' : ''} navLinkDesktop`} href='/makefoto'>Make + Foto</Link>
            <Link className={`${pathname.startsWith('/cursos') ? 'active' : ''} navLinkDesktop`} href={'/cursos'}>Cursos</Link>
          </ul>
        </nav>
      </header>
      {/* Header mobile */}
      <header className="md:hidden z-40 fixed bg-primaryBlack w-full px-6">
        <div className="flex justify-between items-center py-2">
          <Image className="w-16" src='/logo.svg' width={50} height={50} alt="logo studio" />
          <button className="text-white text-lg"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}><MenuIcon className={'w-6 h-6 text-white '} />
          </button>
        </div>

        <nav onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className={mobileNavOpen ? 'fixed right-0 left-0' : 'hidden'}>

          <ul className="text-primaryWhite flex flex-col bg-black text-center">
            <Link className="navLinkMobile"  href="/">Home</Link>
            <Link className="navLinkMobile" href={'#'}>Serviços</Link>
            <Link className="navLinkMobile" href='/makefoto'>Make + Foto</Link>
            <Link className="navLinkMobile" href='/cursos'>Cursos</Link>
          </ul>
        </nav>
      </header>

    </>
  )
}

export default Navbar