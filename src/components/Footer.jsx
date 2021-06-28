import React from "react"

let currentYear = new Date().getFullYear()

function Footer() {
  return <footer>Copyrights &copy; {currentYear}</footer>
}

export default Footer
