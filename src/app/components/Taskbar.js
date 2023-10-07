import Link from 'next/link'
import React from 'react'

const Taskbar = () => {
  return (
    <div className='fixed w-full top-5 z-10'>
      <div className='flex w-full justify-center'>
        <div className='flex flex-row text-center justify-evenly fixed bg-foreground w-auto py-2 rounded-full text-green border-2 border-background'>
            <a className='bg-accent px-4 mx-3 py-1 rounded-full hover:bg-green hover:text-accent transition duration-500 ease-in-out' href="#home">Home</a>
            <a className='bg-accent px-4 mx-3 py-1 rounded-full hover:bg-green hover:text-accent transition duration-500 ease-in-out' href="#projects">Projects</a>
            <a className='bg-accent px-4 mx-3 py-1 rounded-full hover:bg-green hover:text-accent transition duration-500 ease-in-out' href="#education">Education</a>
            <a className='bg-accent px-4 mx-3 py-1 rounded-full hover:bg-green hover:text-accent transition duration-500 ease-in-out' href="#contact">Contact</a>
        </div>
      </div>

    </div>

    
  )
}

export default Taskbar