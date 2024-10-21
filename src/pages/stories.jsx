import React, { useState } from "react";
import Nav from "../components/primary/nav";
import Story from "../components/stories/story";
import Form from "../components/stories/form";

function Stories() {
  const [postList, setPostList] = useState([
    {
      user: "israel shedrack",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt laudantium deserunt assumenda officiis, dolores consequuntur ullam soluta veniam dolorem maxime libero laboriosam doloribus vitae, omnis, placeat cumque doloremque totam.",
      likes: 0,
      dislikes: 0,
      time: 2
    },
    {
      user: "israel shedrack",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt laudantium deserunt assumenda officiis, dolores consequuntur ullam soluta veniam dolorem maxime libero laboriosam doloribus vitae, omnis, placeat cumque doloremque totam.",
      likes: 0,
      dislikes: 0,
      time: 4
    },
    {
      user: "israel shedrack",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt laudantium deserunt assumenda officiis, dolores consequuntur ullam soluta veniam dolorem maxime libero laboriosam doloribus vitae, omnis, placeat cumque doloremque totam.",
      likes: 0,
      dislikes: 0,
      time: 4

    },
    {
      user: "israel shedrack",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt laudantium deserunt assumenda officiis, dolores consequuntur ullam soluta veniam dolorem maxime libero laboriosam doloribus vitae, omnis, placeat cumque doloremque totam.",
      likes: 1,
      dislikes: 0,
      time: 4

    },
  ]);

  const storyList = postList.map((items, i) => <Story {...items} />);

  return (
    <div className="linear h-screen bg-[--black] w-full flex items-end sm:justify-normal justify-center">
      <Nav />
      <div className="h-[90vh] overflow-scroll hide-scrollbar sm:w-full flex flex-col gap-[40px] w-[95%] bg-[--white] sm:mx-[1em] rounded-t-[10px] sm:rounded-t-[1em] sm:px-[2em] sm:pt-[2em] p-[10px]">
        <Form />
        <div className="w-full border-[1px] opacity-50 border-[--blackv]">

        </div>


        <div>
          <h1 className="text-[1.2rem] pop font-semibold flex items-center gap-[10px]">Stories <span className="bg-[--accent] text-[--white] px-[5px] text-[0.85rem] rounded-[5px] flex items-center justify-center">{storyList.length}</span></h1>

          <div className="flex flex-col">
            { storyList }
           </div>
        </div>
        
      </div>
    </div>
  );
}

export default Stories;
