import Link from 'next/link'
import React from 'react'

const Taskbar = () => {
  return (
    <div className=' absolute flex w-full justify-center my-5'>
        <div className='flex flex-row text-center justify-between fixed bg-[#829399]
        w-auto px-3 py-3 rounded-full'>
            <Link className='bg-gray px-3 mx-5 py-1 rounded-full' href="">Home</Link>
            <Link className='bg-gray px-3 mx-5 py-1 rounded-full' href="">Projects</Link>
            <Link className='bg-gray px-3 mx-5 py-1 rounded-full' href="">Education</Link>
            <Link className='bg-gray px-3 mx-5 py-1 rounded-full' href="">Contact</Link>
        </div>
    </div>

    
  )
}

export default Taskbar