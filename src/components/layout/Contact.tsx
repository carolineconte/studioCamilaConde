'use client'
import { useEffect, useState } from "react";
import { FaTiktok, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


function Contact() {

  const [statusAbertura, setStatusAbertura] = useState('')


  useEffect(() => {
    let agora = new Date(); // Obtém a data e hora atual
    let options = { timeZone: 'America/Campo_Grande' }

    // Obtém as horas no fuso horário do MS
    let horasMS = new Date(agora.toLocaleString('en-US', options)).getHours();
    console.log(horasMS)
    let hrAbre = 8;
    let hrFecha = 18;

    if (horasMS >= hrAbre && horasMS < hrFecha) {
      setStatusAbertura('Aberto');
    } else {
      setStatusAbertura('Fechado');
    }
  }, []);


  return (
    <address className="bg-primaryBlack text-primaryWhite mt-12 -mb-12 p-6 text-center text-xl font-light not-italic	">
      <p className="font-bold">Localização:</p>
      <a href="https://maps.app.goo.gl/hY8bn8NL7DCRPCt28" aria-label="Link para localizacao"
        className="border-b border-primaryWhite py-1 px-2 hover:bg-primaryWhite/20 hover:rounded"
      >Rua Cabo verde, 658
      </a>
      <p className="mt-3"><strong>Tijuca, Campo Grande - MS</strong></p>
      <p className="font-bold mt-6">Horário:</p>
      <p>Segunda a Sábado - 8h às 19h</p>
      {statusAbertura && <p className={`${statusAbertura === 'Aberto' ? 'text-green-700' : 'text-red-700'} font-bold `}>{`${statusAbertura}`}</p>}
      <div className="flex gap-2 my-6 w-full justify-center">
        <a className="linkFooter" aria-label="Acessar TikTok @studiocamilaconde" target="_blank" href={'https://www.tiktok.com/@studiocamilaconde?_t=8m807W6Dfm9&_r=1'}><FaTiktok /></a>
        <a className="linkFooter" aria-label="Acessar Instagram @studiocamilaconde" target="_blank" href={'https://www.instagram.com/studiocamilaconde/'}><FaInstagram /></a>
        <a className="linkFooter" aria-label="Enviar mensagem Whatsapp" target="_blank" href={'https://api.whatsapp.com/send/?phone=5567991697056&text&type=phone_number&app_absent=0'}><IoLogoWhatsapp /></a>
      </div>
    </address>
  )
}

export default Contact;