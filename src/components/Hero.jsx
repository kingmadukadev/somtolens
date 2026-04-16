import React, { useState } from 'react'
import { useGSAP } from "@gsap/react"
import { SplitText } from 'gsap/all'
import Navbar from './Navbar'
import background from '../images/grid-layer (1).svg'
import gsap from "gsap"
import heroImage from '../images/4c31743a-7d01-45af-a7b6-3f71b952b7be-removebg-preview.png'
import { FiPlay } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import videoReel from '../videos/watchreel.MP4'

gsap.registerPlugin(SplitText);

const Hero = () => {
   
     useGSAP(() => {
         let split = SplitText.create(".split", { type: "words, chars, lines" });

        gsap.from(split.lines, {
            rotationX: -100,
            transformOrigin: '50% 50% -80px',
            duration: 1,
            ease: "power3",
            stagger: 0.25
        })
    }, [])

    const [showVideo, setShowVideo] = useState(false)
  return (
    <>
        <div className='absolute inset-0 z-0 pointer-events-none'>
          <img
            src={background}
            alt=""
            className='object-cover opacity-60 absolute h-full w-full'
          />
        </div>
        <Navbar />
    <div className='relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-360 mx-auto px-4! py-4! h-full'>
        <div className='relative flex flex-col items-center w-full max-w-4xl h-full justify-center'>
            <div className='relative w-full max-w-100 md:max-w-220 max-h-[45vh] md:max-h-[57vh] aspect-4/5 flex justify-center shrink'>
                <img src={heroImage} alt="Hero" className='object-contain w-full h-full select-none pointer-events-none drop-shadow-2xl text-transparent' width="700" height="700" decoding='async' />
            </div>
            <div className=' relative z-20 flex flex-col items-center -mt-16! md:-mt-32! w-full shrink-0 pb-4! md:pb-0!'>
                <div className='flex flex-wrap items-center justify-center gap-2 mb-1! md:mb-2! overflow-hidden titles'>
                    <p className='font-polyslimmono text-[10px] md:text-[14px] text-gray-300 scale-none rotate-none translate-none transform translate-x-0 translate-y-0 opacity-100'>Creative Director</p>
                    <div className='w-1.5 h-1.5 rounded-full bg-[#A2B418] scale-none rotate-none translate-none transform translate-x-0 translate-y-0 opacity-100'></div>
                    <p className='font-polyslimmono text-[10px] md:text-[14px] text-gray-300 scale-none rotate-none translate-none transform translate-x-0 translate-y-0 opacity-100'>Video Editor</p>
                    <div className='w-1.5 h-1.5 rounded-full bg-[#A2B418] scale-none rotate-none translate-none transform translate-x-0 translate-y-0 opacity-100'></div>
                    <p className='font-polyslimmono text-[10px] md:text-[14px] text-gray-300 scale-none rotate-none translate-none transform translate-x-0 translate-y-0 opacity-100'>Mobile Videographer</p>
                </div>
                <h2 className='font-polyneutral text-[40px] md:text-6xl lg:text-[60px] text-center leading-none md:leading-[1.1] lg:tracking-[-1.5px] mb-2! md:mb-0! txt-1' aria-label='Ude Somto Daniel'>
                    <div aria-hidden="true" className='relative inline-block translate-none rotate-none scale-none transform translate-x-0 translate-y-0 opacity-100'>U</div>
                    <div aria-hidden="true" className='relative inline-block translate-none rotate-none scale-none transform translate-x-0 translate-y-0 opacity-100'>d</div>
                    <div aria-hidden="true" className='relative inline-block translate-none rotate-none scale-none transform translate-x-0 translate-y-0 opacity-100'>e</div>
                    <div aria-hidden="true" className='relative inline-block w-2 md:w-5 translate-none rotate-none scale-none transform translate-x-0 translate-y-0 opacity-100'> </div>
                    <div aria-hidden="true" className='relative inline-block translate-none rotate-none scale-none transform translate-x-0 translate-y-0 opacity-100'>S</div>
                    <div aria-hidden="true" className='relative inline-block translate-none rotate-none scale-none transform translate-x-0 translate-y-0 opacity-100'>o</div>
                    <div aria-hidden="true" className='relative inline-block translate-none rotate-none scale-none transform translate-x-0 translate-y-0 opacity-100'>m</div>
                    <div aria-hidden="true" className='relative inline-block translate-none rotate-none scale-none transform translate-x-0 translate-y-0 opacity-100'>t</div>
                    <div aria-hidden="true" className='relative inline-block translate-none rotate-none scale-none transform translate-x-0 translate-y-0 opacity-100'>o</div>
                    <div aria-hidden="true" className='relative inline-block w-2 md:w-5 translate-none rotate-none scale-none transform translate-x-0 translate-y-0 opacity-100'> </div>
                    <div aria-hidden="true" className='relative inline-block translate-none rotate-none scale-none transform translate-x-0 translate-y-0 opacity-100'>D</div>
                    <div aria-hidden="true" className='relative inline-block translate-none rotate-none scale-none transform translate-x-0 translate-y-0 opacity-100'>a</div>
                    <div aria-hidden="true" className='relative inline-block translate-none rotate-none scale-none transform translate-x-0 translate-y-0 opacity-100'>n</div>
                    <div aria-hidden="true" className='relative inline-block translate-none rotate-none scale-none transform translate-x-0 translate-y-0 opacity-100'>i</div>
                    <div aria-hidden="true" className='relative inline-block translate-none rotate-none scale-none transform translate-x-0 translate-y-0 opacity-100'>e</div>
                    <div aria-hidden="true" className='relative inline-block translate-none rotate-none scale-none transform translate-x-0 translate-y-0 opacity-100'>l</div>
                </h2>
                <p className='txt-2 font-polyslimmono text-xs md:text-[16px] max-w-[85%] md:w-107.5 lg:tracking-[-0.4px] lg:pt-2 mx-auto! text-center text-grey mb-4! md:mb-6! leading-tight'>
                    also known as @udesomto on instagram is a Video Producer based in Lagos, Nigeria.
                </p>
            </div>
        </div>
    </div>
    <div className='flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-6! md:mb-10! buttons'>
                <div className='translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;'>
                    <button onClick={() => setShowVideo(true)} className='text-black bg-white ring-1 ring-[#4A4A4A] font-polyneutralmono py-1.5! px-3! md:py-2! md:px-4! flex items-center gap-2 rounded-lg shadow-lg hover:scale-105 transition-transform text-xs md:text-sm cursor-pointer'>
                        Watch Reel
                        <FiPlay />
                    </button>
                </div>
                {showVideo &&(
                    <div className='fixed inset-0 w-full h-screen bg-black/90 z-50 pointer-events-auto flex items-center justify-center p-4! md:p-8!'>
                        <p onClick={() => setShowVideo(false)} className='absolute z-55! pointer-events-auto top-4 right-4 md:top-12.5 md:right-12.5 cursor-pointer font-polyneutral text-sm md:text-base hover:text-gray-300 transition-colors'>CLOSE</p>
                        <div className='w-full h-auto max-w-175 aspect-video rounded-lg overflow-hidden'>
                            <video src={videoReel} controls playsInline loop autoPlay className='w-full h-full object-cover'></video>
                        </div>
                    </div>
                )}
                <div className='translate-none rotate-none scale-none transform translate-x-0 translate-y-0 opacity-100'>
                    <a target='_blank' href="#">
                        <button className='bg-transparent text-white font-polyneutralmono text-xs md:text-sm py-1.5! px-3! md:py-2! md:px-4! ring-1 ring-white rounded-lg hover:bg-white/10 transition-colors border border-[#FFFFFF] cursor-pointer'>
                            Contact
                        </button>
                    </a>
                </div>
                <div className='translate-none rotate-none scale-none transform translate-x-0 translate-y-0 opacity-100'>
                    <Link to='/featured-work'>
                        <button className='bg-transparent text-white font-polyneutralmono text-xs md:text-sm py-1.5! px-3! md:py-2! md:px-4! ring-1 ring-white rounded-lg hover:bg-white/10 transition-colors border border-[#FFFFFF] cursor-pointer'>
                            Work
                        </button>                    
                    </Link>
                </div>
    </div>
    <div className='flex justify-center items-center gap-1.5 analytics overflow-hidden'>
        <div className='flex flex-col justify-center items-center bg-[#FFFFFF0F] backdrop-blur-sm rounded md:rounded-lg py-2! px-1! md:px-1.5! md:py-1.5! border border-[#363636] translate-none rotate-none scale-none transform translate-x-0 translate-y-0'>
            <p className='font-polymedian text-xs md:text-[14px] text-white whitespace-nowrap'>100k+</p>
            <p className='font-polyslimmono text-[10px] md:text-xs text-[#CDCDCD] pt-1'>Streams</p>
        </div>
        <div className='flex flex-col justify-center items-center bg-[#FFFFFF0F] backdrop-blur-sm rounded md:rounded-lg py-2! px-1! md:px-1.5! md:py-1.5! border border-[#363636] translate-none rotate-none scale-none transform translate-x-0 translate-y-0'>
            <p className='font-polymedian text-xs md:text-[14px] text-white whitespace-nowrap'>20+</p>
            <p className='font-polyslimmono text-[10px] md:text-xs text-[#CDCDCD] pt-1'>Projects</p>
        </div>
        <div className='flex flex-col justify-center items-center bg-[#FFFFFF0F] backdrop-blur-sm rounded md:rounded-lg py-2! px-1! md:px-1.5! md:py-1.5! border border-[#363636] translate-none rotate-none scale-none transform translate-x-0 translate-y-0'>
            <p className='font-polymedian text-xs md:text-[14px] text-white whitespace-nowrap'>4</p>
            <p className='font-polyslimmono text-[10px] md:text-xs text-[#CDCDCD] pt-1'>Retainers</p>
        </div>
        <div className='flex flex-col justify-center items-center bg-[#FFFFFF0F] backdrop-blur-sm rounded md:rounded-lg py-2! px-1! md:px-1.5! md:py-1.5! border border-[#363636] translate-none rotate-none scale-none transform translate-x-0 translate-y-0'>
            <p className='font-polymedian text-xs md:text-[14px] text-white whitespace-nowrap'>5+ years</p>
            <p className='font-polyslimmono text-[10px] md:text-xs text-[#CDCDCD] pt-1'>Experience</p>
        </div>
    </div>
    </>
  )
}

export default Hero
