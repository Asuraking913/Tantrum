import React from 'react'
import SlideBox from './slidebox'

function Descrip() {


    const slideItems = [
        {
            author: "Dita Von Teese",
            content: "Some days are just bad days, that’s all. You have to experience sadness to know happiness, and I remind myself that not every day is going to be a good day.", 
        }, 
        {
            author: "Haruki Murakami",
            content: "We must embrace pain and use it to fuel our journey. It’s through hardship that we find our strength.", 
        }, 
        {
            author: "Margaret Thatcher",
            content: "Life presents challenges that we think will break us. But overcoming them shows us what we’re capable of.", 
        }
    ]

    const slideList = slideItems.map((items, i) => <SlideBox {...items}/>)

  return (
    <section className='min-h-[200px] px-[--pdx] flex py-[2em] gap-[1em]'>
        {slideList}
    </section>
  )
}

export default Descrip