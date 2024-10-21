import React from 'react'
import { Form } from 'react-router-dom'

function Comment() {
  return (
    <form action="" className='flex items-center gap-[20px]'>
        <p className='sm:w-[50%] w-full'>
            <textarea name="comment" id="comment" className='h-[40px] hide-scrollbar text-[--black] outline-none bg-[--bg] p-[5px] rounded-[1.5em] border-[1.5px] border-[--blackv] w-full'></textarea>
        </p>
        <button className='urba bg-[--accent] text-[--white] p-[5px] px-[10px] rounded-[5px] sm:hover:scale-110 duration-[0.5s]'>
            Submit
        </button>
    </form>
  )
}

export default Comment