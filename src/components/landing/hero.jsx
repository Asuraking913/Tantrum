import React from 'react'
import Button from '../primary/button'
import sad1 from "../../assets/sad2.png"
import sad2 from "../../assets/sad4.png"

function Hero() {
  return (
    <section className='h-screen rounded-b-[15px] overflow-hidden bg-[--black] flex items-center justify-center text-[--white] px-[--pdx] linear relative'>
        <div  className='text-center w-[80%] flex flex-col gap-[15px]'>
            <p className='pop text-[--accent] font-bold capitalize text-[1.2rem]'>Throw a Tantrum!</p>
            <h1 className='text-[5rem] urba font-semibold capitalize line'>Everyone has a story. what's yours?</h1>
            <p className='urba text-[1.8rem] opacity-80'>Vent and Share Your Emotions, Don't keep it in!!</p>
            <div className=''>
                <Button text={"Share your story"} inverse={false}/>
            </div>
        </div>
        <div className='absolute bottom-[-4em] left-[1em] opacity-30'>
            <img src={sad1} className='w-[400px] h-[420px] object-cover' alt="" />
        </div>
        <div className='absolute top-[20%] z-[-0.5] right-[1em] opacity-30'>
            <img src={sad2} className='w-[400px] h-[450px] object-cover' alt="" />
        </div>
    </section>
  )
}

export default Hero