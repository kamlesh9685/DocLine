import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-orange-500 to-teal-500 rounded-3xl px-6 md:px-10 lg:px-20 shadow-xl overflow-hidden relative' >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

        {/* ----Left Side---- */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 py-12 m-auto md:py-[8vw] md:mb-[-30px] relative z-10'>
            <div className="inline-block">
                <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                    ✨ Trusted Healthcare Platform
                </span>
            </div>
            <h1 className='text-3xl md:text-4xl lg:text-6xl text-white font-bold leading-tight md:leading-tight lg:leading-tight'>
                Book Appointment <br/> With Trusted Doctors
            </h1>
            <div className='flex flex-col md:flex-row items-center gap-4 text-white text-base font-light'>
                <div className="flex items-center gap-2">
                    <img className='w-32 drop-shadow-lg' src={assets.group_profiles} alt=''/>
                    <div className="flex flex-col">
                        <div className="flex text-orange-300 text-sm mb-1">
                            ⭐⭐⭐⭐⭐
                        </div>
                        <span className="text-xs text-white/80">500+ Happy Patients</span>
                    </div>
                </div>
                <p className="text-white/90 leading-relaxed">Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
            </div>
            <a href="#speciality" className='flex items-center gap-3 bg-white px-8 py-4 rounded-full text-gray-700 text-base font-semibold m-auto md:m-0 hover:scale-105 hover:shadow-2xl transition-all duration-300 group'>
                Book appointment 
                <img className='w-4 group-hover:translate-x-1 transition-transform duration-300' src={assets.arrow_icon} alt='' />
            </a>
        </div>

        {/* -------Right Side------ */}
        <div className='md:w-1/2 relative z-10'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-2xl drop-shadow-2xl' src={assets.header_img} alt='' />
        </div>
    </div>
  )
}

export default Header