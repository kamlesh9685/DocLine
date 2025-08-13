import React, { useContext } from 'react'
import { useNavigate} from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {

    const navigate = useNavigate();
    const {doctors} = useContext(AppContext);

  return (
    <div className='flex flex-col items-center gap-6 my-20 text-gray-900 md:mx-10 bg-gradient-to-b from-orange-50 to-teal-50 py-16 rounded-3xl'>
        <div className="text-center space-y-4">
            <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-teal-600 bg-clip-text text-transparent'>Top Doctors to Book</h1>
            <p className='sm:w-1/2 text-center text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto'>Simply browse through our extensive list of trusted doctors.</p>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-8 gap-y-8 px-3 sm:px-8'>
            {doctors.slice(0,10).map((item,index)=>(
                <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='bg-white border-2 border-orange-100 rounded-3xl overflow-hidden cursor-pointer hover:translate-y-[-8px] hover:shadow-2xl hover:border-orange-300 transition-all duration-300 group max-w-sm mx-auto' key={index}>
                    <div className="relative overflow-hidden">
                        <img className='bg-gradient-to-br from-orange-50 to-teal-50 w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300' src={item.image} alt='' />
                    </div>
                    <div className='p-6'>
                        <h3 className='text-gray-900 text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors duration-300'>{item.name}</h3>
                        <div className="flex items-center justify-between mb-3">
                            <p className='text-gray-600 text-base'>{item.speciality}</p>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.available !== false ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                                {item.available !== false ? '● Available' : '● Busy'}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex text-orange-400 text-sm">
                                ⭐⭐⭐⭐⭐
                            </div>
                            <button className="bg-gradient-to-r from-orange-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300">
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className='bg-gradient-to-r from-orange-500 to-teal-500 text-white px-12 py-4 rounded-full mt-12 hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-lg'>View All Doctors</button>
    </div>
  )
}

export default TopDoctors