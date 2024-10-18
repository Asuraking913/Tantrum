import React, { useEffect, useState } from 'react'
import icon from "../../assets/icon.png"
import { FaBars, FaGithub } from 'react-icons/fa'
import { FaQuestion } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'

function Nav() {

    const [nav, setNav] = useState(false)
    const navigate = useNavigate("/stories")
    const location = useLocation()

    useEffect(() => {
        console.log(location)
    }, [])


  return (
    <header className='z-[1] fixed top-0 w-full p-[5px] sm:p-[10px] px-[1em] sm:px-[--pdx] items-center flex justify-between'>
        <div className='absolute left-0 z-[-1] backdrop-blur-lg h-full w-full'>

        </div>
        <div className='flex items-center sm:flex-row flex-col text-[--white]'>
            <img className='w-[30px] sm:w-[40px]' src={icon} alt="" />
            <a href="#" className='pop sm:text-xl text-[0.95rem]'>Tantrum</a>
        </div>

        {!nav && <FaBars onClick={() => setNav(!nav)} size={30} className='sm:hidden' color='#E9602C'/>}
 
        <ul className={`urba px-[--pdx] gap-[1em] text-[1.1rem] text-[--white] sm:flex ${!nav && "hidden"}`}>
            <li className='relative'>
                <button onClick={() => navigate("/")} href="#">
                    Home
                </button>
                <div className='absolute w-full h-[20%] duration-[0.5s]  rounded-[4px] bg-[--accent]'>

                </div>
            </li>
            <li>
                <button onClick={() => navigate("/stories")} href="#">
                    Stories
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