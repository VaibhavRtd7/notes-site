import React from 'react'

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer> Copyrights @{year}</footer>
  )
}

export default Footer