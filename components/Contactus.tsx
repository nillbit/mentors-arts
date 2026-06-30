import { Mail, MailCheck, MapPinCheck, MapPinCheckInside, Phone } from 'lucide-react'
import React from 'react'

function Contactus() {
  return (
    <div className='bg-gradient-to-b from-[#FFFDD0] relative to-[#FFF] min-h-[300px]'>
        <img data-aos="fade-up" src="../assets/contactus/contactus_svg.svg"  data-aos-duration="2000" alt="" className='w-[100%]'  />
        <div className='absolute top-0 w-[80%] mx-[10%] flex items-center justify-center h-full gap-4'>
            
            <div>
                <h1 className='font-extrabold text-[40px] my-10'>Contact us</h1>
                <img data-aos="fade-up" data-aos-duration="1000" src="../assets/contactus/mentors.png" className='rounded-md' width={600} alt="" />
            </div>
            <div className='p-4'>

                <ul>
                    <li data-aos="flip-right" data-aos-duration="1000" className='flex gap-4 my-4'><MapPinCheck/><p>Jaramogi sports ground, Kisumu</p></li>
                    <li data-aos="flip-right" data-aos-duration="1000" className='flex gap-4 my-4'><Phone/><p>0728078112</p></li>
                    <li data-aos="flip-right" data-aos-duration="1000" className='flex gap-4 my-4'><Mail/><p>mentorsarts@gmail.com</p></li>
                </ul>
                <hr className='my-[40px]' />
                <ul><li data-aos="flip-right" data-aos-duration="1000" className='flex gap-4 my-4'><MailCheck/><p>1174-40100,Kisumu</p></li></ul>

            </div>
        </div>

    </div>
  )
}

export default Contactus