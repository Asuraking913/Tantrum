import React from 'react'
import Button from "../primary/button"
import { FaAt, FaCloudUploadAlt, FaImage, FaSmile } from 'react-icons/fa'

function Form() {
  return (
    <form className='w-full bg-[--bg] rounded-[1em] flex flex-col gap-[10px] pl-[20px] p-[10px]'>
        <p>
            <textarea name="" id="" cols="30" rows="4" placeholder='Share your story...' className='pop bg-transparent w-full outline-none'></textarea>
        </p>
        <div className='flex justify-between'>

          <div className='text-[1.2rem] flex gap-[2em] items-center text-[--black] opacity-70 pop font-semibold'>
              <button className=''>
                B
              </button>
              <button className='italic'>
                I
              </button>
              <button className='underline'>
                U
              </button>
              <div className='h-[20px] border-[1.5px] border-[--blackv]'>

              </div>
              <button className=''>
                <FaCloudUploadAlt />
              </button>
              <button className=''>
                <FaImage />
              </button>
              <button className=''>
                <FaSmile />
              </button>
              <button className=''>
                <FaAt />
              </button>
          </div>

          <button className='p-[10px] text-xl urba rounded-[5px] px-[20px] bg-[--accent] sm:hover:scale-105 duration-[0.3s] text-[--white]'>
              Submit
          </button>
        </div>
    </form>
  )
}

export default Form