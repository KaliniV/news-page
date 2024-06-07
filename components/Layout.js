
import Navbar from './Navbar'
import Link from 'next/link'
import Head from 'next/head'

import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
    <Head>
      <link rel="shortcut icon" href="/images/ico.ico" />
      <title>News</title>
    </Head>
    <Navbar />
    <main className="main-container">{children}</main>
    <Footer />
  </>
  )
}