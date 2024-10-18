import React from 'react'
import Nav from '../components/primary/nav'
import Hero from '../components/landing/hero'
import Descrip from '../components/landing/descrip'

function Home() {
  return (
    <div className='h-full '>
        <Nav />
        <article>
          <Hero />
        </article>
    </div>
  )
}

export default Home