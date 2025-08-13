import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10 bg-gradient-to-b from-orange-50 to-teal-50 rounded-t-3xl mt-20'>
        <div className='flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 px-8 py-16 text-sm'>

            {/* -------Left Section------ */}
            <div>
                <div className='mb-6'>
                    <assets.logo />
                </div>
                <p className='w-full md:w-2/3 text-gray-600 leading-7 text-base mb-6'>Your trusted healthcare companion. We connect you with qualified doctors and make healthcare accessible, convenient, and reliable for everyone.</p>
                <div className="flex gap-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-200 transition-colors duration-200 cursor-pointer">
                        <span className="text-orange-600">📧</span>
                    </div>
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-200 transition-colors duration-200 cursor-pointer">
                        <span className="text-orange-600">📱</span>
                    </div>
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-200 transition-colors duration-200 cursor-pointer">
                        <span className="text-orange-600">🌐</span>
                    </div>
                </div>
            </div>

            {/* -------Center Section------ */}
            <div>
                <p className='text-xl font-bold mb-6 text-gray-800'>COMPANY</p>
                <ul className='flex flex-col gap-3 text-gray-600'>
                    <li className="hover:text-orange-600 transition-colors duration-200 cursor-pointer">Home</li>
                    <li className="hover:text-orange-600 transition-colors duration-200 cursor-pointer">About us</li>
                    <li className="hover:text-orange-600 transition-colors duration-200 cursor-pointer">Services</li>
                    <li className="hover:text-orange-600 transition-colors duration-200 cursor-pointer">Privacy policy</li>
                </ul>
            </div>

            {/* -------Right Section------ */}
            <div>
                <p className='text-xl font-bold mb-6 text-gray-800'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-3 text-gray-600'>
                    <li className="flex items-center gap-2">
                        <span>📞</span>
                        <span>+91-000-000-000</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span>✉️</span>
                        <span>hello@docline.com</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <span>📍</span>
                        <span>Healthcare District, Medical City</span>
                    </li>
                </ul>
            </div>
        </div>

        {/* ---------Copyright Text--------- */}
        <div>
            <hr className="border-orange-200"/>
            <p className='py-6 text-sm text-center text-gray-600 bg-white/50'>Copyright 2024 © DocLine - All Rights Reserved. Made with ❤️ for better healthcare.</p>
        </div>
    </div>
  )
}

export default Footer