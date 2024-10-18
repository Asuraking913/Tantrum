import React, { useEffect, useState } from 'react'
import icon from "../../assets/icon.png"
import { FaBars, FaGithub, FaTimes } from 'react-icons/fa'
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
    <header className={`z-[1] sm:h-auto ${nav && "h-screen"} fixed top-0 w-full p-[5px] sm:p-[10px] px-[1em] sm:px-[--pdx] items-center flex justify-between`}>
        <div className='absolute left-0 z-[-1] backdrop-blur-lg h-full w-full'>

        </div>
        <div className='flex sm:relative fixed top-0 left-0 p-[10px] sm:p-0  items-center sm:flex-row flex-col text-[--white]'>
            <img className='w-[30px] sm:w-[40px]' src={icon} alt="" />
            <a href="#" className='pop sm:text-xl text-[0.95rem]'>Tantrum</a>
        </div>

        {!nav && <FaBars onClick={() => setNav(!nav)} size={30} className='sm:hidden z-[20] fixed right-0 top-0 m-[15px]' color='#E9602C'/>}
 
        <ul className={`urba px-[--pdx] gap-[1em] text-[1.1rem] text-[--white] flex-col sm:w-auto w-full items-center sm:items-end  sm:flex-row sm:flex flex ${!nav && "hidden"}`}>
            <FaTimes className='absolute bottom-[20%] animate-pulse sm:hidden block' size={50} onClick={() => setNav(!nav)} color='var(--accent)'/>
            <li className='p-[10px] sm:p-0 sm:shadow-none shadow-sm shadow-[--white] sm:w-auto w-[200px] flex sm:block sm:justify-normal justify-center sm:rounded-none rounded-[2em] relative'>
                <button onClick={() => navigate("/")} href="#">
                    Home
                </button>
                {!nav && <div className='absolute w-full h-[20%] duration-[0.5s]  rounded-[4px] bg-[--accent]'>

                </div>}
            </li>
            <li className='p-[10px] sm:p-0 sm:shadow-none shadow-sm shadow-[--white] sm:w-auto w-[200px] flex sm:block sm:justify-normal justify-center sm:rounded-none rounded-[2em] '>
                <button onClick={() => navigate("/stories")} href="#">
                    Stories
                </button>
            </li>
            <li className='p-[10px] sm:p-0 sm:shadow-none shadow-sm shadow-[--white] sm:w-auto w-[200px] flex sm:block sm:justify-normal justify-center sm:rounded-none rounded-[2em] '>
                <button href="#" className='flex items-center gap-[10px]'>
                    <span>About</span> 
                </button>
                
            </li>
            <li className='p-[10px] sm:p-0 sm:shadow-none shadow-sm shadow-[--white] sm:w-auto w-[200px] flex sm:block sm:justify-normal justify-center sm:rounded-none rounded-[2em] '>
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