import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';
import { assets } from '../../assets/assets';

const DoctorsList = () => {
  const { doctors, aToken, getAllDoctors, changeAvailability } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);

  return (
    <div className='p-6 bg-gray-50 min-h-screen'>
      
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 mb-8 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <img className="w-8 h-8 filter brightness-0 invert" src={assets.people_icon} alt="Doctors" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">All Doctors</h1>
              <p className="text-orange-100 text-lg">Manage healthcare professionals</p>
            </div>
          </div>
          <div className="hidden lg:block text-right">
            <p className="text-2xl font-bold">{doctors.length}</p>
            <p className="text-orange-100">Total Doctors</p>
          </div>
        </div>
      </div>

      {/* Doctors Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
        {doctors.map((item, index) => (
          <div className='bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2' key={index}>
            
            {/* Doctor Image */}
            <div className='h-48 bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden relative'>
              <img 
                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' 
                src={item.image} 
                alt={item.name} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Availability Badge */}
              <div className="absolute top-4 right-4">
                {item.available ? 
                  <span className='bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1'>
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    ONLINE
                  </span> :
                  <span className='bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1'>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    OFFLINE
                  </span>
                }
              </div>
            </div>

            {/* Doctor Info */}
            <div className='p-6'>
              <div className='mb-4'>
                <h3 className='text-gray-800 text-lg font-bold mb-1'>{item.name}</h3>
                <p className='text-orange-600 text-sm font-semibold mb-2'>{item.speciality}</p>
                <p className='text-gray-500 text-sm'>{item.degree}</p>
              </div>
              
              {/* Experience and Fees */}
              <div className="bg-gray-50 rounded-2xl p-4 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-gray-500">Experience</p>
                    <p className="font-semibold text-gray-800">{item.experience}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500">Fees</p>
                    <p className="font-semibold text-orange-600">₹{item.fees}</p>
                  </div>
                </div>
              </div>
              
              {/* Availability Toggle */}
              <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
                <label htmlFor={`available-${item._id}`} className='flex items-center gap-3 cursor-pointer'>
                  <div className="relative">
                    <input 
                      id={`available-${item._id}`}
                      onChange={() => changeAvailability(item._id)} 
                      type="checkbox" 
                      checked={item.available}
                      className='sr-only'
                    />
                    <div className={`w-12 h-6 rounded-full transition-colors ${item.available ? 'bg-green-500' : 'bg-gray-300'}`}>
                      <div className={`w-5 h-5 bg-white rounded-full shadow-lg transform transition-transform ${item.available ? 'translate-x-6' : 'translate-x-0.5'} mt-0.5`}></div>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">Available</span>
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {doctors.length === 0 && (
        <div className="text-center py-20">
          <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <p className="text-gray-500 font-semibold text-xl mb-2">No doctors found</p>
          <p className="text-gray-400">Add doctors to see them listed here</p>
        </div>
      )}
    </div>
  );
};

export default DoctorsList;