import React, { useState } from 'react'
import Nav from '../components/primary/nav'
import Story from '../components/stories/story'
import Form from '../components/stories/form'

function Stories() {

  const [postList, setPostList] = useState([
    {
      user: "israelshedrack", 
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt laudantium deserunt assumenda officiis, dolores consequuntur ullam soluta veniam dolorem maxime libero laboriosam doloribus vitae, omnis, placeat cumque doloremque totam.", 
      likes: 0
    }, 
    {
      user: "israelshedrack", 
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt laudantium deserunt assumenda officiis, dolores consequuntur ullam soluta veniam dolorem maxime libero laboriosam doloribus vitae, omnis, placeat cumque doloremque totam.", 
      likes: 0
    },
    {
      user: "israelshedrack", 
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt laudantium deserunt assumenda officiis, dolores consequuntur ullam soluta veniam dolorem maxime libero laboriosam doloribus vitae, omnis, placeat cumque doloremque totam.", 
      likes: 0
    },
    {
      user: "israelshedrack", 
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt laudantium deserunt assumenda officiis, dolores consequuntur ullam soluta veniam dolorem maxime libero laboriosam doloribus vitae, omnis, placeat cumque doloremque totam.", 
      likes: 0
    }
  ])

  const storyList = postList.map((items, i) => <Story {...items}/>)

  return (
    <div className='linear h-screen bg-[--black] w-full flex items-end sm:justify-normal justify-center'>
        <Nav />
        <div className='h-[90vh] sm:w-full w-[95%] bg-[--white] sm:mx-[1em] rounded-t-[10px] sm:rounded-t-[1em] sm:px-[2em] sm:pt-[2em] p-[10px]'>
          <Form />
          {/* { storyList } */}
        </div>
    </div>
  )
}

export default Stories