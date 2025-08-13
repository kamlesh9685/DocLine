import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

  const { speciality } = useParams();
  const [filterDoc,setFilterDoc] = useState([])
  const [showFilter,setShowFilter] = useState(false)
  const navigate = useNavigate()

  const {doctors} = useContext(AppContext)

  console.log("Data received from AppContext:", doctors);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[doctors,speciality])

  return (
    <div>
        <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Find Your Doctor</h1>
            <p className='text-gray-600 text-lg'>Browse through our specialists and book your appointment</p>
        </div>
        <div className='flex flex-col sm:flex-row items-start gap-8 mt-8'>
          <button className={`py-3 px-6 border rounded-xl text-sm font-medium transition-all sm:hidden ${showFilter ? 'bg-orange-500 text-white shadow-lg' : 'bg-white hover:bg-orange-50'}`} onClick={()=>setShowFilter(prev => !prev)}>
            🔍 Filters {showFilter ? '✕' : ''}
          </button>
          <div className={`flex-col gap-3 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'} sm:min-w-[250px]`}>
            <h3 className="font-bold text-gray-800 text-lg mb-2">Specialities</h3>
            <p onClick={()=> speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-4 py-3 pr-6 border border-orange-300 rounded-xl transition-all cursor-pointer hover:shadow-md ${speciality === "General physician" ? "bg-orange-500 text-white shadow-lg" : "hover:bg-orange-50"}`}>🩺 General physician</p>
            <p onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')}  className={`w-[94vw] sm:w-auto pl-4 py-3 pr-6 border border-orange-300 rounded-xl transition-all cursor-pointer hover:shadow-md ${speciality === "Gynecologist" ? "bg-orange-500 text-white shadow-lg" : "hover:bg-orange-50"}`}>👩‍⚕️ Gynecologist</p>
            <p onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')}  className={`w-[94vw] sm:w-auto pl-4 py-3 pr-6 border border-orange-300 rounded-xl transition-all cursor-pointer hover:shadow-md ${speciality === "Dermatologist" ? "bg-orange-500 text-white shadow-lg" : "hover:bg-orange-50"}`}>🧴 Dermatologist</p>
            <p onClick={()=> speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')}  className={`w-[94vw] sm:w-auto pl-4 py-3 pr-6 border border-orange-300 rounded-xl transition-all cursor-pointer hover:shadow-md ${speciality === "Pediatricians" ? "bg-orange-500 text-white shadow-lg" : "hover:bg-orange-50"}`}>👶 Pediatricians</p>
            <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')}  className={`w-[94vw] sm:w-auto pl-4 py-3 pr-6 border border-orange-300 rounded-xl transition-all cursor-pointer hover:shadow-md ${speciality === "Neurologist" ? "bg-orange-500 text-white shadow-lg" : "hover:bg-orange-50"}`}>🧠 Neurologist</p>
            <p onClick={()=> speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')}  className={`w-[94vw] sm:w-auto pl-4 py-3 pr-6 border border-orange-300 rounded-xl transition-all cursor-pointer hover:shadow-md ${speciality === "Gastroenterologist" ? "bg-orange-500 text-white shadow-lg" : "hover:bg-orange-50"}`}>🫁 Gastroenterologist</p>
          </div>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8'>
            {
              filterDoc.map((item,index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className='bg-white border-2 border-orange-100 rounded-3xl overflow-hidden cursor-pointer hover:translate-y-[-8px] hover:shadow-2xl hover:border-orange-300 transition-all duration-300 group max-w-sm mx-auto' key={index}>
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
            ))
            }
          </div>
        </div>
    </div>
  )
}

export default Doctors