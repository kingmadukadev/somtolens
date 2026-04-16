import React, { useRef, useState } from 'react'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import sommy from '../videos/watchreel.MP4';
import wedding1 from '../videos/wedding1.mp4';
import wedding2 from '../videos/wedding2.mp4';
import wedding3 from '../videos/wedding3.mp4';
import wedding4 from '../videos/wedding4.mp4';
import wedding5 from '../videos/wedding5.mp4';
import wedding6 from '../videos/wedding6.mp4';
import apartment1 from '../videos/apartment1.mp4';
import apartment2 from '../videos/apartment2.mp4';
import weddingCover1 from '../images/weddingcover1.png';
import weddingCover2 from '../images/weddingCover2.png';
import weddingCover3 from '../images/weddingcover3.png';
import weddingCover4 from '../images/weddingcover4.png';
import weddingCover5 from '../images/weddingcover5.png';
import weddingCover6 from '../images/weddingcover6.png';
import apartmentCover1 from '../images/apartmentcover1.png';
import apartmentCover2 from '../images/apartmentcover2.png'
import behindCover1 from '../images/behindcover1.png';
import behind1 from '../videos/behind1.MOV';
import fashion1 from '../videos/fashion1.MOV';
import fashion2 from '../videos/fashion2.MOV';
import fashionCover1 from '../images/fashioncover1.png';
import fashionCover2 from '../images/fashioncover2.png';
import cover from '../images/udesom3.JPG';
import Navbar from '../components/Navbar';

gsap.registerPlugin(ScrollTrigger);

const VIDEO_MAP = {
  weddings: [
    { src: wedding1, poster: weddingCover1, title: "White wedding" },
    { src: wedding2, poster: weddingCover2, title: "Save the date" },
    { src: wedding3, poster: weddingCover3, title: "Odogwu paranra" },
    { src: wedding4, poster: weddingCover4, title: "Adannaya & Sam" },
    { src: wedding5, poster: weddingCover5, title: "Bride's Transition" },
    { src: wedding6, poster: weddingCover6, title: "Groom's Transition" },
  ],
  fashion: [
    { src: sommy, poster: cover, title: "Graduation" },
    {src: fashion1, poster: fashionCover1, title: "3000style"},
    {src: fashion2, poster: fashionCover2, title: "3000style Zip up"},
  ],
  apartment: [
    {src: apartment1, poster: apartmentCover1, title: 'Krent'},
    {src: apartment2, poster: apartmentCover2, title: 'Krent-Val'},
  ],
  behindTheScene: [
    { src: behind1, poster: behindCover1, title: 'Behind the scene'}
  ],
  wigbyfayy: [
    {src: behind1, poster:behindCover1, title: 'Wig By Fayy'}
  ]
};

const Features = () => {
  const scopeRef = useRef(null);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const footerRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState("weddings");
  const [activeVideo, setActiveVideo] = useState(null);

  /* ================= GSAP SCROLL ================= */
  useGSAP(() => {
    if (!videoRef.current) return;

    const items = videoRef.current.children;

    gsap.fromTo(
      items,
      { y: -40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.12,
        scrollTrigger: {
          // trigger: videoRef.current,
          start: "top 80%",
          // end: "bottom 20%",
          // toggleActions: "play reverse play reverse",
        },
      }
    );
  }, { dependencies: [activeCategory], scope: scopeRef });

  

useGSAP(() => {
  if (!scopeRef.current || !footerRef.current) return;

  const footerHeight = footerRef.current.offsetHeight;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: scopeRef.current,
      start: "bottom bottom",
      end: "+=" + footerHeight,
      scrub: 1,
      pin: true,
      // anticipatePin: 1,
    }
  });

  tl.to(sectionRef.current, {
    y: -footerHeight,
    ease: "none",
  });

}, { scope: scopeRef, dependencies: [activeCategory] });

  /* ================= CATEGORY CHANGE ================= */
  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;

    gsap.to(videoRef.current.children, {
      y: 40,
      opacity: 0,
      duration: 0.45,
      ease: 'power3.in',
      stagger: 0.08,
      onComplete: () => {
         setActiveCategory(category);
         ScrollTrigger.refresh();
      },
    });
  };

  return (
    <div className='relative w-full wrapper' ref={scopeRef}>
      <div ref={sectionRef} className='relative z-20 w-full min-h-dvh bg-black overflow-hidden'>
        <Navbar />
      <section className='flex flex-col justify-center items-center pt-19.75! featured-works-hero'>
        <div className='fwt'>
          <button className='font-polyslimmono text-[16px] tracking-[1.92px] py-1.5! px-2.5! rounded-lg bg-[#FFFFFF1F] ring-2 ring-[#FAFAFA1F] cursor-pointer hover:bg-[#FFFFFF2F] transition-colors flex items-center gap-2'>
            <span>←</span>
            <span>Go back</span>
          </button>
        </div>

        <p className='text-[44px] md:text-[72px] tracking-[-2px] font-polyneutral text-[#FAFAFA] [-webkit-text-stroke:1.5px_#ACACAC]'>
          Featured works
        </p>

        <p className='font-polyslimmono text-grey text-[14px] md:text-[18px] w-[288px] md:w-93.75 mx-auto! text-center pt-2!'>
          Curated selection of viral campaigns and creative direction
        </p>

        {/* ================= NAV ================= */}
        <nav className='flex flex-wrap items-center justify-center max-sm:mx-4! gap-2 pt-8.5! md:pt-9.75! w-full max-w-360 mx-auto!'>
          {[
            { key: "weddings", label: "Weddings" },
            { key: "fashion", label: "Fashion" },
            { key: "apartment", label: "Apartment" },
            { key: "behindTheScene", label: "Behind the scenes"},
            { key: "wigbyfayy", label: "Wig By Fayy"}
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleCategoryChange(key)}
              className={`p-3! md:p-4! font-polyslimmono text-[12px] tracking-[1.44px] rounded-lg cursor-pointer w-fit whitespace-nowrap transition-all
                ${
                  activeCategory === key
                    ? "bg-[#FFFFFF1F] ring-1 ring-amber-300"
                    : "bg-[#FFFFFF0F] hover:bg-[#FFFFFF14]"
                }`}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* ================= VIDEO GRID ================= */}
        <div
          ref={videoRef}
          className='mt-16! grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-360 px-4!'
        >
          {VIDEO_MAP[activeCategory].map((video, index) => (
            <div
              key={`${video.src}-${index}`}
              className='bg-[#0A0A0A] rounded-xs border-2 border-[#FFFFFF14] px-2! md:px-3.5! pb-2! md:pb-3.5! pt-2.75! w-full max-w-155'
            >
              <div className='flex items-center justify-between gap-2 flex-wrap'>
                <p className='font-polymedianwide text-[12px] md:text-[14px] py-1.5! px-2.5! bg-[#FFFFFF0A] rounded-sm'>
                  {video.title}
                </p>
                <p className='font-polyneutralmono text-[12px] md:text-[14px] text-black bg-green-600 py-1! px-2! rounded-sm ring-1 ring-black'>
                  {activeCategory}
                </p>
              </div>

              {/* POSTER */}
              <div
                onClick={() => setActiveVideo(video)}
                className='relative w-full mt-3.5! flex bg-black border border-[#FAFAFA1F] justify-center items-center h-100 md:h-140.75 lg:h-120 group overflow-hidden cursor-pointer'
              >
                <img
                  src={video.poster}
                  alt={video.title}
                  className='w-full h-full object-cover lg:w-90 rounded-3xl opacity-90'
                />

                {/* PLAY */}
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='w-12 h-12 rounded-full bg-white/24 backdrop-blur-[47px] flex items-center justify-center group-hover:bg-white/40 transition-colors'>
                    <svg className='w-2.5 h-2.5 translate-x-px' viewBox='0 0 24 24' fill='white'>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {activeVideo && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md'
          onClick={() => setActiveVideo(null)}
        >
          <div
            className='relative w-fit max-w-[90vw] max-h-[80vh]'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className='absolute -top-10! right-0 text-white text-xs tracking-widest opacity-70 hover:opacity-100'
            >
              CLOSE ✕
            </button>

            <video
              src={activeVideo.src}
              autoPlay
              controls
              className='w-auto h-auto max-w-[90vw] max-h-[80vh] object-contain rounded-xl bg-black'
            />
          </div>
        </div>
      )}
      </div>
       <div ref={footerRef} className='fixed footer bottom-0 left-0 w-full z-10'>
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
  );
};

export default Features;