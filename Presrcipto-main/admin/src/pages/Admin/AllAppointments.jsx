import React, { useContext, useEffect } from 'react';
import { AdminContext } from '../../context/AdminContext';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';

const AllAppointments = () => {
    const { aToken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext);
    const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

    useEffect(() => {
        if (aToken) {
            getAllAppointments();
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
                            <img className="w-8 h-8 filter brightness-0 invert" src={assets.appointment_icon} alt="Appointments" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold mb-2">All Appointments</h1>
                            <p className="text-orange-100 text-lg">Manage all patient appointments efficiently</p>
                        </div>
                    </div>
                    <div className="hidden lg:block text-right">
                        <p className="text-2xl font-bold">{appointments.length}</p>
                        <p className="text-orange-100">Total Appointments</p>
                    </div>
                </div>
            </div>

            {/* Appointments Table */}
            <div className='bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden'>
                {/* Desktop Table Header */}
                <div className='hidden lg:grid grid-cols-7 gap-4 py-6 px-8 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100'>
                    <p className="text-center font-bold text-gray-700">#</p>
                    <p className="font-bold text-gray-700">Patient</p>
                    <p className="text-center font-bold text-gray-700">Age</p>
                    <p className="font-bold text-gray-700">Date & Time</p>
                    <p className="font-bold text-gray-700">Doctor</p>
                    <p className="text-center font-bold text-gray-700">Fees</p>
                    <p className="text-center font-bold text-gray-700">Status</p>
                </div>

                {/* Appointments List */}
                <div className="divide-y divide-gray-100">
                    {appointments.length > 0 ? appointments.map((item, index) => (
                        <div key={item._id} className='lg:grid lg:grid-cols-7 lg:gap-4 lg:items-center p-8 table-row'>
                            
                            {/* Mobile Card Layout */}
                            <div className="lg:hidden space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <img className='w-16 h-16 rounded-2xl object-cover border-3 border-gray-200 shadow-lg' src={item.userData.image} alt={item.userData.name} />
                                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-800 text-lg">{item.userData.name}</p>
                                            <p className="text-gray-500 font-medium">Age: {calculateAge(item.userData.dob)}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-2xl font-bold text-orange-600">{currency}{item.amount}</span>
                                    </div>
                                </div>
                                
                                <div className="bg-gray-50 rounded-2xl p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <p className="font-semibold text-gray-700">{slotDateFormat(item.slotDate)}</p>
                                            <p className="text-gray-500">{item.slotTime}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold text-gray-700">Dr. {item.docData.name}</p>
                                            <p className="text-sm text-gray-500">{item.docData.speciality}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex justify-end">
                                    {item.cancelled ? (
                                        <span className='status-cancelled'>
                                            Cancelled
                                        </span>
                                    ) : item.isCompleted ? (
                                        <span className='status-completed'>
                                            Completed
                                        </span>
                                    ) : (
                                        <button 
                                            onClick={() => cancelAppointment(item._id)}
                                            className="bg-red-100 text-red-700 px-6 py-3 rounded-xl hover:bg-red-200 transition-colors font-semibold"
                                        >
                                            Cancel Appointment
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Desktop Grid Layout */}
                            <p className='hidden lg:block text-center text-gray-600 font-bold text-lg'>{index + 1}</p>
                            
                            <div className='hidden lg:flex items-center gap-4'>
                                <div className="relative">
                                    <img className='w-14 h-14 rounded-2xl object-cover border-3 border-gray-200 shadow-lg' src={item.userData.image} alt={item.userData.name} />
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800">{item.userData.name}</p>
                                    <p className="text-sm text-gray-500">Patient ID: #{item.userData._id.slice(-6)}</p>
                                </div>
                            </div>
                            
                            <p className='hidden lg:block text-center text-gray-600 font-semibold text-lg'>{calculateAge(item.userData.dob)}</p>
                            
                            <div className="hidden lg:block">
                                <p className="font-semibold text-gray-800">{slotDateFormat(item.slotDate)}</p>
                                <p className="text-gray-500 font-medium">{item.slotTime}</p>
                            </div>
                            
                            <div className='hidden lg:flex items-center gap-4'>
                                <img className='w-14 h-14 rounded-2xl object-cover border-3 border-gray-200 shadow-lg' src={item.docData.image} alt={item.docData.name}/>
                                <div>
                                    <p className="font-bold text-gray-800">Dr. {item.docData.name}</p>
                                    <p className="text-sm text-gray-500">{item.docData.speciality}</p>
                                </div>
                            </div>
                            
                            <p className='hidden lg:block text-center font-bold text-orange-600 text-xl'>{currency}{item.amount}</p>
                            
                            <div className="hidden lg:flex justify-center">
                                {item.cancelled ? (
                                    <span className='status-cancelled'>
                                        Cancelled
                                    </span>
                                ) : item.isCompleted ? (
                                    <span className='status-completed'>
                                        Completed
                                    </span>
                                ) : (
                                    <button 
                                        onClick={() => cancelAppointment(item._id)}
                                        className="bg-red-100 text-red-700 px-4 py-2 rounded-xl hover:bg-red-200 transition-colors font-semibold"
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </div>
                    )) : (
                        <div className="text-center py-20">
                            <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <p className="text-gray-500 font-semibold text-xl mb-2">No appointments found</p>
                            <p className="text-gray-400">Appointments will appear here when patients book</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllAppointments;