import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import React, { Children } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children,title="HP by Nextjs"}:any) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-fray-600 text-sm font-mono">
      <title>{title}</title>
      <header>
        <Navbar />
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
