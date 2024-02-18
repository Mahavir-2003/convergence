import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TeamMarquee from './TeamMarquee'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  return (
    <div className='min-h-[100vh] bg-[#111] about flex justify-center items-center flex-col'>
      <div className='Tagline w-full flex justify-center items-center text-white flex-col mt-[150px]'>
         <p className='text-2xl w-[90%] sm:w-[70%] sm:text-3xl text-center md:w-[80%] xl:w-full md:text-5xl font-extrabold pb-10 font-Osiris'>Celebrating 27 Years of  Technical Excellence</p>
         <p className='text-lg sm:text-2xl w-[90%] md:w-[70%] md:text-3xl font-light md:leading-10 text-center text-[#ffffffbb] tracking-wider'>Convergence 2024 is one of the most awaited events of the year, making campus vibrant, full of energy, excitement, and youthfulness. It is the combination of nine wings, namely - Infocrats, CIVESTA, Mech-Mechato, PetroX, Biotechnica, Electabuzz, MARITECH, MATHMAGIX, General Events. The Nine Wings encourages students from various field such as Technology, Computer Engineering, IT, Civil, Electrical Engineering and many more to showcase and test their skillset on a national platform.</p>
      </div>
      <div className='spacer md:h-[100px]'></div>
      <div className=' w-full'>
      <TeamMarquee />
      </div>
      <div className='spacer h-[100px] md:h-[200px]'></div>
      <div className='count mb-[100px] text-white md:flex justify-between items-center w-[80%]'>
      <div className=' text-3xl sm:text-5xl lg:text-5xl xl:text-7xl font-bold font-Hyperion flex justify-center items-center flex-col flex-1'>
            <p className='text-green-300'>60+</p>
            <p>Events</p>
          </div>
          <div className='  w-[1px] md:h-[200px]  h-[100px] bg-[#ffffffaa] opacity-0 md:opacity-100'></div>
          <div className=' text-3xl sm:text-5xl lg:text-5xl xl:text-7xl font-bold font-Hyperion flex justify-center items-center flex-col flex-1'>
            <p className='text-green-300'>300,000+</p>
            <p>Cash Prizes</p>
          </div>
      </div>
    </div>
  )
}

export default About