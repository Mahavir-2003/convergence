import React from 'react'
import collageData from '../Data/CollageData.js'
import Marquee from "react-fast-marquee";

const Collages = () => {
  return (
    <div className='w-full'>
        <div className='bg-[#111] pt-[80px]'>
        <h1 className='text-4xl sm:text-5xl md:text-8xl font-Anurati text-amber-300 w-full text-center pt-[50px]'>Our Colleges</h1>
        <h1 className='text-sm sm:text-lg font-Osiris font-thin text-[#ffffffcc] w-full text-center pt-8 pb-[80px]'>Of Ganpat University</h1>
        <Marquee speed={100} className=' pb-[50px]'>
            {
                collageData.map((collageImg, index) => {
                    return (
                        <img key={index} src={require(`../assets/images/events/${collageImg}`)} alt="sponsor" className='mx-10 aspect-auto max-h-[70px] md:max-h-[150px]'/>
                    )
                })
            }
        </Marquee>
    </div>
    </div>
  )
}

export default Collages