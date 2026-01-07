import React from 'react'
import { CiSun } from 'react-icons/ci'

function ButtonNav() {
    return (
        <button className='bg-zinc-900 py-3.5 px-4 rounded-15px opacity-100 hover:opacity-90 transition-all delay-100 duration-300'>
            <CiSun size={22} />
        </button>
    )
}

export default ButtonNav