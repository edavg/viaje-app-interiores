import React from 'react'

const Footer = () => {
    const año = new Date().getFullYear();
  
    return (
      <div>
          <h3>&copy; Eduardo Villamayor {año}</h3>
      </div>
    )
  }
  
  export default Footer;