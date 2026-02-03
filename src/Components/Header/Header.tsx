import React from 'react'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'

function Header() {
  return (
    <header>
      <NavDesktop/>
      <NavMobile/>
    </header>
  )
}

export default Header