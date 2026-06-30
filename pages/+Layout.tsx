
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import "./tailwind.css"

export default function Layout({children}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='w-full min-h-screen bg-white text-black'>
      {children}
    </div>
  )
}



