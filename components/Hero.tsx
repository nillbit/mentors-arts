import { ArrowDown, Quote, QuoteIcon, TextQuote } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <div className='w-full min-h-[50%] relative'>
      <div className='absolute w-full h-screen top-0 left-0 right-0  z-10 flex items-center justify-center flex-col'>
        <h1 data-aos="fade-up" data-aos-duration="1000" className='text-[90px] font-extrabold text-transparent bg-gradient-to-r from-[#FF9100] to-[#573202] bg-clip-text'>MENTORS ARTS CENTRE</h1>
        <h3 data-aos="fade-up" data-aos-duration="3000" className='text-4xl font-regular italic  text-white italic flex flex-row gap-1' ><Quote className='rotate-180' size={20}/>&nbsp;<span data-aos="fade-up" data-aos-duration="6000">Home of creativity</span> &nbsp;<Quote size={20}/></h3>
        <div ><ul  className='flex gap-3 text-white my-10'>
          <li data-aos="fade-up" data-aos-duration="6000" className='text-[16px] border-r-2 px-2'>fine arts</li>
        <li data-aos="fade-up" data-aos-duration="6000" className='text-[16px] border-r-2 px-2'>graphics</li>
        <li data-aos="fade-up" data-aos-duration="6000" className='text-[16px] border-r-2 px-2'>printing</li>
        <li data-aos="fade-up" data-aos-duration="6000" className='text-[16px] border-r-2 px-2'>computer services</li><li data-aos="fade-up" data-aos-duration="6000" className='border-r-2 px-2'>skills training & mentorship</li></ul></div>
        <a href="#services"><div data-aos="zoom-in-out" data-aos-duration="8000" className='border w-[50px] h-[50px] my-10 rounded-full border-[#FF9100] flex items-center justify-center  animate-bounce [animation-duration:2s] cursor-pointer'>
          <ArrowDown size={25} color='#fff'/>
        </div></a>
      </div>
      <div className='absolute bg-gradient-to-b from-[#1E1E1E] to-[#FFF] opacity-89 w-full h-screen top-0 left-0 right-0'></div>
      <div className='flex w-full h-screen'>
        <img src="../assets/hero_pic1.webp" className='w-full' alt="picture for hero page" />
         <img src="../assets/hero_pic2.webp" className='w-full' alt="picture for hero page" />
      </div>

    </div>
  )
}

export default Hero