import React from 'react'
import { FaPhone, FaWhatsapp, FaShareSquare } from 'react-icons/fa'

const ContactActions: React.FC<{
  getQuote: boolean
}> = ({
  getQuote=false
}) => {
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
        <FaPhone className='text-2xl fa-phone' />
        <FaWhatsapp className='text-2xl'/>
        <FaShareSquare className='text-2xl' />
      </div>
    </>
  )
}

export default ContactActions;