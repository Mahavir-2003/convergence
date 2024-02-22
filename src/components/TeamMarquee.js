import React from 'react'
import Marquee from "react-fast-marquee";
import teamData from "../Data/teamData.js"

const TeamMarquee = () => {
  return (
    <div className='bg-[#111]'>
        <h1 className='text-4xl sm:text-5xl md:text-8xl font-Anurati text-amber-300 w-full text-center pt-[50px]'>Our Team</h1>
        <h1 className='text-sm sm:text-lg font-Osiris font-thin text-[#ffffffcc] w-full text-center pt-8 pb-[80px]'>Of Convergence 2024</h1>
        <Marquee speed={100} className=' pb-[50px]'>
            {
                teamData.map((sponsorImg, index) => {
                    return (
                        <img key={index} src={require(`../assets/images/events/${sponsorImg}`)} alt="sponsor" className='mx-10 aspect-square object-cover rounded-full max-w-[140px] md:max-w-[200px]'/>
                    )
                })
            }
        </Marquee>
    </div>
  )
}

export default TeamMarquee