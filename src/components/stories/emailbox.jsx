import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import submitFunction from '../../utils/submitPost'
import { useInterval } from 'react-use'
import { FaTimes } from 'react-icons/fa'
import { FaArrowsSpin } from "react-icons/fa6";


function EmailBox({content, onDisplay, onFinish}) {

  const [postEmail, setPostEmail] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useInterval(() => {
    setError("")
  }, 6000, [error])


  return (
    <motion.div
    initial={{
      rotate: "300deg",
      scale: 0.5
    }}

    animate={{
      rotate: 0, 
      scale: 1
    }}
     className='w-full h-full
     flex items-center justify-center fixed top-0 bg-[#00000080] z-[1] left-0' >

          <button onClick={() => {
            onDisplay(prev => !prev)
          }} className='text-white text-4xl absolute top-[35%] right-[30%] sm:hover:scale-125 sm:duration-[1s]'>
            <FaTimes/>
          </button>

      <div className=' top-[20%] left-[25%] h-[200px] w-[400px] bg-[--black] linear rounded-[10px] text-center flex items-center justify-center flex-col p-[4em] gap-[10px] shadow-sm shadow-[--white]'>


          <h1 className='pop text-2xl font-semibold text-[--white]'>Enter your email</h1>
          <div  className='w-full relative'>
            <p className='w-full'>
              <input className='p-[10px] w-full outline-none rounded-[2px]' type="email" onChange={(e) => setPostEmail(e.target.value)} name="email" id="email" />
            </p>
            <motion.button
              initial={{

              }}

              whileTap={{
                opacity: 0.2
              }}

              onClick={(e) => {

                e.preventDefault()
                
              let data = {
                content : content, 
                onError: setError, 
                email: postEmail, 
                onFinish: onFinish, 
                onLoading: setLoading
            } 

            if(!data.email) {
              setError("Please enter an email")
              return
            }

            if(!data.email.includes("@")) {
              setError("A valid email should include '@' ")
            }

              submitFunction(e, data)

              }}
             className={`p-[5px] sm:p-[10px] urba rounded-[5px] px-[10px] sm:px-[20px] bg-[--accent] sm:hover:scale-105 ${loading ? "text-3xl " : "sm:text-xl text-[1.1rem]"} duration-[0.3s] text-[--white] mt-[1em]`}>
              {!loading ? "Submit" : <FaArrowsSpin className='animate-spin' />}
          </motion.button>
          {
            error && 
            <motion.p
              initial={{
                opacity: 0
              }}

              animate={{
                opacity: 1
              }}

              transition={{
                duration: 1.5
              }}

              exit={{
                x: "-2em", 
                opacity: 0
              }}
             className='p-[2px] mt-[5px] flex justify-center rounded-[5px] pop text-[--white]'>     {error}

            </motion.p>
          }
          </div>
      </div>
    </motion.div>

  )
}

export default EmailBox