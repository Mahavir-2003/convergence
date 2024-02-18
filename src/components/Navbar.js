import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full  fixed top-0 left-0 z-50 flex justify-center items-center py-5'>
      <nav className='w-[90%] flex justify-between items-center py-5  rounded-tl-3xl rounded-br-3xl backdrop-blur-lg px-5'>
        <div>
          <p className=' font-Anurati text-white md:text-3xl'>CONVERGENCE</p>
        </div>
        <div>
          <a href='https://www.convergence.uvpce.ac.in/' target='_blank' rel="noreferrer">
          <button className='border-2 border-green-300 flex justify-between items-center py-1 px-4 md:px-8 md:py-2 rounded-tr-3xl rounded-bl-3xl  font-Osiris text-white md:text-2xl hover:bg-green-300 hover:text-black transition-all duration-150'>
            Register
          </button>
          </a>
        </div>
      </nav>  
    </header>
  )
}

export default Navbar