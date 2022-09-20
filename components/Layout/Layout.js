import React from 'react'
import { Navbar } from 'components/Navbar/Navbar';


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer className="container">Este es el Footer</footer>
      <style jsx>{`
        .container {
          background-color: salmon;
        }
      `}</style>
    </div>
  )
}

export default Layout;