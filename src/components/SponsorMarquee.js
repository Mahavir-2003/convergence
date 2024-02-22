import React from 'react'
import sponsorData from '../Data/sponsorData.js'
import Marquee from "react-fast-marquee";

const SponsorMarquee = () => {
  return (
    <div className='bg-[#111]'>
        <h1 className='text-4xl sm:text-5xl md:text-8xl font-Anurati text-amber-300 w-full text-center pt-[50px]'>Our Sponsors</h1>
        <h1 className='text-sm sm:text-lg font-Osiris font-thin text-[#ffffffcc] w-full text-center pt-8 pb-[80px]'>Of Convergence 2024</h1>
        <Marquee speed={100} className=' pb-[50px]'>
            {
                sponsorData.map((sponsorImg, index) => {
                    return (
                        <img key={index} src={require(`../assets/images/events/${sponsorImg}`)} alt="sponsor" className=' object-contain mx-5 aspect-video max-w-[170px] md:max-w-[250px]'/>
                    )
                })
            }
        </Marquee>
    </div>
  )
}

export default SponsorMarquee