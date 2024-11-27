import React, { useState } from 'react'
import Button from "../primary/button"
import { FaAt, FaCloudUploadAlt, FaImage, FaSmile } from 'react-icons/fa'
import { motion } from 'framer-motion'
import submitFunction from '../../utils/submitPost'
import EmailBox from './emailbox'

function Form() {

  const [content, setContent] = useState("")
  const [error, setError] = useState("")
  const [emailDisplay, setEmailDisplay] = useState(false)


  return (
    <form className='w-full bg-[--bg] rounded-[1em] flex flex-col gap-[10px] p-[8px] sm:pl-[20px] sm:p-[10px]'>

      {emailDisplay && <EmailBox content={content} onError={setError}/>  }

        <p>
            <textarea name="" onChange={(e) => setContent(e.target.value)} id="" cols="30" rows="4" placeholder='Share your story...' className='pop bg-transparent w-full outline-none'></textarea>
        </p>
        <div className='flex justify-between sm:flex-row flex-col gap-[10px]'>

          <div className='sm:text-[1.2rem] flex sm:justify-normal justify-between sm:gap-[2em] flex-wrap items-center text-[--black] opacity-70 pop font-semibold'>
              <button className='sm:hover:scale-110 sm:hover:bg-[white] active:hover:bg-[white] active:scale-110 rounded-[5px] py-[2px]  p-[10px] duration-[0.2s] '>
                B
              </button>
              <button className='sm:hover:scale-110 sm:hover:bg-[white] active:hover:bg-[white] active:scale-110 rounded-[5px] py-[2px]  p-[10px] duration-[0.2s] italic'>
                I
              </button>
              <button className='sm:hover:scale-110 sm:hover:bg-[white] active:hover:bg-[white] active:scale-110 rounded-[5px] py-[2px]  p-[10px] duration-[0.2s] underline'>
                U
              </button>
              <div className='h-[20px] border-[1.5px] border-[--blackv]'>

              </div>
              <button className='sm:hover:scale-110 sm:hover:bg-[white] rounded-[5px]  p-[10px] duration-[0.2s] '>
                <FaCloudUploadAlt />
              </button>
              <button className='sm:hover:scale-110 sm:hover:bg-[white] rounded-[5px]  p-[10px] duration-[0.2s] '>
                <FaImage />
              </button>
              <button className='sm:hover:scale-110 sm:hover:bg-[white] rounded-[5px]  p-[10px] duration-[0.2s] '>
                <FaSmile />
              </button>
              <button className='sm:hover:scale-110 sm:hover:bg-[white] rounded-[5px]  p-[10px] duration-[0.2s] '>
                <FaAt />
              </button>
          </div>

          <motion.button
          initial={{

          }}

          whileTap={{
            opacity: 0.2
          }}

          onClick={(e) => {
            e.preventDefault()

            if(!content.length) {
              setError("Plese enter your story")
              return 
            }
            setEmailDisplay(!emailDisplay)
          }}
           className='p-[5px] sm:p-[10px]  sm:text-xl text-[1.1rem] urba rounded-[5px] px-[10px] sm:px-[20px] bg-[--accent] sm:hover:scale-105 duration-[0.3s] text-[--white]'>
              Submit
          </motion.button>
        </div>
        {
        error && 
        <motion.p
        initial={{
          x: "-2em",
          opacity: 0
        }}

        animate={{
          x: 0, 
          opacity: 1
        }}

        transition={{
          duration: 1
        }}
         className='p-[2px] w-[15%] flex justify-center bg-[--accent] rounded-[5px] pop text-[--white]'>     {error}
        
        </motion.p>}
    </form>
  )
}

export default Form