import React from 'react'
import { FaPhone, FaWhatsapp, FaShareSquare } from 'react-icons/fa'

const ContactActions = () => {
  return (
    <>
      <FaPhone className='text-2xl fa-phone' />
      <FaWhatsapp className='text-2xl'/>
      <FaShareSquare className='text-2xl' />
    </>
  )
}

export default ContactActions;