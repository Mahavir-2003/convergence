import React from 'react'

const Contact = () => {
    return (
        <div className='bg-[#111] w-full'>
            <div className=' pb-[200px] w-full flex justify-center items-center flex-col '>
                <h1 className='text-3xl sm:text-4xl md:text-7xl font-Osiris text-white text-center'>Grow<span className='text-blue-500'>&nbsp; Together</span></h1>
                <h1 className='text-3xl sm:text-4xl md:text-7xl font-Osiris text-white text-center'>for<span className='text-green-500'>&nbsp; Tomorrow</span></h1>
            </div>
            <footer className=' w-full flex justify-center items-center'>
                <div className=' w-full lg:w-[80%] mb-[50px]'>
                    <div className='w-full justify-around items-center md:items-start text-white flex flex-col md:flex-row gap-y-8 text-center px-20'>
                        <div>
                            <h1 className='text-2xl font-Osiris mb-4'>Ganpat University</h1>
                            <p className='pb-2 md:max-w-[250px] font-normal text-lg opacity-80 hover:opacity-100 duration-100'><a href="https://uvpce.guni.ac.in/" target='_blank' rel="noreferrer">U.V. Patel Collage Of Engineering</a></p>
                            <p className='pb-2 md:max-w-[250px] font-normal text-lg opacity-80 hover:opacity-100 duration-100'><a href="https://www.ganpatuniversity.ac.in/" target='_blank' rel="noreferrer">Ganpat Vidyanagar , Mehsana-Gozaria Highway, Kherva, Mahesana - Gujarat 384012</a></p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-Osiris mb-4'>Contact Us</h1>
                            <p className='pb-2 md:max-w-[250px] font-normal text-lg opacity-80 hover:opacity-100 duration-100'><a href="tel:+91 70045 18816">+91 70045 18816</a></p>
                            <p className='pb-2 md:max-w-[250px] font-normal text-lg opacity-80 hover:opacity-100 duration-100'><a href="tel:+91 94096 00712">+91 94096 00712</a></p>
                            <p className='pb-2 md:max-w-[250px] font-normal text-lg opacity-80 hover:opacity-100 duration-100'><a href="tel:+91 72268 63570">+91 72268 63570
                            </a></p>
                            <p className='pb-2 md:max-w-[250px] font-normal text-lg opacity-80 hover:opacity-100 duration-100'><a href="mailto:convergence.uvpce@ganpatuniversity.ac.in">help@convergence.in</a></p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-Osiris mb-4'>Socials</h1>
                            <p className='pb-2 max-w-[250px] font-normal text-lg opacity-80 hover:opacity-100 duration-100'><a href="https://www.facebook.com/convergence.uvpce" target='_blank' rel="noreferrer">Facebook</a></p>
                            <p className='pb-2 max-w-[250px] font-normal text-lg opacity-80 hover:opacity-100 duration-100'><a href="https://instagram.com/convergence.uvpce" target='_blank' rel="noreferrer">Instagram</a></p>
                            <p className='pb-2 max-w-[250px] font-normal text-lg opacity-80 hover:opacity-100 duration-100'><a href="https://www.linkedin.com/company/guni-uvpce/" target='_blank' rel="noreferrer">LinkedIn</a></p>
                            <p className='pb-2 max-w-[250px] font-normal text-lg opacity-80 hover:opacity-100 duration-100'><a href="https://twitter.com/guni_uvpce?s=20&t=XELX-s1_FdbyxhbxKxUYNA" target='_blank' rel="noreferrer">Twitter</a></p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className=' w-full text-center text-white font-light text-xl opacity-60 pb-10'>Copyright © 2024 Convergence. All Rights Reserved.</div>
            <div className=' w-full text-center text-black bg-[#86efac] font-normal tracking-wide text-xl py-3 px-12 lg::px-0'>Crafted with a sprinkle of magic (and maybe some caffeine!) ✨ by <span className=' font-medium opacity-80  hover:opacity-100 duration-100'><a href='https://mhvr.vercel.app/' target='_blank' rel="noreferrer">@Mahavir Patel</a></span></div>
        </div>
    )
}

export default Contact