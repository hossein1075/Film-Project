import React from 'react'
import { FaPlay } from 'react-icons/fa6'
import './befores.css'

function HeaderSlide() {
  return (
    <>
    <div className='direction-ltr relative'>
             <div className="container-sec px-4 relative">
               <span className='relative inline-block bg-black/45 rounded-xl py-2.5 px-3.5 z-40 text-13px mb-5'>
                TV-MA
              </span>
          
                <div className='relative z-40'>
                <h2 className='font-sans font-bold text-4xl mb-2'>
                  The Witcher
                </h2>
               <span className='flexCenter bg-yellow-400 px-2.5 rounded-md max-w-15 text-black font-Estedad-Bold text-sm tracking-tight mt-4'>IMBD</span>
               <div>
                <span className='font-Estedad-Bold text-28px'>4.5</span>
                <span className='text-13px font-Estedad-Bold'>/10</span>
               </div>
              </div>
              <div className='absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-circle text-28px bg-white/20 size-17 flexCenter rounded-[50%] hover:transform hover:scale-125 backdrop-blur-[5px] transition-all duration-150 delay-300'>
                <FaPlay className='#fff'/>
              </div>
           
    
              <img className='absolute -top-21 left-0 z-10 object-cover h-185 w-full' src="" alt="image films" />
             </div>
            </div>
    </>
  )
}

export default HeaderSlide