import React, { useRef } from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Lenis from '@studio-freight/lenis'
import camera from '../images/camera.webp'
import somto from '../images/udesom.jpg'
import udesomto from '../images/udesom2.jpg'
import udesomto2 from '../images/udesom3.jpg'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {

    const container = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray('.about-card')

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top top',
                end: '+=' + window.innerHeight * (cards.length - 1),
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            }
        })

        cards.slice(0, -1).forEach((card) => {
            tl.to(card, {
                clipPath: 'inset(0 0 100% 0)',
                ease: 'power2.inOut',
                duration: 1
            })
        })
        const fourthCard = cards[3]
        const heading = fourthCard.querySelector('.create-ab')
        const paragraph = fourthCard.querySelector('.book-card-4')
        const buttons = fourthCard.querySelectorAll('.ab-btns a')

        const split = new SplitText(heading, { type: 'chars' })
        gsap.set(split.chars, { y: 80, opacity: 0 })
        gsap.set(paragraph, { y: 40, opacity: 0 })
        gsap.set(buttons, { y: 40, opacity: 0 })

        tl.to(split.chars, {
            y: 0,
            opacity: 1,
            stagger: 0.03,
            duration: 0.6,
            ease: 'power3.out'
        })
        .to(paragraph, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.3')
        .to(buttons, {
            y: 0,
            opacity: 1,
            stagger:0.2,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.4')
    }, { scope: container })


    
  return (
    <div>
        <div ref={container} className='overflow-visible relative z-auto place-self-auto float-none block m-0 inset-0 h-screen w-screen' style={{order: 0,  gridArea: 'auto', flexShrink: 1, flexBasis: 'auto', boxSizing: 'border-box',}}>
            <section className='w-full h-full overflow-hidden bg-black text-white relative'>
                        <div className='about-card z-5 absolute w-full h-full bg-black card-1' style={{ clipPath: 'inset(0 0 0 0)'}}>
                            <Navbar />
                            <div className='absolute inset-0 w-full h-full bg-[#00000006] backdrop-blur-[20px] z-10 pointer-events-none'></div>
                            <div className='hidden md:block w-full h-full absolute inset-0'>
                                <img src={camera} alt="about 1" decoding='async' className='object-cover absolute h-full w-full inset-0' sizes='100vw' data-nimg='fill' />
                            </div>
                            <div className='block md:hidden w-full h-full absolute inset-0'>
                                <img src={camera} alt=" about 1 mobile"  decoding='async' className='object-cover absolute h-full w-full inset-0' sizes='100vw' data-nimg='fill' />
                            </div>
                            <article className='card-text-1 absolute inset-0 z-20 flex flex-col justify-center items-center text-left gap-6 w-full max-w-201.5 px-6! mx-auto! tracking-[-0.88px]' style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>
                                <div className='w-full'>
                                    <p className='font-polyneutralwide text-[20px] md:text-4xl lg:text-[34px] leading-tight'>
                                        Somto 
                                        <span className='tex-white/64'> has spent </span>
                                        <span className='text-[#f5ffa2]'>
                                            8+ {''}
                                            <br className='md: hidden' />
                                              years {''}
                                        </span>
                                        <br className='hidden md:inline' />
                                        crafting visual {''}   

                                        <br className='md:hidden ' />
                                         stories
                                         <span className='text-white/64'> that </span>
                                         convert
                                    </p>
                                    <div className='h-6'></div>
                                    <p className='font-polyneutralwide text-[20px] md:text-4xl lg:text-[34px] leading-tight'>
                                        Having 
                                        <span className='text-white/64'> spent nearly </span>
                                        <br className='md:hidden' />
                                        half his career

                                        <br className='hidden md:inline' />
                                        as Head {''} 
                                        <br className='md:hidden ' />
                                         of Production 
                                        <span className='text-white/64'> at </span>
                                        Clout 
                                        <br />
                                        Africa, 
                                        <span className='text-white/64'> directing </span>
                                        <br className='md:hidden ' />
                                        everything
                                        <span className='text-white/64'> and </span>
                                        <br className='md:hidden ' />
                                        concert {''}
                                        <br className='hidden md:inline' />
                                        visuals
                                        <span className='text-white/64'> to </span>
                                         viral {''}

                                        <br className='md:hidden ' />
                                         social media {''}
                                        <br className='hidden md:inline' />
                                         campaigns
                                        <br className='md:hidden ' />
                                        <span className='text-white/64'> and </span>
                                         brand activations.
                                    </p>
                                </div>
                            </article>
                        </div>
                        <div className='about-card z-4 absolute w-full h-full bg-black card-2' style={{ clipPath: 'inset(0 0 0 0)'}}>
                            <Navbar />
                            <div className='absolute inset-0 w-full h-full bg-[#00000006] backdrop-blur-[20px] z-10 pointer-events-none'></div>
                            <div className='hidden md:block w-full h-full absolute inset-0'>
                                <img src={somto} alt="about 2" decoding='async' className='object-cover absolute h-full w-full inset-0' sizes='100vw' data-nimg='fill' />
                            </div>
                            <div className='block md:hidden w-full h-full absolute inset-0'>
                                <img src={somto} alt="about 2 mobile"  decoding='async' className='object-cover absolute h-full w-full inset-0' sizes='100vw' data-nimg='fill' />
                            </div>
                            <article className='card-text-2 absolute inset-0 z-20 flex flex-col justify-center items-center gap-6 w-full max-w-196.5 px-6! mx-auto! tracking-[-0.88px] font-polyneutralwide' style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, px, 0px)', opacity: 1}}>
                                <div className='w-full text-right'>
                                    <p className='text-[20px] md:text-4xl lg:text-[34px] leading-tight'>
                                        His specialty? 
                                        <br />
                                         Creating memories that
                                        <br className='md:hidden ' />
                                         stick. He
                                        <span className='text-white/64'> helps </span>
                                         brands ideate, craft,
                                        <span className='text-white/64'> and </span>
                                        <br className='md:hidden ' />
                                         execute storytelling {''}
                                        <br className='md:hidden ' />
                                        <span className='text-white/64'>
                                             that doesn't {''}
                                            <br className='hidden md:inline' />
                                             just look {''} 
                                            <br className='md:hidden ' />
                                             good.
                                            
                                        </span>
                                        <br />
                                         It drives results.
                                    </p>
                                </div>
                            </article>
                        </div>
                        <div className='about-card z-3 absolute w-full h-full bg-black card-3' style={{ clipPath: 'inset(0 0 0 0)'}}>
                            <Navbar />
                            <div className='absolute inset-0 w-full h-full bg-[#00000006] backdrop-blur-[20px] z-10 pointer-events-none'></div>
                            <div className='hidden md:block w-full h-full absolute inset-0'>
                                <img src={udesomto} alt="about 3" decoding='async' className='object-cover absolute h-full w-full inset-0' sizes='100vw' data-nimg='fill' />
                            </div>
                            <div className='block md:hidden w-full h-full absolute inset-0'>
                                <img src={udesomto} alt="about 3 mobile"  decoding='async' className='object-cover absolute h-full w-full inset-0' sizes='100vw' data-nimg='fill' />
                            </div>
                            <article className='card-text-3 absolute inset-0 z-20 flex flex-col justify-center items-center w-full max-w-194 px-6! mx-auto! font-polyneutralwide tracking-[-0.88px]' style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, px, 0px)', opacity: 1}}>
                                <div className='w-full text-left'>
                                    <p className='text-[20px] md:text-4xl lg:text-[34px] leading-tight'>
                                        <span className='text-white/64'> From </span>
                                         Davido's sold-out {''}
                                        <br className='md:hidden' />
                                          O2 Arena performance
                                        <br className='md:hidden ' />
                                        <span className='text-white/64'> to </span>
                                           campaigns that hit {''}
                                        <br className='hidden md:inline' />
                                            10 million+ streams.
                                        <br />
                                        Somto {''}
                                        <span className='text-white/64'>
                                             turn creative {''}
                                            <br className='md:hidden' />
                                             vision into {''}
                                            <br className='hidden md:inline' />
                                              cultural {''}
                                            <br className='md:hidden' />
                                               moments.
                                        </span>
                                        
                                    </p>
                                </div>
                            </article>
                        </div>
                        <div className='about-card z-2 absolute w-full h-full bg-black card-4' style={{ clipPath: 'inset(0 0 0 0)'}}>
                            <Navbar />
                            <div className='absolute inset-0 w-full h-full bg-[#00000006] backdrop-blur-[20px] z-10 pointer-events-none'></div>
                            <div className='hidden md:block w-full h-full absolute inset-0'>
                                <img src={udesomto2} alt="about 4" decoding='async' className='object-cover absolute h-full w-full inset-0' sizes='100vw' data-nimg='fill' />
                            </div>
                            <div className='block md:hidden w-full h-full absolute inset-0'>
                                <img src={udesomto2} alt="about 4 mobile"  decoding='async' className='object-cover absolute h-full w-full inset-0' sizes='100vw' data-nimg='fill' />
                            </div>
                            <div className='flex flex-col justify-center items-center absolute inset-0 z-20 px-4! text-center text-white pb-20!'>
                                <h1 className='create-ab font-polyneutralwide font-bold text-4xl md:text-6xl lg:text-[56px] lg:tracking-[-1.44px] leading-tight md:leading-none max-w-4xl' aria-label="Let's Create  Something  unforgettable">
                                    <div aria-hidden='true' style={{position: 'relative', display: 'block', textAlign: 'center'}}>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>L</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>t</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>'</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>s</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>C</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>r</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>a</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>t</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                                    </div>
                                    <div aria-hidden='true' style={{position: 'relative', display: 'block', textAlign: 'center'}}>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>S</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>m</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>t</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>h</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>i</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>n</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>g</div>
                                    </div>
                                    <div aria-hidden='true' style={{position: 'relative', display: 'block', textAlign: 'center'}}>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>u</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>n</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>f</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>r</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>g</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>t</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>t</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>a</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>b</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>l</div>
                                        <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                                    </div>
                                </h1>
                                <p className='font-polyslimmono text-[12px] md:text-lg mt-4 md:text-[14px] md:mt-6 leading-relaxed opacity-90 lg:w-101 book-card-4' style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 0.9, transform: 'translate(0px, 0px)'}}>
                                    Book a call & discuss your next viral {''}
                                    <br className='md:hidden' />
                                    video. No commitments, just for {''}
                                    <br className='md:hidden' />
                                     clarity.
                                </p>
                                <div className='flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-8 w-full max-w-md md:max-w-none px-2! ab-btns'>
                                    <a target='_blank' href="" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>
                                        <button className='bg-[#DBFF00] w-2xs md:w-full text-black font-polyneutralmono py-2! px-3! rounded-lg border border-white shadow-[0px_4px_32px_rgba(60,72,88,0.05)] text-sm md:text-base font-semibold cursor-pointer hover:opacity-90 transition-opacity'>Book a discovery call</button>
                                    </a>
                                    <a target='_blank' href="" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>
                                        <button className='bg-transparent w-2xs md:w-full text-white font-polyneutralmono py-2! px-3!  ring-1 ring-white rounded-lg text-sm md:text-base cursor-pointer hover:bg-white/10 transition-colors md:flex-none '>DM on whatsapp</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    
                    
                
            </section>
        </div>
        <footer className='w-full pt-8! md:pt-6.75! footer-css overflow-hidden text-[#E6E6E6]'>
            <nav className='flex flex-wrap md:flex-nowrap items-center justify-between gap-3 md:gap-0 px-4! md:px-17! w-full max-w-360 mx-auto! overflow-hidden'>
                <Link to="/" className='flex-1 f-links md:flex-none text-center py-2! px-3! md:py-3! md:px-4! bg-[#FFFFFF0F] rounded md:rounded-sm text-xs md:text-[28px] font-polyneutralmono hover:bg-[#FFFFFF1A] transition-colors whitespace-nowrap'>Home</Link>
                <Link to="/about" className='flex-1 f-links md:flex-none text-center py-2! px-3! md:py-3! md:px-4! bg-[#FFFFFF0F] rounded md:rounded-sm text-xs md:text-[28px] font-polyneutralmono hover:bg-[#FFFFFF1A] transition-colors whitespace-nowrap'>About</Link>
                <Link to="/how-i-work" className='flex-1 f-links md:flex-none text-center py-2! px-3! md:py-3! md:px-4! bg-[#FFFFFF0F] rounded md:rounded-sm text-xs md:text-[28px] font-polyneutralmono hover:bg-[#FFFFFF1A] transition-colors whitespace-nowrap'>How i work</Link>
                <a href="https://wa.link/oz556h" rel='noopener noreferrer' className='flex-1 f-links md:flex-none text-center py-2! px-3! md:py-3! md:px-4! bg-[#FFFFFF0F] rounded md:rounded-sm text-xs md:text-[28px] font-polyneutralmono hover:bg-[#FFFFFF1A] transition-colors whitespace-nowrap'>Contact</a>
            </nav>
            <div className='f-links-2 flex flex-col md:flex-row items-start md:items-center justify-between pt-10! md:pt-39.25! px-4! md:px-17! pb-4! md:pb-0! gap-4 md:gap-0 w-full max-w-360 mx-auto!'>
                <a target='_blank' rel='noopener noreferrer' className='font-polyslimmono text-sm md:text-[22px] hover:text-white transition-colors' href="">Instagram</a>
                <a target='_blank' rel='noopener noreferrer' className='font-polyslimmono text-sm md:text-[22px] hover:text-white transition-colors' href="">Somto@gmail.com</a>
                <a target='_blank' rel='noopener noreferrer' className='font-polyslimmono text-sm md:text-[22px] hover:text-white transition-colors' href="">Lagos, Nigeria</a>
            </div>
            <div className='w-full mt-8! md:mt-0! overflow-hidden'>
                <img src="" alt="" loading='lazy' width={1440} height={300} decoding='async' data-nimg='1' className='w-full h-auto object-cover select-none f-img' />
            </div>
        </footer>
    </div>
    
  )
}

export default About
