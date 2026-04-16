import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const HowIWork = () => {
  const sectionRef = useRef(null);
  const footerRef = useRef(null);

  useGSAP(() => {
  if (!sectionRef.current || !footerRef.current) return;

  const ctx = gsap.context(() => {
    const footerHeight = footerRef.current.offsetHeight;

    // ✅ prevent duplicates (StrictMode / remounts)
    ScrollTrigger.getById("how-footer-pin")?.kill();

    const st = ScrollTrigger.create({
      id: "how-footer-pin",
      trigger: sectionRef.current,
      start: "bottom bottom",
      end: "+=" + footerHeight,
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,

      onUpdate: (self) => {
        // ✅ keep enforcing during scrolling
        const block = self.isActive;

        if (self.spacer) self.spacer.style.pointerEvents = block ? "none" : "auto";
        if (self.pin) self.pin.style.pointerEvents = block ? "none" : "auto";

        footerRef.current.style.pointerEvents = "auto";
      },

      onRefresh: (self) => {
        // ✅ re-apply after refresh/resize
        const block = self.isActive;

        if (self.spacer) self.spacer.style.pointerEvents = block ? "none" : "auto";
        if (self.pin) self.pin.style.pointerEvents = block ? "none" : "auto";

        footerRef.current.style.pointerEvents = "auto";
      },
    });

    gsap.to(sectionRef.current, {
      y: -footerHeight,
      ease: "none",
      scrollTrigger: st,
    });

    // run once immediately so it doesn't “wait” to apply
    st.refresh();
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <div>
      <main ref={sectionRef} className='w-full min-h-dvh relative font-sans bg-[#F7F5E2] text-[#AFA603] z-20 shadow-[0px_10px_40px_rgba(0,0,0,0.1)]'>
        <div className='w-full max-w-360 mx-auto! px-2! md:px-17! pt-12! md:pt-20! pb-6!'>
          <div className='overflow-hidden'>
            <h1 className='font-polyneutral text-[35px] md:text-[30px] lg:text-[60px] text-center md:text-right leading-[140%] tracking-[-2%] how' aria-label="how somto works">
              <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight: '12px'}}>
                <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>h</div>
                <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>w</div>
              </div>
              <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight: '12px'}}>
                <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>s</div>
                <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>m</div>
                <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>t</div>
                <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
              </div>
               <div aria-hidden='true' style={{position: 'relative', display: 'inline-block'}}>
                <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>w</div>
                <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>r</div>
                <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>k</div>
                <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>s</div>
              </div>
            </h1>
          </div>
        </div>
        <div className='w-full'>
          <div className='w-full border-t-2 border-[#AFA603]'>
            <div className='max-w-360 mx-auto! px-6! py-8!'>
              <div className='flex flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-0'>
                <div className='w-full md:w-1/3 text-center md:text-left order-2 md:order-1'>
                  <h2 className='font-polybulkywide text-[32px] md:text-[45px] lg:text-[40px] leading-none text-[#AFA603] wrap-break-words step-title' aria-label='Discovery call'>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight: '5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>D</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>i</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>s</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>c</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>v</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>r</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>y</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block',}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>c</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>a</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>l</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>l</div>
                    </div>
                  </h2>
                </div>
                <div className='w-full md:w-1/3 flex justify-center order-3 md:order-2'>
                  <p className='font-polyslimwide text-[20px] max-w-50 text-center leading-snug step-desc' aria-label="Understand your vision & goals">
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>U</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>n</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>d</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>r</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>s</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>t</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>a</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>n</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>d</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>y</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>u</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>r</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>v</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>i</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>s</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>i</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>n</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>&</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>g</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>a</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>l</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>s</div>
                    </div>
                  </p>
                </div>
                <div className='w-full md:w-1/3 text-center md:text-right order-1 md:order-3'>
                  <span className='font-polyneutral text-[40px] md:text-[60px] lg:text-[50px] leading-none text-[#AFA603] step-number' aria-label='01.'>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>0</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>1</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>.</div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full border-t-2 border-[#AFA603]'>
            <div className='max-w-360 mx-auto! px-6! py-8!'>
              <div className='flex flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-0'>
                <div className='w-full md:w-1/3 text-center md:text-left order-2 md:order-1'>
                  <h2 className='font-polybulkywide text-[32px] md:text-[45px] lg:text-[40px] leading-none text-[#AFA603] wrap-break-words step-title' aria-label='Proposal'>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>P</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>r</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>p</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>s</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>a</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>l</div>
                    </div>
                  </h2>
                </div>
                <div className='w-full md:w-1/3 flex justify-center order-3 md:order-2'>
                  <p className='font-polyslimwide text-[20px] max-w-50 text-center leading-snug step-desc' aria-label=" Custom package & timeline">
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>C</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>u</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>s</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>t</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>m</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>p</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>a</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>c</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>k</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>a</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>g</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>&</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>t</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>i</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>m</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>l</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>i</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>n</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                    </div>
                  </p>
                </div>
                <div className='w-full md:w-1/3 text-center md:text-right order-1 md:order-3'>
                  <span className='font-polyneutral text-[40px] md:text-[60px] lg:text-[50px] leading-none text-[#AFA603] step-number' aria-label='02.'>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>0</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>2</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>.</div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full border-t-2 border-[#AFA603]'>
            <div className='max-w-360 mx-auto! px-6! py-8!'>
              <div className='flex flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-0'>
                <div className='w-full md:w-1/3 text-center md:text-left order-2 md:order-1'>
                  <h2 className='font-polybulkywide text-[32px] md:text-[45px] lg:text-[40px] leading-none text-[#AFA603] wrap-break-words step-title' aria-label='Moodboarding'>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>M</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>d</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>b</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>a</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>r</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>d</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>i</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>n</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>g</div>
                    </div>
                  </h2>
                </div>
                <div className='w-full md:w-1/3 flex justify-center order-3 md:order-2'>
                  <p className='font-polyslimwide text-[20px] max-w-50 text-center leading-snug step-desc' aria-label="Create a moodboard or proposal shoot">
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>C</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>r</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>a</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>t</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>a</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>m</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>d</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>b</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>a</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>r</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>d</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>r</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>p</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>r</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>p</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>s</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>a</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>l</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>s</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>h</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>t</div>
                    </div>
                  </p>
                </div>
                <div className='w-full md:w-1/3 text-center md:text-right order-1 md:order-3'>
                  <span className='font-polyneutral text-[40px] md:text-[60px] lg:text-[50px] leading-none text-[#AFA603] step-number' aria-label='03.'>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>0</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>3</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>.</div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full border-t-2 border-[#AFA603]'>
            <div className='max-w-360 mx-auto! px-6! py-8!'>
              <div className='flex flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-0'>
                <div className='w-full md:w-1/3 text-center md:text-left order-2 md:order-1'>
                  <h2 className='font-polybulkywide text-[32px] md:text-[45px] lg:text-[40px] leading-none text-[#AFA603] wrap-break-words step-title' aria-label='Production'>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>P</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>r</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>d</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>u</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>c</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>t</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>i</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>n</div>
                    </div>
                  </h2>
                </div>
                <div className='w-full md:w-1/3 flex justify-center order-3 md:order-2'>
                  <p className='font-polyslimwide text-[20px] max-w-50 text-center leading-snug step-desc' aria-label="Filming & creative direction">
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>F</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>i</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>l</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>m</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>i</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>n</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>g</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>&</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>c</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>r</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>a</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>t</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>i</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>v</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>d</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>i</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>r</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>c</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>t</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>i</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>n</div>
                    </div>
                  </p>
                </div>
                <div className='w-full md:w-1/3 text-center md:text-right order-1 md:order-3'>
                  <span className='font-polyneutral text-[40px] md:text-[60px] lg:text-[50px] leading-none text-[#AFA603] step-number' aria-label='04.'>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>0</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>4</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>.</div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full border-t-2 border-[#AFA603]'>
            <div className='max-w-360 mx-auto! px-6! py-8!'>
              <div className='flex flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-0'>
                <div className='w-full md:w-1/3 text-center md:text-left order-2 md:order-1'>
                  <h2 className='font-polybulkywide text-[32px] md:text-[45px] lg:text-[40px] leading-none text-[#AFA603] wrap-break-words step-title' aria-label='Post - Production'>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>P</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>s</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>t</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block',}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>-</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>P</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>r</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>d</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>u</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>c</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>t</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>i</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>n</div>
                    </div>
                  </h2>
                </div>
                <div className='w-full md:w-1/3 flex justify-center order-3 md:order-2'>
                  <p className='font-polyslimwide text-[20px] max-w-50 text-center leading-snug step-desc' aria-label="Create edited versions following the moodboard & shoot plan">
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>C</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>r</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>a</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>t</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>d</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>i</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>t</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>d</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>v</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>r</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>s</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>i</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>n</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>s</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>f</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>l</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>l</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>w</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>i</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>n</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>g</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>t</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>h</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>m</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>d</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>b</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>a</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>r</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>d</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>&</div>
                    </div>
                     <div aria-hidden='true' style={{position: 'relative', display: 'inline-block',  marginRight:'5px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>s</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>h</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>t</div>
                    </div>
                     <div aria-hidden='true' style={{position: 'relative', display: 'inline-block'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>p</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>l</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>a</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>n</div>
                    </div>
                  </p>
                </div>
                <div className='w-full md:w-1/3 text-center md:text-right order-1 md:order-3'>
                  <span className='font-polyneutral text-[40px] md:text-[60px] lg:text-[50px] leading-none text-[#AFA603] step-number' aria-label='05.'>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>0</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>5</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>.</div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full border-t-2 border-[#AFA603]'>
            <div className='max-w-360 mx-auto! px-6! py-8!'>
              <div className='flex flex-col md:flex-row justify-between items-center w-full gap-6 md:gap-0'>
                <div className='w-full md:w-1/3 text-center md:text-left order-2 md:order-1'>
                  <h2 className='font-polybulkywide text-[32px] md:text-[45px] lg:text-[40px] leading-none text-[#AFA603] wrap-break-words step-title' aria-label='Discovery call'>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>D</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>l</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>i</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>v</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>r</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>y</div>
                    </div>
                  </h2>
                </div>
                <div className='w-full md:w-1/3 flex justify-center order-3 md:order-2'>
                  <p className='font-polyslimwide text-[20px] max-w-50 text-center leading-snug step-desc' aria-label="Delivery of shoot">
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'10px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>D</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>l</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>i</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>v</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>e</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>r</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>y</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'10px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>f</div>
                    </div>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', marginRight:'10px'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>s</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>h</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>o</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>t</div>
                    </div>
                  </p>
                </div>
                <div className='w-full md:w-1/3 text-center md:text-right order-1 md:order-3'>
                  <span className='font-polyneutral text-[40px] md:text-[60px] lg:text-[50px] leading-none text-[#AFA603] step-number' aria-label='06.'>
                    <div aria-hidden='true' style={{position: 'relative', display: 'inline-block'}}>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>0</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>6</div>
                      <div aria-hidden='true' style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: 1, transform: 'translate(0px, 0px)'}}>.</div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div ref={footerRef} className='fixed w-full bottom-0 left-0 z-10 pointer-events-auto'>
        <footer className='w-full pt-8! md:pt-6.75! footer-css overflow-hidden text-[#E6E6E6]'>
            <nav className='flex flex-wrap md:flex-nowrap items-center justify-between gap-3 md:gap-0 px-4! md:px-17! w-full max-w-360 mx-auto! overflow-hidden'>
                <a href="/" className='flex-1 f-links md:flex-none text-center py-2! px-3! md:py-3! md:px-4! bg-[#FFFFFF0F] rounded md:rounded-sm text-xs md:text-[28px] font-polyneutralmono hover:bg-[#FFFFFF1A] transition-colors whitespace-nowrap'>Home</a>
                <a href="/about" className='flex-1 f-links md:flex-none text-center py-2! px-3! md:py-3! md:px-4! bg-[#FFFFFF0F] rounded md:rounded-sm text-xs md:text-[28px] font-polyneutralmono hover:bg-[#FFFFFF1A] transition-colors whitespace-nowrap'>About</a>
                <a href="/how-i-work" className='flex-1 f-links md:flex-none text-center py-2! px-3! md:py-3! md:px-4! bg-[#FFFFFF0F] rounded md:rounded-sm text-xs md:text-[28px] font-polyneutralmono hover:bg-[#FFFFFF1A] transition-colors whitespace-nowrap'>How i work</a>
                <a href="/whatsapp-link" className='flex-1 f-links md:flex-none text-center py-2! px-3! md:py-3! md:px-4! bg-[#FFFFFF0F] rounded md:rounded-sm text-xs md:text-[28px] font-polyneutralmono hover:bg-[#FFFFFF1A] transition-colors whitespace-nowrap'>Contact</a>
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

export default HowIWork
