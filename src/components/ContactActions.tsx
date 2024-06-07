import React from 'react'
import { BsSend } from "react-icons/bs";
import { FaWhatsapp } from 'react-icons/fa';
import { PiWhatsappLogo, PiPhone } from "react-icons/pi";


const ContactActions: React.FC<{
  getQuote: boolean
}> = ({
  getQuote=false
}) => {
  const telephoneOpen = () => {
    window.open("tel:+919600991871", "_blank")
  }
  const whatsappOpen = () => {
    const phoneNumber = "+919600991871";
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, "_blank");
  }
  const shareOpen = () => {
    // navigator.clipboard.writeText("post-link-comes-here")
  }
  return (
    <>
      <div id='contact-actions' className='float-right align-baseline'>
        <PiPhone className='text-xl contact-tab' onClick={telephoneOpen} />
        <FaWhatsapp className='text-xl contact-tab opacity-90' onClick={whatsappOpen}/>
        <BsSend className=' text-lg  contact-tab' onClick={shareOpen} />
      </div>
    </>
  )
}

export default ContactActions;