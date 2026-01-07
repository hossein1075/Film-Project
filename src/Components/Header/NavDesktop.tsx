import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSun } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { BsJustify } from "react-icons/bs";
import { Link } from 'react-router-dom';
function NavDesktop() {
  return (
    <nav>
        <div className="container">
            <div className='flex justify-between py-4'>
            <div className='flex'>
                <div className='flex'>
                    <img src="/Icons/Favicon/logo.png" alt="film-site" />
                    <span>کلاکت فیلم</span>
                </div>
                <ul className='flex'>
                     <li>
                        <Link to='#'>صفحه اصلی</Link>
                     </li>
                     <li>
                        <Link to='#' className='flex'>
                        <IoVideocamOutline />
                        فیلم
                        </Link>
                     </li>
                     <li>
                        <Link to='#'>سریال</Link>
                     </li>
                     <li>
                        <Link to='#' className='flex'>
                        <BsJustify />
                        صفحات اختصاصی کلاکت فیلم
                        </Link>
                     </li>
                </ul>
            </div>
            <div className='flex gap-2.5'>
                    <button className='bg-zinc-900 py-3.5 px-4 rounded-15px opacity-100 hover:opacity-90 transition-all delay-100 duration-300'>
                        <CiSun size={22}/>
                    </button>
                    <button className='bg-zinc-900 py-3.5 px-4 rounded-15px opacity-100 hover:opacity-90 transition-all delay-100 duration-300'>
                        <IoIosNotificationsOutline size={22}/>
                        {/* <span>1</span> */}
                    </button>
                    <button className='bg-zinc-900 py-3.5 px-4 rounded-15px opacity-100 hover:opacity-90 transition-all delay-100 duration-300'>
                        <IoSearchOutline size={22}/>
                    </button>
                <button className='font-Estedad-SemiBold text-sm bg-blue-700 py-3.5 px-4 rounded-15px opacity-100 hover:opacity-90 transition-all delay-100 duration-300'>ورود / عضویت</button>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default NavDesktop