import { FaTiktok, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


function Footer() {
  return (
    <footer className="bg-primaryBlack text-primaryWhite mt-12 p-6 flex items-center justify-between md:px-12">

      {/* <form className="hidden md:block grow max-w-[400px] md:w-1/2">
        <p className="mb-1 text-lg border-b mb-2">Entre em contato:</p>
        <label className="labelFooter">Email:</label>
        <input className="inputFooter" type="text" placeholder="Email" />
        <label className="labelFooter">Mensagem:</label>
        <textarea className="inputFooter" placeholder="Mensagem" rows={3}></textarea>
      </form> */}

      {/* <div className="grow flex flex-col w-full items-center md:flex-row"> */}
        <div className="grow text-center lg:text-left mb-6">
          <p className="text-lg">Localização:</p>
          <a href="">Rua Cabo verde, 658 </a>
          <p><strong>Campo Grande - MS</strong></p>
        </div>
        <div className="flex gap-2 justify-end">
          <a className="linkFooter" href=""><FaTiktok /></a>
          <a className="linkFooter" href=""><FaInstagram /></a>
          <a className="linkFooter" href=""><IoLogoWhatsapp /></a>
        </div>
      {/* </div> */}
    </footer>
  )
}

export default Footer;