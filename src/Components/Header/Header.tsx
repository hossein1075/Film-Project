import React from 'react'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'
import { CiPlay1 } from "react-icons/ci";


function Header() {
  return (
    <header>
      <div className='container'>
        <NavDesktop />
        <NavMobile />
        <div>
          <span>
            TV-MA
          </span>
          <div>
            <h2>
              The Witcher
            </h2>
           <span>IMBD</span>
           <div>
            <span>4.5</span>
            <span>/10</span>
           </div>
          </div>
          <div>
            <CiPlay1 />
          </div>

          {/* <img src="/Images/header/bg-1.webp" alt="image films" /> */}
        </div>

      </div>
    </header>
  )
}

export default Header