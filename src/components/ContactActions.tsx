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
    {
      getQuote && <>
        <a href="#" className='float-right text-sm mr-4 border border-gray-600 px-2 rounded'>
          Get Quote
        </a>
      </>
    }
      <div style={{display:"flex", gap: "1rem", marginTop: "1rem", marginLeft: "1rem"}}>
        <FaPhone className='text-2xl fa-phone' onClick={telephoneOpen} />
        <FaWhatsapp className='text-2xl' onClick={whatsappOpen}/>
        <FaShareSquare className='text-2xl' onClick={shareOpen} />
      </div>
    </>
  )
}

export default ContactActions;