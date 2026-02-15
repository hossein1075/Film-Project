import React from 'react'
import { CiSun } from 'react-icons/ci'
import { IoMoonOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import useTheme from '../useTheme/UseTheme'

function SideBar() {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className='hidden w-[70%] fixed top-0 h-full bg-zinc-900 z-50 light:bg-slate-50'>

      <div className='flexCenter gap-1'>
        <img src="/Icons/Favicon/logo.png" className='size-10' alt="film-site" />
        <span className='font-Estedad-Bold text-white my-5'>کلاکت فیلم</span>
      </div>

      <div className='pb-4'>
        <ul>
          <li className='border-solid border-zinc-800 light:border-blue-100 border-b-2 text-neutral-300 light:text-slate-500 text-sm p-3.25'>
            <Link to='#'>فیلم</Link>
          </li>
          <li className='border-solid border-zinc-800 light:border-blue-100 border-b-2 text-neutral-300 light:text-slate-500 text-sm p-3.25'>
            <Link to='#'>سریال</Link>
          </li>
          <li className='border-solid border-zinc-800 light:border-blue-100 border-b-2 text-neutral-300 light:text-slate-500 text-sm p-3.25'>
            <Link to='#'>بهترین های IMDB</Link>
          </li>
          <li className='border-solid border-zinc-800 light:border-blue-100 border-b-2 text-neutral-300 light:text-slate-500 text-sm p-3.25'>
            <Link to='#'>لیست های کاربران</Link>
          </li>
          <li className='border-solid border-zinc-800 light:border-blue-100 border-b-2 text-neutral-300 light:text-slate-500 text-sm p-3.25'>
            <Link to='#'>بازیگران</Link>
          </li>
          <li className='border-solid border-zinc-800 light:border-blue-100 border-b-2 text-neutral-300 light:text-slate-500 text-sm p-3.25'>
            <Link to='#'>کالکشن</Link>
          </li>
          <li className='border-solid border-zinc-800 light:border-blue-100 border-b-2 text-neutral-300 light:text-slate-500 text-sm p-3.25'>
            <Link to='#'>باکس آفیس</Link>
          </li>
        </ul>
      </div>

      <div className='bg-zinc-800 light:bg-white absolute bottom-0 w-full mt-5 flex flex-col sm:flex-row items-center gap-2.5 p-2.5'>
        <div className='w-full flex flex-col xs300px:flex-row gap-2.5 flex-1'>
          <button className='font-Estedad-SemiBold xl:text-sm bg-blue-950 py-2 px-5 rounded-4xl text-sm w-full mx-0.5'>ورود</button>
          <button className='font-Estedad-SemiBold xl:text-sm bg-blue-950 py-2 px-5 rounded-4xl text-sm w-full mx-0.5'>عضویت</button>
        </div>
        <button onClick={toggleTheme} className='*:text-blue-500 border-solid border-blue-700 border-2 rounded-full size-10 flexCenter'>
          {theme === 'dark' ? <CiSun size={22} /> : <IoMoonOutline size={18} />}
        </button>
      </div>

    </div>
  )
}

export default SideBar