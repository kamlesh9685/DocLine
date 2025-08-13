import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-6 py-20 text-gray-800 bg-gradient-to-b from-orange-50 to-teal-50' id='speciality'>
        <div className="text-center space-y-4">
            <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-teal-600 bg-clip-text text-transparent'>Find by Speciality</h1>
            <p className='sm:w-1/2 text-center text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        </div>
        <div className='flex sm:justify-center gap-6 pt-8 w-full overflow-scroll px-4'>
            {specialityData.map((item,index)=>(
                <Link onClick={()=> scrollTo(0,0)} className='flex flex-col items-center text-sm cursor-pointer flex-shrink-0 hover:translate-y-[-8px] transition-all duration-300 group' key={index} to={`/doctors/${item.speciality}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:bg-orange-100 border border-orange-100">
                        <img className='w-16 sm:w-20 mb-3 group-hover:scale-110 transition-transform duration-300' src={item.image} alt='' />
                    </div>
                    <p className="font-medium text-gray-700 group-hover:text-orange-600 transition-colors duration-300 mt-3">{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu