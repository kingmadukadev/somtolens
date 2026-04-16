import React, { useState } from 'react'
import logo from '../images/somlens-removebg-preview.png'
import { Link } from 'react-router-dom'
import { FiX } from 'react-icons/fi'


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
  setMenuOpen(!menuOpen)
    };
  return (
    <nav className='relative z-50 flex justify-between items-center px-6! md:px-16! pt-6! w-full max-w-360 mx-auto shrink-0'>
      <Link to="/">
        <div className='relative w-20 md:w-35 h-13'>
            <img src={logo} alt="Somto Lens Logo" className='object-contain absolute h-auto w-40 md:w-45 left-0 top-0 right-0 bottom-0 text-transparent' sizes='100vw' />
        </div>
      </Link>
      <button onClick={toggleMenu} className='hidden md:block text-[18px] tracking-[0.88px] cursor-pointer hover:opacity-70 transition-opacity text-white'>
        MENU
      </button>
      <button onClick={toggleMenu} className='md:hidden flex items-center justify-center w-10 h-10 bg-[#FFFFFF1A] rounded md:rounded-none border border-[#FFFFFF33] cursor-pointer'>
        <div className='flex flex-col gap-1.5'>
            <span className='w-5 h-0.5 bg-[#CCCCCC]'></span>
            <span className='w-5 h-0.5 bg-[#CCCCCC]'></span>
            <span className='w-5 h-0.5 bg-[#CCCCCC]'></span>
        </div>
      </button>
      <section className={`fixed top-0 left-0 w-full h-[65dvh] md:h-[70dvh] bg-[rgba(128,128,128,0.02)] backdrop-blur-[16.05px] z-90 transition-transform duration-500 ease-in-out flex flex-col ${
    menuOpen ? 'translate-y-0' : '-translate-y-full'
  }`}>
        <nav className='flex justify-between items-center px-6! md:px-16! pt-6! w-full max-w-360 mx-auto shrink-0'>
            <Link to="/">
                <img src={logo} alt="Somto Lens Logo" loading='lazy'  className='object-contain w-25 md:w-35 h-auto text-transparent' />
            </Link>
            <button onClick={toggleMenu} className='flex items-center gap-2.5 font-polyslimmono text-[18px] tracking-[0.88px] cursor-pointer z-10 hover:opacity-70 transition-opacity text-white'>
                <FiX size={24} />
                <span className='hidden md:inline'>CLOSE</span>
            </button>
        </nav>
        <div className='flex-1 flex flex-col gap-2 md:gap-1 justify-center items-center w-full pb-10'>
            <div className='flex flex-col justify-center items-center group cursor-pointer relative'>
                <Link to='/about' className='overflow-hidden font-polymedianwide text-[28px] md:text-[38px] lowercase tracking-[-0.96px] leading-tight transition-all duration-300 ease-in-out text-white opacity-50 hover:opacity-100'>
                    <span className='link-text block will-change-transform translate-none rotate-none scale-none transform translate-x-0 -translate-y-full'>
                        about
                    </span>
                </Link>
                <div className='absolute -bottom-2 h-1 bg-[#E2FF07] rounded-full transition-all duration-300 ease-in-out w-0 group-hover:w-8'></div>
            </div>
            <div className='flex flex-col justify-center items-center group cursor-pointer relative'>
                 <Link to='/featured-work' className='overflow-hidden font-polymedianwide text-[28px] md:text-[38px] lowercase tracking-[-0.96px] leading-tight transition-all duration-300 ease-in-out text-white opacity-50 hover:opacity-100'>
                    <span className='link-text block will-change-transform translate-none rotate-none scale-none transform translate-x-0 -translate-y-full'>
                        featured work
                    </span>
                </Link>
                <div className='absolute -bottom-2 h-1 bg-[#E2FF07] rounded-full transition-all duration-300 ease-in-out w-0 group-hover:w-8'></div>
            </div>
            <div className='flex flex-col justify-center items-center group cursor-pointer relative'>
                 <Link to='/how-i-work' className='overflow-hidden font-polymedianwide text-[28px] md:text-[38px] lowercase tracking-[-0.96px] leading-tight transition-all duration-300 ease-in-out text-white opacity-50 hover:opacity-100'>
                    <span className='link-text block will-change-transform translate-none rotate-none scale-none transform translate-x-0 -translate-y-full'>
                        how i work
                    </span>
                </Link>
                <div className='absolute -bottom-2 h-1 bg-[#E2FF07] rounded-full transition-all duration-300 ease-in-out w-0 group-hover:w-8'></div>
            </div>
            <div className='flex flex-col justify-center items-center group cursor-pointer relative'>
                 <Link to='/pricing' className='overflow-hidden font-polymedianwide text-[28px] md:text-[38px] lowercase tracking-[-0.96px] leading-tight transition-all duration-300 ease-in-out text-white opacity-50 hover:opacity-100'>
                    <span className='link-text block will-change-transform translate-none rotate-none scale-none transform translate-x-0 -translate-y-full'>
                        pricing
                    </span>
                </Link>
                <div className='absolute -bottom-2 h-1 bg-[#E2FF07] rounded-full transition-all duration-300 ease-in-out w-0 group-hover:w-8'></div>
            </div>
            <div className='flex flex-col justify-center items-center group cursor-pointer relative'>
                 <Link to='/how-i-work#testimonial' className='overflow-hidden font-polymedianwide text-[28px] md:text-[38px] lowercase tracking-[-0.96px] leading-tight transition-all duration-300 ease-in-out text-white opacity-50 hover:opacity-100'>
                    <span className='link-text block will-change-transform translate-none rotate-none scale-none transform translate-x-0 -translate-y-full'>
                        testimonials
                    </span>
                </Link>
                <div className='absolute -bottom-2 h-1 bg-[#E2FF07] rounded-full transition-all duration-300 ease-in-out w-0 group-hover:w-8'></div>
            </div>
        </div>
      </section>
    </nav>
  )
}

export default Navbar
