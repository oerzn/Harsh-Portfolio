import React from 'react'
import HarshPic from '../assets/harsh_passportpic.jpg'
import {TbArrowNarrowRight} from 'react-icons/tb'
import {Link} from 'react-scroll'
const home = () => {
  return (
    
        <div name ="home" className='h-screen w-full  bg-gray-900 '>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
                <div flex flex-col justify-center h-full>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I Harsh, I'm a Web Developer
                </h2>
                <p className='text-gray-300 py-4 max-w-md'>
                I possess strong problem-solving skills and specialize in crafting exceptional digital experiences.  
                </p>
                <div>
                    <Link to ="project" smooth duration ={300} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-blue-400 cursor-pointer  hover:bg-blue-600 '>
                        Projects
                        <span><TbArrowNarrowRight size={22} className='ml-1'/></span>
                        
                    </Link>
                </div>
            </div>
            <div>
                <img src={HarshPic} alt="My Profile" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default home