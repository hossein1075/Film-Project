import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa6";

function NavMobile() {
  return (
    <nav className='block lg:hidden'>
        <div className="container">
            <div className='flex justify-between py-4'>
              <div className='flexCenter'>
                <FaBars size={22}/>
              </div>
                <div className='flexCenter gap-1'>
                    <img src="/Icons/Favicon/logo.png" className='size-10' alt="film-site" />
                    <span className='font-Estedad-Bold'>کلاکت فیلم</span>
                </div>
               
            <div className='flex gap-2.5'>
                    <button className='relative bg-zinc-900 light:bg-white light:*:text-blue-500 py-3.5 px-4 rounded-15px opacity-100 hover:opacity-90 transition-all delay-100 duration-300 group'>
                        <IoIosNotificationsOutline size={22}/>
                        <span className='absolute -top-2 -right-2 flexCenter size-3.5 font-Estedad-SemiBold text-xs bg-blue-700 rounded-full opacity-100 group-hover:opacity-90 transition-all delay-100 duration-300'>1</span>
                    </button>
                    <button className='bg-zinc-900 light:bg-white light:*:text-blue-500 py-3.5 px-4 rounded-15px opacity-100 hover:opacity-90 transition-all delay-100 duration-300'>
                        <IoSearchOutline size={22}/>
                    </button>
                
            </div>
        </div>
        </div>
    </nav>
  )
}

export default NavMobile