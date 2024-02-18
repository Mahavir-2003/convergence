import React from 'react'

const Details = () => {
    return (
        <div className=' w-full flex justify-center items-center bg-[#111] py-16 pt-24'>
            <div className='count mb-[100px] text-white lg:flex justify-between items-center w-[90%]'>
                <div className=' text-3xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold  flex justify-center items-center flex-col flex-1 sm:p-10'>
                    <p className='text-green-300 font-Hyperion my-4 '>Objective</p>
                    <p className=' font-medium text-xs sm:text-lg text-center capitalize'>To give new aspiring students and developers, an opportunity to achieve excellence and fight it out in newer, smarter and more challenging technical problem statements.</p>
                </div>
                <div className='  w-[1px] md:h-[200px]  h-[100px] bg-[#ffffffaa] opacity-0 lg:opacity-100 hidden lg:block'></div>
                <div className=' text-3xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold  flex justify-center items-center flex-col flex-1 sm:p-10'>
                    <p className='text-green-300 font-Hyperion my-4'>Eligibility</p>
                    <p className=' font-medium text-xs sm:text-lg text-center capitalize'>Students pursuing any Bachelor Degree, Master Degree, any certificate course or diploma is eligible to apply. (e.g. B.Tech , M.Tech , Diploma Courses , BBA , MBA , BCA , MCA , B.Sc , M.Sc , Bcs , BCom. , etc.)</p>
                </div>
                <div className='  w-[1px] md:h-[200px]  h-[100px] bg-[#ffffffaa] opacity-0 lg:opacity-100 hidden lg:block'></div>
                <div className=' text-3xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold  flex justify-center items-center flex-col flex-1 sm:p-10'>
                    <p className='text-green-300 font-Hyperion my-4'>Prizes</p>
                    <p className=' font-medium text-xs sm:text-lg text-center capitalize'>Prizes worth Rs 3,00,000+ to be distributed among the winners along with cetificates, trophies and refreshments for the participants.</p>
                </div>
            </div>
        </div>
    )
}

export default Details