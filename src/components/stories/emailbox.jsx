import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import submitFunction from '../../utils/submitPost'
import { useInterval } from 'react-use'

function EmailBox({content}) {

  const [postEmail, setPostEmail] = useState("")
  const [error, setError] = useState("")

  useInterval(() => {
    setError("")
  }, 6000, [error])


  return (
    <div className='w-full h-full
     flex items-center justify-center fixed top-0 backdror z-[1] left-0'>
      <div className=' top-[20%] left-[25%] h-[200px] w-[400px] bg-[--black] linear rounded-[10px] text-center flex items-center justify-center flex-col p-[4em] gap-[10px]'>
          <h1 className='pop text-2xl font-semibold text-[--white]'>Enter your email</h1>
          <div  className='w-full'>
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
                email: postEmail
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
             className='p-[5px] sm:p-[10px]  sm:text-xl text-[1.1rem] urba rounded-[5px] px-[10px] sm:px-[20px] bg-[--accent] sm:hover:scale-105 duration-[0.3s] text-[--white] mt-[1em]'>
              Submit
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
    </div>

  )
}

export default EmailBox