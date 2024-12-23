import React from 'react'

function Button({text, inverse}) {
  return (
    <button className={`${inverse ? "bg-[--white] text-[--accent] sm:hover:border-[2px] sm:hover:border-[--accent] " : "bg-[--accent] sm:hover:bg-[--white] sm:hover:text-[--accent] sm:hover:shadow-sm sm:hover:shadow-[--accent] duration-[0.3s] text-[--white]"} p-[10px] text-xl urba rounded-[5px] px-[20px]`}>
        {text}
    </button>
  )
}

export default Button