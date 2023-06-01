import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="w-full h-12 flex justify-center items-center border-t">
      Powered by {""}
      <Image src="/vercel.svg" alt="VercelLogo" width="80" height="0" className="pl-3" />
    </footer>
  )
}

export default Footer
