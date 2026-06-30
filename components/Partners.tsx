import React from 'react'

function Partners() {
  return (
    <div className='mt-[200px] bg-gradient-to-b from-white to-[#FFFDD0] py-10'>
        <center><h1 className='font-bold text-6xl bg-gradient-to-r from-black to-[#FF9100] bg-clip-text text-transparent' data-aos="fade-up" data-aos-duration="3000">CLIENTS AND PARTNERS OF MENTORS ARTS CENTER</h1></center>
         <div data-aos="fade-up" data-aos-duration="3000" className='w-full h-[800px] mt-10  relative flex flex-col items-center justify-center'>
            <div id="rings" className='w-[700px] h-[700px] animate-spin [animation-fill-mode:forwards]  absolute border-dashed rounded-[100vh] border-2 border-gray-500'></div>
            <div id="rings" className='w-[500px] h-[500px]  [animation-fill-mode:forwards]  absolute border-dashed rounded-[100vh] border-2 border-gray-500'></div>
            <div id="rings" className='w-[300px] h-[300px]  [animation-fill-mode:forwards] absolute border-dashed rounded-[100vh] border-2 border-gray-500'></div>
            <div id="rings" className='w-[100px] h-[100px]  [animation-fill-mode:forwards]  absolute border-dashed rounded-[100vh] border-2 border-gray-500'></div>
         
         <div id="companies" className='w-[15px] rounded-full  h-[15px] bottom-[30%] bg-orange-500 absolute'></div>
         <div id="companies" className='w-[15px] rounded-full  h-[15px] bottom-[92.5%] bg-green-500 absolute'></div>
         <div id="companies" className='w-[15px] rounded-full  h-[15px] bottom-[5.4%] bg-purple-500 absolute'></div>
         <div id="companies" className='w-[15px] rounded-full  h-[15px] bg-blue-500 top-[30.5%] absolute'></div>
         <div id="companies" className='w-[15px] rounded-full  h-[15px] left-[31.3%] bg-orange-500 absolute'></div>
         <div id="companies" className='w-[15px] rounded-full  h-[15px] right-[24%] z-10 bg-blue-500 absolute'></div>
            {/* companies logo */}
            <img data-aos="fade-up" data-aos-duration="3500" src="../assets/companies/ugenya.png" className='absolute  left-[66.5%] w-[53px] h-[50px] scale-[1.5] z-10' alt="" />
            <img data-aos="fade-up" data-aos-duration="3500" src="../assets/companies/aldai.png" className='absolute  top-[16%] w-[53px] h-[50px] z-10' alt="" />
            <img src="../assets/companies/lbda.png" className='absolute  left-[22.5%] w-[53px] h-[50px] z-10' alt="" />
            <img data-aos="fade-up" data-aos-duration="3000" src="../assets/companies/peace_corps.png" className='absolute  bottom-[16%] w-[53px] h-[50px] z-10' alt="" />
            <img data-aos="fade-up" data-aos-duration="4000" src="../assets/companies/worldvision.png" className='absolute bottom-[36%] left-[57%] w-[53px] h-[50px] z-10 ' alt="" />
            <img data-aos="fade-up" data-aos-duration="6000" src="../assets/companies/oriwo.png" className='absolute bottom-[56%] left-[39%] w-[53px] h-[50px] z-10 '  alt="" />
            <img src="../assets/logo.svg" className='absolute  w-[53px] h-[50px] z-10 '  alt="" />
            
         </div>
         <div className='grid grid-cols-3 gap-4 w-[80%] mx-[10%] mb-[100px] min-h-[100px] '>
         <div data-aos="fade-up" data-aos-duration="3000" className='bg-white rounded-[20px] text-center p-2'>
            <h1 className='font-extrabold text-[#FF9100] text-[32px]'>100+</h1>
            <p>companies worked with</p>
         </div>
         <div data-aos="fade-up" data-aos-duration="3000" className='bg-white rounded-[20px] text-center p-2'>
            <h1 className='font-extrabold text-[#FF9100] text-[32px]'>3000+</h1>
            <p>projects completed</p>
         </div>
         <div data-aos="fade-up" data-aos-duration="3000" className='bg-white rounded-[20px] text-center p-2'>
            <h1 className='font-extrabold text-[#FF9100] text-[32px]'>99%</h1>
            <p>costomer satisfaction</p>
         </div>
         </div>
    </div>
  )
}

export default Partners