import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Home
              </Link>
              <Link href="/blog-page" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Blog
              </Link>
              <Link href="/contact-page" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Contact
              </Link>
            </div>
          </div>
        </nav>
  )
}

export default Navbar
