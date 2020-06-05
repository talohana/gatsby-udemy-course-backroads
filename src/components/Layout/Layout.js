import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import './Layout.scss'

const Layout = props => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
