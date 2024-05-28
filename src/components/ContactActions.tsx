import React from 'react'
import { FaPhone, FaWhatsapp, FaShareSquare } from 'react-icons/fa'

const ContactActions: React.FC<{
  getQuote: boolean
}> = ({
  getQuote=false
}) => {
  const telephoneOpen = () => {
    window.open("tel:+919843044456", "_blank")
  }
  const whatsappOpen = () => {
    const phoneNumber = "+919843044456";
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink, "_blank");
  }
  const shareOpen = () => {
    // navigator.clipboard.writeText("post-link-comes-here")
  }
  return (
    <>
      <div id='contact-actions' className='float-right'>
        <FaPhone className='text-xl fa-phone' onClick={telephoneOpen} />
        <FaWhatsapp className='text-xl' onClick={whatsappOpen}/>
        <FaShareSquare className='text-xl' onClick={shareOpen} />
      </div>
    </>
  )
}

export default ContactActions;