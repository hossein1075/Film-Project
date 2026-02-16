import React from 'react'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'
import HeaderSlide from './HeaderSlide'



function Header() {
  return (
    <header className='relative h-185'>
      <div className='container-sec'>
        <NavDesktop />
        <NavMobile />
        <HeaderSlide/>

        <div>
          <div className='w-[175px] h-[240px]'>
            <img src="/Images/header/bg-1.webp" alt="image films" />
            {/* <div></div> */}
            <div>
              <span>IMBD 7.9</span>
              <span>دوبله فارسی</span>
            </div>
              <h2>دانلود سریال  The Witcher</h2>
            <div>
              <h3>The Witcher</h3>
              <div>اکشن • دارم</div>
              <button>تماشا کنید</button>
            </div>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header