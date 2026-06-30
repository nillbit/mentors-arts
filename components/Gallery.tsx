import { Heart, Image, Palette, UsersRound } from 'lucide-react'
import React from 'react'
import galleryBackground from '../assets/gallery/gallery_background.svg'
import galleryBlue from '../assets/gallery/gallery_blue.svg'
import galleryOrange from '../assets/gallery/gallery_orange.svg'
import galleryGreen from '../assets/gallery/gallery_green.svg'
import woman from '../assets/gallery_pics/woman.webp'
import abstract from '../assets/gallery_pics/abstract.webp'
import waterpaint from '../assets/gallery_pics/waterpaint.webp'
import tree from '../assets/gallery_pics/tree.webp'
import fox from '../assets/gallery_pics/fox.webp'

function Gallery() {
  return (
    <div className='mt-[100px]'>
        <div className='flex justify-center'>
            <div className='relative z-10'><h1 className='font-bold text-[80px] relative z-10'>GALLERY</h1>
            <p className='bg-gradient-to-r text-transparent bg-clip-text font-bold hover:text-[#FF9100] from-[#FF9100]  via-[#62ABFC] via-[#673098] to-[#4CC72E] -'>the art that keeps speaking</p>
            <img className='absolute top-0 z-0 ' src={galleryBackground} alt="gallery background" />
            </div>
        </div>
        {/* display */}
        <div className=' flex flex-row items-center justify-center my-[100px] w-[90%] mx-[5%]'>
            <img className='translate-x-[50%] translate-y-[90%]' src={galleryBlue} alt="left image" />
            <div className='w-[300px] h-[400px]' data-aos="flip-right" data-aos-duration="800"><div  className='w-full h-full hover:scale-[1.3] transition-all duration-500 hover:z-10 rounded-[20px] bg-gray-500 -rotate-24 translate-y-[20%]' style={{backgroundImage:`url(${woman})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}} ></div></div>
            <div className='w-[300px] h-[400px]' data-aos="flip-right" data-aos-duration="900"><div className='w-full h-full hover:scale-[1.3] transition-all duration-500 hover:z-10 rounded-[20px] bg-gray-500 -rotate-12 translate-y-[5%]' style={{backgroundImage:`url(${abstract})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}></div></div>
            <div className='w-[300px] h-[400px]' data-aos="flip-right" data-aos-duration="1000"><div className='w-full h-full hover:scale-[1.3] transition-all duration-500 hover:z-10 rounded-[20px] bg-gray-500 rotate-6' style={{backgroundImage:`url(${waterpaint})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}></div></div>
            <div className='w-[300px] h-[400px]' data-aos="flip-right" data-aos-duration="1000"><div className='w-full h-full hover:scale-[1.3] transition-all duration-500 hover:z-10 rounded-[20px] bg-gray-500 rotate-12 translate-y-[5%]' style={{backgroundImage:`url(${tree})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}></div></div>
            <div className='w-[300px] h-[400px]' data-aos="flip-right" data-aos-duration="1200"><div className='w-full h-full
             hover:scale-[1.3] transition-all duration-500 hover:z-10 rounded-[20px] rotate-24 translate-y-[25%]'
            style={{backgroundImage:`url(${fox})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"}}></div></div>
            <img className='translate-y-[90px] -translate-x-[20%]' src={galleryOrange} alt="left image" />
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className='flex items-center justify-center flex-col mb-10'>
          <h1 className='text-2xl font-bold'>Art that speaks for itself</h1>
          <img  src={galleryGreen} alt="centre image" />
          <p className='w-[60%] text-center'>Every piece we create is driven by passion, creativity, and attention to detail. The result is more than artwork—it's a masterpiece that leaves a lasting impression.</p>
        </div>
        <div className='flex gap-2 w-[80%] mx-[10%] my-10'>
          <div className='flex gap-2' data-aos="fade-up" data-aos-duration="1100">
            <Image size={100} color='#FF9100'/>
            <div>
              <h3 className='text-[#FF9100]'>Inspiring Art</h3>
              <p>unique artwork that inspires imagination </p>
            </div>
          </div>
          <div className='flex gap-2' data-aos="fade-up" data-aos-duration="1200">
            <UsersRound size={100} color='#4CC72E'/>
            <div>
              <h3 className='text-[#4CC72E]'>creative team</h3>
              <p>the most creative team that produces high quality work </p>
            </div>
          </div>
          <div className='flex gap-2' data-aos="fade-up" data-aos-duration="1400">
            <Palette size={100} color='#62ABFC'/>
            <div>
              <h3 className='text-[#62ABFC]'>Diverse expression</h3>
              <p>a wide range of medium, styles and perspective </p>
            </div>
          </div>
          <div className='flex gap-2' data-aos="fade-up" data-aos-duration="1600">
            <Heart size={100} color='#673098'/>
            <div>
              <h3 className='text-[#673098]'>Feel reflect connect</h3>
              <p>Art and service that moves you and stays with you forever </p>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Gallery