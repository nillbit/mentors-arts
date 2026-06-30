import React from 'react'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import Gallery from '../../components/Gallery'
import Partners from '../../components/Partners'
import Contactus from '../../components/Contactus'
import Footer from '../../components/Footer'

function Page() {
  return (
    <div className='bg-white'>
    <div className='w-full h-[60px] bg-[#000] shadow-md flex items-center justify-between'>
       <div className='flex gap-2 items-centere justify-center'>
        <img src={"../assets/logo_yellow.svg"} alt="logo" width={60} height={60}/>
       <div className='flex items-center'><h3 className='font-bold primary'>Mentors Arts Centre</h3></div>
    </div>
    <div className='mx-10'>
        <ul className='flex gap-2 text-white'>
            <a href="#services" ><li className='font-500 hover:text-orange-400 hover:underline'>services</li></a>
            <a href="#contact" ><li className='font-500 hover:text-orange-400 hover:underline'>contact</li></a>
            <a href="#gallery" ><li className='font-500 hover:text-orange-400 hover:underline'>gallery</li></a>
        </ul>
    </div>
    </div>
    <Hero/>
    <div  id='services'></div>
    <Services/>
    <div  id='gallery'></div>
    <Gallery/>
    <Partners/>
    <div  id='contact'></div>
    <Contactus/>
    <div  id='footer'></div>
    <Footer/>
    </div>
  )
}

export default Page