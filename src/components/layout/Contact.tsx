import { FaTiktok, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


function Contact() {
  return (
    <address className="bg-primaryBlack text-primaryWhite mt-12 p-6 text-center text-xl font-light">
      <p className="font-bold">Localização:</p>
      <a href="https://maps.app.goo.gl/hY8bn8NL7DCRPCt28"
        className="border-b border-primaryWhite py-1 px-2 hover:bg-primaryWhite/20 hover:rounded"
      >Rua Cabo verde, 658
      </a>
      <p className="mt-3"><strong>Tijuca, Campo Grande - MS</strong></p>
      <p className="font-bold mt-6">Horário:</p>
      <p>Segunda a Sábado - 8h às 19h</p>
      <div className="flex gap-2 my-6 w-full justify-center">
        <a className="linkFooter" href=""><FaTiktok /></a>
        <a className="linkFooter" href=""><FaInstagram /></a>
        <a className="linkFooter" href=""><IoLogoWhatsapp /></a>
      </div>
    </address>
  )
}

export default Contact;