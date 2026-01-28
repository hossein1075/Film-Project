import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSun } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
import { IoVideocamOutline } from "react-icons/io5";
import { BsJustify } from "react-icons/bs";
import { Link } from 'react-router-dom';
import useTheme from '../useTheme/UseTheme';
import { RiArrowDownSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
function NavDesktop() {
    const {theme, toggleTheme} = useTheme()
  return (
    <nav>
        <div className="container">
            <div className='flex justify-between py-4'>
            <div className='flex basis-[70%] gap-5'>
                <div className='flexCenter gap-1'>
                    <img src="/Icons/Favicon/logo.png" className='size-10' alt="film-site" />
                    <span className='font-Estedad-Bold'>کلاکت فیلم</span>
                </div>
                <ul className='flexCenter gap-3.75'>
                     <li>
                        <Link to='#'>صفحه اصلی</Link>
                     </li>
                     <li>
                        <Link to='#' className='flexCenter gap-0.5'>
                        <IoVideocamOutline />
                        فیلم
                        <RiArrowDownSLine/>
                        </Link>
                        {/* subMenu */}
                        {/* <div>
                            <ul>
                                <li>
                                    <Link to='#'>اکشن</Link>
                                </li>
                                <li>
                                    <Link to='#'>کمدی</Link>
                                </li>
                                <li>
                                    <Link to='#'>
                                    مشاهده همه فیلم‌ها 
                                    <MdOutlineKeyboardArrowLeft />
                                    </Link>
                                </li>
                            </ul>
                        </div> */}
                     </li>
                     <li>
                        <Link to='#' className='flexCenter gap-0.5'>
                        سریال
                        <RiArrowDownSLine/>
                        </Link>
                        {/* subMenu */}
                         {/* <div>
                            <ul>
                                <li>
                                    <Link to='#'>اکشن</Link>
                                </li>
                                <li>
                                    <Link to='#'>درام</Link>
                                </li>
                                <li>
                                    <Link to='#'>جنایی</Link>
                                </li>
                                <li>
                                    <Link to='#'>رازآلود</Link>
                                </li>
                                <li>
                                    <Link to='#'>اجتماعی</Link>
                                </li>
                                <li>
                                    <Link to='#'>
                                    مشاهده همه سریال‌ها 
                                    <MdOutlineKeyboardArrowLeft />
                                    </Link>
                                </li>
                            </ul>
                        </div> */}
                     </li>
                     <li>
                        <Link to='#' className='flexCenter gap-0.5'>
                        <BsJustify />
                        صفحات اختصاصی کلاکت فیلم
                        <RiArrowDownSLine/>
                        </Link>
                        {/* subMenu */}
                         {/* <div>
                            <ul>
                                <li>
                                    <span className='beforeList'></span>
                                    <Link to='#'>250 فیلم برتر imdb</Link>
                                </li>
                                <li>
                                    <span className='beforeList'></span>
                                    <Link to='#'>250 سریال برتر imdb</Link>
                                </li>
                                <li>
                                    <span className='beforeList'></span>
                                    <Link to='#'>فیلم های coming soon!</Link>
                                </li>
                                <li>
                                    <span className='beforeList'></span>
                                    <Link to='#'>لیست بازیگران</Link>
                                </li>
                                <li>
                                    <span className='beforeList'></span>
                                    <Link to='#'>لیست های کاربران</Link>
                                </li>
                                <li>
                                    <span className='beforeList'></span>
                                    <Link to='#'>کالکشن</Link>
                                </li>
                                <li>
                                    <span className='beforeList'></span>
                                    <Link to='#'>ورود/ عضویت پیامکی</Link>
                                </li>
                                <li>
                                    <span className='beforeList'></span>
                                    <Link to='#'>ورود به سایت</Link>
                                </li>
                                <li>
                                    <span className='beforeList'></span>
                                    <Link to='#'>عضویت در سایت</Link>
                                </li>
                                <li>
                                    <span className='beforeList'></span>
                                    <Link to='#'>فراموشی رمز عبور</Link>
                                </li>
                                <li>
                                    <span className='beforeList'></span>
                                    <Link to='#'>پنل کاربری</Link>
                                </li>
                                <li>
                                    <span className='beforeList'></span>
                                    <Link to='#'>وبلاگ</Link>
                                </li>
                            </ul>
                        </div> */}
                     </li>
                </ul>
            </div>
            <div className='flex gap-2.5'>
                    <button onClick={toggleTheme} className='bg-zinc-900 light:bg-white light:*:text-blue-500 py-3.5 px-4 rounded-15px opacity-100 hover:opacity-90 transition-all delay-100 duration-300'>
                        {theme === 'dark' ? <CiSun size={22}/> : <IoMoonOutline size={18}/>}
                    </button>
                    <button className='relative bg-zinc-900 light:bg-white light:*:text-blue-500 py-3.5 px-4 rounded-15px opacity-100 hover:opacity-90 transition-all delay-100 duration-300 group'>
                        <IoIosNotificationsOutline size={22}/>
                        <span className='absolute -top-2 -right-2 flexCenter size-5 font-Estedad-SemiBold text-xs bg-blue-700 rounded-5px opacity-100 group-hover:opacity-90 transition-all delay-100 duration-300'>1</span>
                    </button>
                    <button className='bg-zinc-900 light:bg-white light:*:text-blue-500 py-3.5 px-4 rounded-15px opacity-100 hover:opacity-90 transition-all delay-100 duration-300'>
                        <IoSearchOutline size={22}/>
                    </button>
                <button className='font-Estedad-SemiBold text-sm bg-blue-700 light:bg-white light:text-blue-500 py-3.5 px-4 rounded-15px opacity-100 hover:opacity-90 transition-all delay-100 duration-300'>ورود / عضویت</button>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default NavDesktop