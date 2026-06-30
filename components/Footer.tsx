import { Mail, Phone } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <div className='w-full min-h-[200px] p-4 grid grid-cols-3 bg-[#FF9100]'>
        <div>
            <div><img width={50} src="../assets/logo.svg" alt="company logo" />
             <h1 className='font-bold text-white'>Mentors Arts Center</h1>
             <p className='font-bold text-gray-300 italic text-sm'>home of creativity</p></div>
            
                <li  className='flex text-white gap-4 my-4'>
                <Phone/><p>0728078112</p></li>
                <li className='flex text-white gap-4 my-4'><Mail/><p>mentorsarts@gmail.com</p></li>
           
        </div> 
        <div>
            <h1 className='font-bold text-white text-2xl'>Our services</h1>
            <ul className='text-sm grid grid-cols-2 list-disc'>
                <li>Graphic Design</li>
                <li>Branding Services</li>
                <li>Promotional Items</li>
                <li>Signages</li>
                <li>Potraits/painting</li>
                <li>stamps</li>
                <li>Engravings</li>
                <li>supply of sports items &Equipments</li>
                <li>stationery</li>
                <li>Beautification & landscaping</li>
            </ul>
        </div> 
        <div className='flex items-center justify-center flex-col'>
            <p className='italic text-sm'>made with ❤️ by:</p>
            <img width={150} src="../assets/ozeon_logo.svg" alt="ozeon company logo" />
            <ul className=''><li  className='flex text-white gap-4 my-4'>
                <Phone/><p>0746986414</p></li>
                <li className='flex text-white gap-4 my-4'><Mail/><p>nillbit2000@gmail.com</p></li>
                </ul>
        </div> 
        </div>)
}

export default Footer