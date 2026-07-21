import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { Link } from 'react-router-dom'


gsap.registerPlugin(ScrollTrigger);
const Pricing = () => {
    const sectionRef = useRef(null);
    const footerRef = useRef(null);
    useGSAP(() => {
  if (!sectionRef.current || !footerRef.current) return;

  const footerHeight = footerRef.current.offsetHeight;

  const st = ScrollTrigger.create({
    trigger: sectionRef.current,
    start: "bottom bottom",
    end: "+=" + footerHeight,
    scrub: 1,
    pin: true,
    anticipatePin: 1,

    onToggle: (self) => {
      // self.pin = the pinned element
      // self.spacer = the pin-spacer wrapper (this often blocks clicks)
      const block = self.isActive;

      if (self.pin) self.pin.style.pointerEvents = block ? "none" : "auto";
      if (self.spacer) self.spacer.style.pointerEvents = block ? "none" : "auto";

      // always allow footer clicks
      footerRef.current.style.pointerEvents = "auto";
    },
  });

  gsap.to(sectionRef.current, {
    y: -footerHeight,
    ease: "none",
    scrollTrigger: st,
  });

  return () => {
    st.kill();
  };
}, []);
  return (
    <div className='relative w-full wrapper'>
        <div ref={sectionRef}  className='pricing-section relative z-20 w-full min-h-screen bg-black shadow-[0px_10px_40px_rgba(0,0,0,0.5)]'>
            <section className='min-h-dvh w-full relative bg-black text-white flex flex-col mb-5!'>
                <script type='application/ld+json' dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Product","name":"Somto Lens Video Production Packages","description":"Professional video production packages in Lagos, Nigeria including Per Video, Creator, Brand, and Bi-Yearly options.","brand":{"@type":"Brand","name":"Somto Lens"},"offers":{"@type":"AggregateOffer","lowPrice":"400000","highPrice":"12000000","priceCurrency":"NGN","offerCount":"4","offers":[{"@type":"Offer","name":"Per Video Package","price":"400000","priceCurrency":"NGN"},{"@type":"Offer","name":"Creator Package","price":"400000","priceCurrency":"NGN"},{"@type":"Offer","name":"Brand Package","price":"4000000","priceCurrency":"NGN"},{"@type":"Offer","name":"Bi-Yearly Package","price":"12000000","priceCurrency":"NGN"}]}}) }} />
                <Navbar />
                <div className='sr-only'>
                    <h1>Video Production Pricing & Packages — Somto Lens</h1>
                    <p>Flexible pricing options to meet every creative need in Lagos, Nigeria.</p>
                    <h2>BASIC PACKAGE</h2>
                    <p>₦150,000 | Perfect for quick, stylish highlights | 1-hour event coverage | 1 Highlight Video (30-60 secs) | 1 Outfit | Basic transitions and trending music | Delivery within 2–3 days</p>
                    <h2>STANDARD PACKAGE</h2>
                    <p>₦200,000 | Ideal for personal celebrations or small events | Up to 2 hours coverage | 2 Edited Videos (each 30-90 secs) | Up to 2 outfit changes | Cinematic effects, smooth transitions, trend-based edits | Optional interview or message clips | Delivery within 3–5 days</p>
                    <h2>PREMIUM PACKAGE</h2>
                    <p>₦500,000 | For weddings, high-end birthdays, or executive moments | Up to 6 hours coverage | 3–4 Edited Videos (Mix of Reels, Cinematic Cuts & Recap) | Up to 3 outfit changes | Drone-style angles (using gimbal/tripod creatively) | Priority editing (Delivery in 2–3 days) | Personalized trending soundtrack | Optional: Behind-the-scenes (BTS) mini vlog</p>
                    <h2>Bi-Yearly Package</h2>
                    <p>₦12,000,000 | 4 Production Days Per Month | 120 Videos in 6 Months. scalable content production.</p>
                    <h2>Custom Packages</h2>
                    <p>Contact: marioakinola60@gmail.com for tailored video production pricing.</p>
                </div>
                <div className='flex-1 flex flex-col items-center justify-center w-full max-w-360 mx-auto! px-4! py-12! md:py-20!'>
                    <div className='flex flex-col items-center text-center mb-12!'>
                        <div className='anim-header px-2.5! py-1.5! bg-[rgba(255,255,255,0.12)] border-2 border-[rgba(250,250,250,0.12)] rounded-lg mb-6!' style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>
                            <span className='font-polyslimmono text-xs md:text-sm text-[#FAFAFA] tracking-widest '>Pricing</span>
                        </div>
                        <h1 className='anim-header font-polyneutral text-4xl lg:text-[72px] tracking-[-0.72px] mb-2! text-[#FAFAFA] [-webkit-text-stroke:1.5px_#ACACAC] ' style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>
                            creator x brand {''}
                            <br className='hidden md:block' />
                            packages
                        </h1>
                        <p className='anim-header font-polyslimmono text-sm md:text-lg text-grey tracking-wide mt-3 lg:max-w-75' style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>
                            Flexible options for every {''}
                            <br className='md:hidden' />
                            creative need
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:gap-4 gap-6 w-full max-w-6xl mx-auto!'>
                        <div className='anim-card flex flex-col w-full max-w-[320px] md:max-w-none mx-auto! group relative' style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>
                            <div className='bg-[#08F7C0] text-black py-4! px-4! text-center rounded-t-sm relative z-20'>
                                <div className='flex items-center justify-center gap-4'>
                                    <h3 className='font-polybulkywide text-sm md:text-[20px] font-bold capitalize tracking-[-0.4px]'>BASIC PACKAGE</h3>
                                    <div className='relative cursor-pointer'>
                                        <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor' className='opacity-80 hover:opacity-100 transition-opacity'>
                                            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#111] border border-[#222] border-t-0 p-6! flex flex-col items-center gap-13 rounded-b-sm h-full hover:border-[#444] transition-colors relative z-10'>
                                <p className='font-polybulkywide text-2xl md:text-3xl lg:text-[28px] mt-5! text-white xl:tracking-[-0.56px]'>₦50,000</p>
                                <div className='flex flex-col w-full'>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                            Perfect for quick, stylish highlights
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                            1-hour event coverage
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                           1 Highlight Video (30-60 secs)
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                            1 Outfit
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                            Basic transitions and trending music
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] border-b'>
                                         <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                            Delivery within 2–3 days
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='anim-card flex flex-col w-full max-w-[320px] md:max-w-none mx-auto! group relative' style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>
                             <div className='bg-[#F7DE08] text-black py-4! px-4! text-center rounded-t-sm relative z-20'>
                                <div className='flex items-center justify-center gap-4'>
                                    <h3 className='font-polybulkywide text-sm md:text-[20px] font-bold capitalize tracking-[-0.4px]'>STANDARD PACKAGE</h3>
                                    <div className='relative cursor-pointer'>
                                        <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor' className='opacity-80 hover:opacity-100 transition-opacity'>
                                            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#111] border border-[#222] border-t-0 p-6! flex flex-col items-center gap-13 rounded-b-sm h-full hover:border-[#444] transition-colors relative z-10'>
                                <p className='font-polybulkywide text-2xl md:text-3xl lg:text-[28px] mt-5! text-white xl:tracking-[-0.56px]'>₦80,000</p>
                                <div className='flex flex-col w-full'>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                            Ideal for personal celebrations or small events
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                            Up to 2 hours coverage
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                           2 Edited Videos (each 30-90 secs)
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                            Up to 2 outfit changes
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                           Cinematic effects, smooth transitions, trend-based edits
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                            Optional interview or message clips
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] border-b'>
                                         <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                            Delivery within 3–5 days
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='anim-card flex flex-col w-full max-w-[320px] md:max-w-none mx-auto! group relative' style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>
                            <div className='bg-[#E2FF07] text-black py-4! px-4! text-center rounded-t-sm relative z-20'>
                                <div className='flex items-center justify-center gap-4'>
                                    <h3 className='font-polybulkywide text-sm md:text-[20px] font-bold capitalize tracking-[-0.4px]'>PREMIUM PACKAGE</h3>
                                    <div className='relative cursor-pointer'>
                                        <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor' className='opacity-80 hover:opacity-100 transition-opacity'>
                                            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#111] border border-[#222] border-t-0 p-6! flex flex-col items-center gap-13 rounded-b-sm h-full hover:border-[#444] transition-colors relative z-10'>
                                <p className='font-polybulkywide text-2xl md:text-3xl lg:text-[28px] mt-5! text-white xl:tracking-[-0.56px]'>₦120,000</p>
                                <div className='flex flex-col w-full'>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                            For weddings, high-end birthdays, or executive moments
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                            Up to 6 hours coverage
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                           3–4 Edited Videos (Mix of Reels, Cinematic Cuts & Recap)
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                            Up to 3 outfit changes
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                           Drone-style angles (using gimbal/tripod creatively)
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                           Priority editing (Delivery in 2–3 days)
                                        </p>
                                    </div>
                                     <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                            Personalized trending soundtrack
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] border-b'>
                                         <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                            Optional: Behind-the-scenes (BTS) mini vlog
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='anim-card flex flex-col w-full max-w-[320px] md:max-w-none mx-auto! group relative' style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>
                            <div className='bg-[#2BFE9F] text-black py-4! px-4! text-center rounded-t-sm relative z-20'>
                                <div className='flex items-center justify-center gap-4'>
                                    <h3 className='font-polybulkywide text-sm md:text-[20px] font-bold capitalize tracking-[-0.4px]'>ADD-ONS & EXTRA</h3>
                                    <div className='relative cursor-pointer'>
                                        <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor' className='opacity-80 hover:opacity-100 transition-opacity'>
                                            <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-[#111] border border-[#222] border-t-0 p-6! flex flex-col items-center gap-13 rounded-b-sm h-full hover:border-[#444] transition-colors relative z-10'>
                                <p className='font-polybulkywide text-2xl md:text-3xl lg:text-[28px] mt-5! text-white xl:tracking-[-0.56px]'>₦CUSTOM</p>
                                <div className='flex flex-col w-full'>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                           Extra Hour of Coverage – ₦20,000
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                            Additional Video – ₦15,000 each
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                           Re-edit or Revision – ₦10,000
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                            Voiceover or Interview Clip – ₦5,000
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] '>
                                        <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                           Travel Outside City – Custom rate
                                        </p>
                                    </div>
                                    <div className='flex flex-col items-center w-full border-t border-[#D0D0D0] border-b'>
                                         <p className='font-polyslimmono text-[12px] md:text-xs font-semibold text-white uppercase text-center tracking-[-0.24px] leading-relaxed py-2 px-2'>
                                            Overnight/Hotel Logistics (if needed) – To be handled by client
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='anim-footer flex flex-col items-center gap-6 mt-16! md:mt-24 text-center w-full' style={{translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>
                        <p className='font-polyslimmono text-sm md:text-base text-grey'>
                            Want a custom plan? Let’s talk.
                        </p>
                        <div className='flex flex-col gap-4 w-full px-4! md:hidden max-w-[320px] mx-auto!'>
                            <div className='flex items-center justify-between w-full group'>
                                <div className='flex items-center gap-3'>
                                    <span className='text-lg opacity-80'>📧</span>
                                    <span className='font-polyslimmono text-sm text-[#E6E6E6] tracking-wide truncate'>somto@gmail.com</span>
                                </div>
                                <button className='relative p-2! hover:bg-[#FFFFFF1A] rounded-md transition-colors cursor-pointer shrink-0' aria-label="Copy to clipboard">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CFCFCF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                </button>
                            </div>
                            <div className='flex items-center justify-between w-full group'>
                                <div className='flex items-center gap-3'>
                                    <span className='text-lg opacity-80'>📱</span>
                                    <span className='font-polyslimmono text-sm text-[#E6E6E6] tracking-wide truncate'>+234 903 230 5504</span>
                                </div>
                                <button class="relative p-2! hover:bg-[#FFFFFF1A] rounded-md transition-colors cursor-pointer shrink-0" aria-label="Copy to clipboard"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#CFCFCF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg></button>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </section>
        </div>
        <div ref={footerRef} className='fixed footer bottom-0 left-0 w-full z-10 pointer-events-auto'>
             <footer className='w-full pt-8! md:pt-6.75! footer-css overflow-hidden text-[#E6E6E6]'>
            <nav className='flex flex-wrap md:flex-nowrap items-center justify-between gap-3 md:gap-0 px-4! md:px-17! w-full max-w-360 mx-auto! overflow-hidden'>
                <Link to="/" className='flex-1 f-links md:flex-none text-center py-2! px-3! md:py-3! md:px-4! bg-[#FFFFFF0F] rounded md:rounded-sm text-xs md:text-[28px] font-polyneutralmono hover:bg-[#FFFFFF1A] transition-colors whitespace-nowrap'>Home</Link>
                <Link to="/about" className='flex-1 f-links md:flex-none text-center py-2! px-3! md:py-3! md:px-4! bg-[#FFFFFF0F] rounded md:rounded-sm text-xs md:text-[28px] font-polyneutralmono hover:bg-[#FFFFFF1A] transition-colors whitespace-nowrap'>About</Link>
                <Link to="/how-i-work" className='flex-1 f-links md:flex-none text-center py-2! px-3! md:py-3! md:px-4! bg-[#FFFFFF0F] rounded md:rounded-sm text-xs md:text-[28px] font-polyneutralmono hover:bg-[#FFFFFF1A] transition-colors whitespace-nowrap'>How i work</Link>
                <a href="https://wa.link/oz556h" target='_blank' rel='noopener noreferrer' className='flex-1 f-links md:flex-none text-center py-2! px-3! md:py-3! md:px-4! bg-[#FFFFFF0F] rounded md:rounded-sm text-xs md:text-[28px] font-polyneutralmono hover:bg-[#FFFFFF1A] transition-colors whitespace-nowrap'>Contact</a>
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
    </div>
  )
}

export default Pricing
