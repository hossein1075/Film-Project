import React from 'react'
import { CiSun } from 'react-icons/ci'
import { IoMoonOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import useTheme from '../useTheme/UseTheme'

function SideBar() {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className='w-100 fixed top-0 h-full bg-black'>

      <div className='flexCenter gap-1'>
        <img src="/Icons/Favicon/logo.png" className='size-10' alt="film-site" />
        <span className='font-Estedad-Bold'>کلاکت فیلم</span>
      </div>

      <div>
        <ul>
          <li>
            <Link to=''>فیلم</Link>
          </li>
          <li>
            <Link to=''>سریال</Link>
          </li>
          <li>
            <Link to=''>بهترین های IMDB</Link>
          </li>
          <li>
            <Link to=''>لیست های کاربران</Link>
          </li>
          <li>
            <Link to=''>بازیگران</Link>
          </li>
          <li>
            <Link to=''>کالکشن</Link>
          </li>
          <li>
            <Link to=''>باکس آفیس</Link>
          </li>
        </ul>
      </div>

      <div>
        <button className='font-Estedad-SemiBold text-xs xl:text-sm bg-blue-950 py-3.5 px-4 rounded-15px'>ورود</button>
        <button className='font-Estedad-SemiBold text-xs xl:text-sm bg-blue-950 py-3.5 px-4 rounded-15px'>عضویت</button>
        <button onClick={toggleTheme} className='*:text-blue-500 py-3.5 px-4 rounded-15px'>
          {theme === 'dark' ? <CiSun size={22} /> : <IoMoonOutline size={18} />}
        </button>
      </div>

    </div>
  )
}

export default SideBar