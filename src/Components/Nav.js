import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import {AiOutlineInfoCircle} from 'react-icons/ai'


function Nav() {
  return (
    <nav className='bg-transparent backdrop:blur-[19px] w-max justify-center gap-4 bottom-9 rounded-[10px] px-3 backdrop-blur-md  fixed right-5 max-sm:flex max-sm:right-0 max-sm:bottom-0 max-sm:h-10 max-sm:rounded-xl max-sm:w-full'>
        <a className='flex max-sm:mt-2' href="#Home"><AiOutlineHome/>Home </a> 
        <a className='flex max-sm:mt-2' href="#About"><BiUserCircle/>About </a>
        <a className='flex max-sm:mt-2' href="#Project"><BiUserCircle/>Project </a>
        <a className='flex max-sm:mt-2' href='#Contact'><AiOutlineInfoCircle/>Contact </a>
    </nav>
  )
}

export default Nav