import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate();

  return (
    <div className='flex bg-gradient-to-r from-orange-500 to-teal-500 rounded-3xl px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 shadow-2xl overflow-hidden relative'>
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
        
        {/* ------Left Side------ */}
        <div className='flex-1 py-12 sm:py-16 lg:py-24 lg:pl-5 relative z-10'>
            <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight'>
                <p>Book Appointment</p>
                <p className='mt-2'>With 100+ Trusted Doctors</p>
            </div>
            <p className="text-white/90 text-lg mt-6 mb-8 leading-relaxed">Join thousands of satisfied patients who trust our platform for their healthcare needs.</p>
            <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='bg-white text-base sm:text-lg text-gray-700 px-10 py-4 rounded-full mt-6 hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold'>Create account</button>
        </div>

        {/* ------Right Side------ */}
        <div className='hidden md:block md:w-1/2 lg:w-[370px] relative z-10'>
            <img className='w-full absolute bottom-0 right-0 max-w-md drop-shadow-2xl' src={assets.appointment_img} alt='' />
        </div>
    </div>
  )
}

export default Banner