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
        <div>
            <div>
                <div>
                    <img src="/Icons/Favicon/logo.png" alt="film-site" />
                    <span>کلاکت فیلم</span>
                </div>
                <ul>
                     <li>
                        <Link to='#'>صفحه اصلی</Link>
                     </li>
                     <li>
                        <Link to='#'>
                        <IoVideocamOutline />
                        فیلم
                        </Link>
                     </li>
                     <li>
                        <Link to='#'>سریال</Link>
                     </li>
                     <li>
                        <Link to='#'>
                        <BsJustify />
                        صفحات اختصاصی کلاکت فیلم
                        </Link>
                     </li>
                </ul>
            </div>
            <div>
                <button>ورود / عضویت</button>
                    <button>
                        <IoSearchOutline />
                    </button>
                    <button>
                        <IoIosNotificationsOutline />
                        <span>1</span>
                    </button>
                    <button>
                        <CiSun />
                    </button>
            </div>
        </div>
    </nav>
  )
}

export default NavDesktop