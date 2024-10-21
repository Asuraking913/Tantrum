import React from 'react'
import { FaComment, FaThumbsDown, FaThumbsUp } from 'react-icons/fa';
import { IoIosPerson } from "react-icons/io";

function Story({user, content, likes, time, dislikes}) {
  return (
    <div className='flex gap-[10px] '>
        <figure className='bg-[--bg] w-[50px] h-[50px] flex items-center justify-center rounded-[50%] shadow-sm shadow-[--blackv]'>
            <IoIosPerson size={30}/>
        </figure>
        <div className='w-full min-h-[100px] py-[10px] flex flex-col gap-[10px]'>

            <div className='flex gap-[10px] items-center'>
                <p className='capitalize urba  font-semibold '>
                  {user}
                </p>
                <p className='urba text-[--black] text-[0.8rem] opacity-60'>
                  {time} mins ago
                </p>
            </div>


            <p className='pop text-[0.9rem]'>
              {content}
            </p>

            <div className='flex gap-[2em] items-center'>

              <button className='flex pop gap-[5px] sm:hover:scale-110 duration-[0.5s] items-center justify-center'>
                <FaThumbsUp />
                {likes !== 0 && <p>{likes}</p>}
              </button>
              <button className='flex pop gap-[5px] sm:hover:scale-110 duration-[0.5s] items-center justify-center'>
                <FaThumbsDown />
                <p>{dislikes !== 0 && dislikes}</p>

              </button>
              <button className='flex pop gap-[5px] sm:hover:scale-110 duration-[0.5s] items-center justify-center ml-[20px]'>
                <FaComment />
                <p>reply</p>

              </button>

            </div>
        </div>

    </div>
  )
}

export default Story