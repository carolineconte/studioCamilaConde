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
    <header className="z-40 fixed bg-primaryBlack w-full left-0 right-0">
      <div className='flex justify-between items-center py-2 px-10 md:hidden'>
        <Link href="/"><Image className="w-16" src='/logo.svg' width={50} quality={90} height={50} alt="logo studio" /></Link>
        <button className="text-white text-lg" name="Botao para abrir menu"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}><MenuIcon className={'w-6 h-6 text-white '} />
        </button>
      </div>

      <nav className={`${mobileNavOpen ? 'fixed right-0 left-0' : 'hidden md:block md:w-full'}`}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <ul className="text-primaryWhite flex flex-col bg-black  text-center md:flex-row md:justify-center md:items-center md:gap-12">
          <li><Link className={`${pathname === '/' ? 'active' : ''} navLink`} href="/">Home</Link></li>
          <li><Link className={`${pathname.startsWith('/servicos') ? 'active' : ''} navLink`} href={'/servicos'}>Serviços</Link></li>
          <li><Image className="hidden md:block" src='/logo.svg' quality={95} width={90} height={50} alt="logo studio" /></li>
          <li><Link className={`${pathname.startsWith('/makefoto') ? 'active' : ''} navLink`} href='/makefoto'>Make + Foto</Link></li>
          <li><Link className={`${pathname.startsWith('/cursos') ? 'active' : ''} navLink`} href={'/cursos'}>Cursos</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar