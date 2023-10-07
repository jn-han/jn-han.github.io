import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Image from 'next/image'

const ProjectCard = ({info}) => {
  return (
    <a href={info.link} className='group flex flex-row justify-between w-full mt-10 border-2 border-green p-5 rounded-md bg-accent drop-shadow-xl hover:scale-[101%] transition-all duration-50 ease-linear'>
        <div className='md:w-4/6 p-3'>
            <p>{info.date}</p>
            <h2 className='text-3xl flex flex-wrap py-1'> 
                {info.name} 
                <FontAwesomeIcon className='w-4 mx-2 group-hover:-translate-y-0.5 transition duration-200 ease-in-out' icon={faSquareArrowUpRight} />
            </h2>
            <h3 className='text-2xl py-1'>{info.place} - {info.award}</h3>
            <p className=' py-1'>
                {info.description}
            </p>
            <div className='flex flex-wrap w-full items-center'>
                <p className='pr-2'>Built With: </p>

                {info.builtWith.map((item, key) => {
                    return(
                        <p
                        className='px-3 m-1 border-2 rounded-full'
                        key={key}
                        >
                        {item}
                        </p>
                    );
                })}
            </div>
        </div>
        
        <div className=' w-2/6 flex flex-row items-center '>
            <div className='border-2 border-green rounded-xl overflow-hidden shadow-2xl brightness-90 hover:brightness-100 transition duration-500 ease-in-out 
            h-54'>            
            <Image
                className='h-full object-top object-cover'
                src={info.src}
                width={1000}
                height={1000}
                alt='plotgen demo'
            />
            </div>

        </div>
    </a>
  )
}

export default ProjectCard