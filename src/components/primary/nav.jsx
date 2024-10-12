import React from 'react'
import icon from "../../assets/icon.png"
import { FaGithub } from 'react-icons/fa'
import { FaQuestion } from 'react-icons/fa'

function Nav() {
  return (
    <header className=' z-[1] fixed top-0 w-full p-[10px] px-[--pdx] items-center flex justify-between'>
        <div className='flex items-center text-[--white]'>
            <img src={icon} alt="" />
            <a href="#" className='pop text-xl'>Tantrum</a>
        </div>

        <ul className='urba px-[--pdx] flex gap-[1em] text-[1.1rem] text-[--white]'>
            <li>
                <button href="#">
                        Home
                </button>
            </li>
            <li>
                <button href="#" className='flex items-center gap-[10px]'>
                    <span>About</span> 
                </button>
                
            </li>
            <li>
                <button href="#" className='flex items-center gap-[10px]'>
                    <span>Github</span> 
                    <span><FaGithub /></span>
                </button>
                
            </li>
        </ul>
    </header>
  )
}

export default Nav