import Link from 'next/link'
import React from 'react'

const GetQuote = () => {
  return (
  <>
  <Link href={'/getquoteform'}>
    <div className='get-quote '>
        <div className="text-right">
          <h1 className='text-sm mr-2'>Get Quote &gt;</h1>
        </div>
    </div>
  </Link>
  </>
  )
}

export default GetQuote