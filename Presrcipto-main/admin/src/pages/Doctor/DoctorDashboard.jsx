import React, { useContext, useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const DoctorDashboard = () => {
  const { dToken, dashData, getDashData, cancelAppointment, completeAppointment } = useContext(DoctorContext);
  const { currency, slotDateFormat } = useContext(AppContext);

  useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken]);

  return (
    dashData && (
      <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
        
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold mb-3">Welcome to DocLine Doctor</h1>
                <p className="text-orange-100 text-lg font-medium">Manage your patients and appointments</p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Online</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium">{new Date().toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="dashboard-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-4xl font-bold text-gray-800 mb-2">{currency} {dashData.earnings.toLocaleString('en-IN')}</p>
                <p className="text-gray-600 font-semibold text-lg">Total Earnings</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-sm text-green-600 font-medium">Revenue generated</span>
                  </div>
                </div>
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <img className="w-10 h-10 filter brightness-0 invert" src={assets.earning_icon} alt="Earnings"/>
              </div>
            </div>
          </div>
          
          <div className="dashboard-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-4xl font-bold text-gray-800 mb-2">{dashData.appointments}</p>
                <p className="text-gray-600 font-semibold text-lg">Total Appointments</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-sm text-orange-600 font-medium">Patient consultations</span>
                  </div>
                </div>
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <img className="w-10 h-10 filter brightness-0 invert" src={assets.appointments_icon} alt="Appointments"/>
              </div>
            </div>
          </div>
          
          <div className="dashboard-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-4xl font-bold text-gray-800 mb-2">{dashData.patients}</p>
                <p className="text-gray-600 font-semibold text-lg">Total Patients</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-sm text-teal-600 font-medium">Under your care</span>
                  </div>
                </div>
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                <img className="w-10 h-10 filter brightness-0 invert" src={assets.patients_icon} alt="Patients"/>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Appointments */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <img className="w-7 h-7 filter brightness-0 invert" src={assets.list_icon} alt="Recent" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Recent Appointments</h2>
                  <p className="text-gray-600 font-medium">Latest patient consultations</p>
                </div>
              </div>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                View All →
              </button>
            </div>
          </div>
          
          <div className="p-8">
            {dashData.latestAppointments && dashData.latestAppointments.length > 0 ? (
              <div className="space-y-6">
                {dashData.latestAppointments.map((item) => (
                  <div key={item._id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl hover:from-orange-50 hover:to-orange-100 transition-all duration-300 border border-gray-200 hover:border-orange-200 group">
                    
                    {/* Patient Info */}
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <img className="w-16 h-16 rounded-2xl object-cover border-3 border-white shadow-lg group-hover:scale-105 transition-transform" src={item.userData.image} alt={item.userData.name}/>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-lg">{item.userData.name}</p>
                        <p className="text-gray-600 font-medium">{slotDateFormat(item.slotDate)} at {item.slotTime}</p>
                        <p className="text-sm text-gray-500 mt-1">Patient ID: #{item.userData._id.slice(-6)}</p>
                      </div>
                    </div>

                    {/* Status Badge & Action Buttons */}
                    <div className="flex items-center gap-4 self-end sm:self-center">
                      {
                        item.cancelled
                          ? <span className='status-cancelled'>Cancelled</span>
                          : item.isCompleted
                            ? <span className='status-completed'>Completed</span>
                            : <div className='flex items-center gap-3'>
                                <span className='status-pending'>Pending</span>
                                <div className="flex items-center gap-2">
                                  <button onClick={() => cancelAppointment(item._id)} title="Cancel Appointment" className='p-3 rounded-xl hover:bg-red-100 transition-colors group'>
                                    <img className='w-6 h-6 group-hover:scale-110 transition-transform' src={assets.cancel_icon} alt="Cancel" />
                                  </button>
                                  <button onClick={() => completeAppointment(item._id)} title="Mark as Complete" className='p-3 rounded-xl hover:bg-green-100 transition-colors group'>
                                    <img className='w-6 h-6 group-hover:scale-110 transition-transform' src={assets.tick_icon} alt="Complete"/>
                                  </button>
                                </div>
                              </div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <p className="text-gray-500 font-semibold text-xl mb-2">No recent appointments</p>
                <p className="text-gray-400">Your upcoming appointments will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default DoctorDashboard;