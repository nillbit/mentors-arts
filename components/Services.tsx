import { ChevronRight, Megaphone, Paintbrush, Palette, PrinterCheck } from 'lucide-react'
import React from 'react'
import services_logo_background from "../assets/services_logo_background.svg"
import fine_art_bottom_right from "../assets/fine_art/fine_art_bottom_right.svg"
import fine_art_top_right from "../assets/fine_art/fine_art_top_right.svg"
import fine_art_bottom_left from "../assets/fine_art/fine_art_bottom_left.svg"
import fine_art_letter_drawing from "../assets/fine_art/fine_art_letter_drawing.svg"
import graphicDesignBottomLeft from '../assets/graphic_design/graphic_design_bottom_left.svg'
import graphicDesignBottomRight from '../assets/graphic_design/graphic_design_bottom_right.svg'
import graphicDesignTopLeft from '../assets/graphic_design/graphic_design_top_left.svg'
import graphicDesignTopRight from '../assets/graphic_design/graphic_design_top_right.svg'
import pmBottomRight from '../assets/promotional_materials/pm_bottom_right.svg'
import pmTopLeft from '../assets/promotional_materials/pm_top_left.svg'
import pmTopRight from '../assets/promotional_materials/pm_top_right.svg'
import dpBottomLeft from '../assets/printing/dp_bottom_left.svg'
import dpBottomRight from '../assets/printing/dp_bottom_right.svg'
import dpTopLeft from '../assets/printing/dp_top_left.svg'
import dpTopRight from '../assets/printing/dp_top_right.svg'

function Services() {
  return (
    <div id='services' className='min-h-screen'>

      <div data-aos="fade-up" data-aos-duration="1000" className='mt-10  flex items-center justify-center relative'>
        <img src={services_logo_background} width={350} alt="services background" />
        <h1 className='font-bold text-6xl absolute'>OUR SERVICES</h1>
      </div>

      {/* cards */}
      <div className='grid grid-cols-2  gap-10 mt-10 w-[90%] mx-[5%] min-h-[400px] pb-10'>

        <div data-aos="fade-up" data-aos-duration="1000" className='border-2  border-[#FF9100] w-full rounded-sm p-4 relative backdrop-blur-[10px]'>
          <div className='z-10 relative'><div className='w-[50px] h-[50px] flex items-center-safe justify-center rounded-full border-2 border border-2 border-[#FF9100]'>
            <Palette color='#FF9100' />
          </div>
          <div className='my-2'><h1 className='font-bold text-2xl '>Fine arts</h1>
          <hr className='w-[10%] border-2 border-[#FF9100]'/>
          </div>
          <p className='text-[#000] text-md '>Transform your environment with bespoke fine art tailored to your unique vision. </p>
          <a href="#contact"><button className=' h-[50px] border mt-6 rounded-[20px] flex  items-center border-[#FF9100] justify-start px-4'> <p className='text-md text-[#FF9100]'>get a quote</p> <ChevronRight color='#FF9100'/></button></a></div>
          <img src={fine_art_bottom_right} className='absolute -right-4' alt="" />
          <img src={fine_art_top_right} className='absolute -top-4 -right-2' alt="" />
          <img src={fine_art_bottom_left} className='absolute -bottom-3 -left-2' alt="" />
          <img src={fine_art_letter_drawing} className='absolute top-[20%] left-[8%] z-0 ' alt="" />
        </div>


        <div data-aos="fade-up" data-aos-duration="1000" className='border-2 border-[#673098] w-full rounded-sm p-4 relative backdrop-blur-[10px]'>
          <div className='z-10 relative'><div className='w-[50px] h-[50px] flex items-center-safe justify-center rounded-full border-2 border border-2 border-[#673098]'>
            <Paintbrush color='#673098' />
          </div>
          <div className='my-2'><h1 className='font-bold text-2xl'>graphic design</h1>
          <hr className='w-[10%] border-2 border-[#673098]'/>
          </div>
          <p className='text-[#000] text-md '>Transform your brand with high-impact visual design. We create memorable logos, engaging marketing assets, and cohesive brand identities that capture attention. </p>
          <a href="#contact"><button className=' h-[50px] border mt-6 rounded-[20px] flex  items-center border-[#673098] justify-start px-4'> <p className='text-md text-[#673098]'>get a quote</p> <ChevronRight color='#673098'/></button></a>
          </div>
          <img src={graphicDesignBottomLeft} className='absolute -bottom-2 -left-2 z-0' alt="" />
          <img src={graphicDesignBottomRight} className='absolute -bottom-3 -right-2 z-0' alt="" />
          <img src={graphicDesignTopLeft} className='absolute top-[20%] left-[8%] z-0' alt="" />
          <img src={graphicDesignTopRight} className='absolute -top-[5%] right-[8%] z-0' alt="" />

        </div>


        <div data-aos="fade-up" data-aos-duration="1200" className='border-2 border-[#62ABFC] w-full rounded-sm p-4 relative backdrop-blur-[10px]'>
          <div className='z-10 relative'><div className='w-[50px] h-[50px] flex items-center-safe justify-center rounded-full border-2 border border-2 border-[#62ABFC]'>
            <Megaphone color='#62ABFC' className='rotate-y-180' />
          </div>
          <div className='my-2'><h1 className='font-bold text-2xl'>Promotional materials</h1>
          <hr className='w-[10%] border-2 border-[#62ABFC]'/>
          </div>
          <p className='text-[#000] text-md '>we print promotional materials such as Gift bags,T-shirts,umbrellas,mugs,pens,keyholder rings,Diaries etc. </p>
          <a href="#contact"><button className=' h-[50px] border mt-6 rounded-[20px] flex  items-center border-[#62ABFC] justify-start px-4'> <p className='text-md text-[#62ABFC]'>get a quote</p> <ChevronRight color='#62ABFC'/></button></a></div>
          <img src={pmBottomRight} className='absolute -bottom-2 -right-3.5 z-0' alt="" />
          <img src={pmTopLeft} className='absolute top-[20%] left-[8%] z-0' alt="" />
          <img src={pmTopRight} className='absolute top-[5%] right-[8%] z-0' alt="" />

        </div>


        <div data-aos="fade-up" data-aos-duration="1200" className='border-2 border-[#4CC72E] w-full rounded-sm p-4 relative backdrop-blur-[10px]'>
           <div className='z-10 relative'><div className='w-[50px] h-[50px] flex items-center-safe justify-center rounded-full border-2 border border-2 border-[#4CC72E]'>
            <PrinterCheck color='#4CC72E' />
          </div>
          <div className='my-2'><h1 className='font-bold text-2xl'>Digital  printing</h1>
          <hr className='w-[10%] border-2 border-[#4CC72E]'/>
          </div>
          <p className='text-[#000] text-md '>we design and print Business card,letterheads
Fliers,Bronchures,Reports,Newsletters,Books,Magazines,Identity Cards etc.. </p>
          <a href="#contact"><button className=' h-[50px] border mt-6 rounded-[20px] flex  items-center border-[#4CC72E] justify-start px-4'> <p className='text-md text-[#4CC72E]'>get a quote</p> <ChevronRight color='#4CC72E'/></button></a></div>
          <img src={dpBottomLeft} className='absolute -bottom-2 -left-2 z-0' alt="" />
          <img src={dpBottomRight} className='absolute -bottom-3 -right-2 z-0' alt="" />
          <img src={dpTopLeft} className='absolute top-[6%] left-[15%] z-0' alt="" />
          <img src={dpTopRight} className='absolute -top-[5%] -right-[2%] z-0' alt="" />
        </div>


      </div>

        <div className='flex items-center justify-center my-4'><a href="#footer" className='bg-gradient-to-r text-transparent bg-clip-text font-bold hover:text-[#FF9100] from-[#FF9100] to-[#4CC72E] via-[#62ABFC] via-[#673098]'> more services</a></div>
    </div>
  )
}

export default Services