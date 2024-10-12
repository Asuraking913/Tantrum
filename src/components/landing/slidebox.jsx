import React from 'react'

function SlideBox({author, content}) {
  return (
    <div className='w-[50%] min-h-[130px] linear bg-[--black] relative text-center shadow-lg shadow-[--blackv]  p-[20px] flex flex-col justify-between rounded-[10px]'>
        <p className='pop italic line text-[--white]'><span className='text-[1.5rem]'>"</span>{content}<span className='text-[1.5rem]'>"</span></p>
        <p className='urba font-semibold sm:text-xl text-[--accent]'>{author}</p>
    </div>
  )
}

export default SlideBox