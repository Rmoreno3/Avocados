import React from 'react'
import { Navbar } from 'components/Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer>Este es el Footer</footer>
    </div>
  )
}

export default Layout;