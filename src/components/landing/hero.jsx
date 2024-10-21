import React from 'react'
import Button from '../primary/button'
import sad1 from "../../assets/sad2.png"
import sad2 from "../../assets/sad6.png"
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className='h-screen  sm:flex-row flex-col justify-center overflow-hidden bg-[--black] flex items-center sm:justify-center text-[--white] px-[1em] sm:px-[--pdx] linear relative'>
        <motion.div
        initial={{
          y: "20px", 
          opacity: 0
        }}

        transition={{
          duration: .6
        }}

        animate={{
          y: 0, 
          opacity: 1
        }}
          className='text-center sm:w-[80%] flex flex-col gap-[2em] sm:gap-[15px] w-full'>
            <p className='pop text-[--accent] font-bold capitalize text-[1.2rem]'>Throw a Tantrum!</p>
            <h1 className='sm:text-[6rem] text-[2.2rem] urba font-semibold capitalize line opacity-90'>Everyone has a story. what's yours?</h1>
            <p className='urba text-[1.5rem] sm:text-[1.8rem] opacity-80'>Vent and Share Your Emotions, Don't keep it in!!</p>
            <div className='sm:block inline'>
                <Button text={"Share your story"} inverse={false}/>
            </div>
        </motion.div>
        <div className='absolute left-[-100px] sm:left-0 bottom-[0px] sm:bottom-[-100px] opacity-20 sm:opacity-50'>
            <img src={sad2} className='w-[400px] h-[450px] object-cover object-top' alt="" />
        </div>
    </section>
  )
}

export default Hero