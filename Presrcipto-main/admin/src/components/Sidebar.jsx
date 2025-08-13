import React, { useContext, useState } from 'react';
import { AdminContext } from '../context/AdminContext';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { DoctorContext } from '../context/DoctorContext';

const Sidebar = () => {
    const { aToken } = useContext(AdminContext);
    const { dToken } = useContext(DoctorContext);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const getNavLinkClass = ({ isActive }) => 
        `flex items-center gap-4 py-4 px-4 mx-2 my-1 rounded-xl cursor-pointer transition-all duration-300 group ${
            isActive 
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transform scale-105' 
                : 'text-gray-600 hover:bg-orange-50 hover:text-orange-600 hover:transform hover:scale-105'
        }`;

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`${isCollapsed ? 'w-20' : 'w-72'} min-h-screen bg-white border-r border-gray-200 shadow-lg transition-all duration-300 relative`}>
            
            {/* Sidebar Header */}
            <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <span className="text-white font-bold text-xl">D</span>
                    </div>
                    {!isCollapsed && (
                        <div className="animate-slideInLeft">
                            <h2 className="text-xl font-bold gradient-text">DocLine</h2>
                            <p className="text-sm text-gray-500">
                                {aToken ? 'Admin Panel' : 'Doctor Panel'}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="absolute -right-3 top-20 w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-colors z-10"
            >
                <svg className={`w-3 h-3 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* Navigation Menu */}
            <nav className='py-6 px-2'>
                {/* Admin Sidebar */}
                {aToken && (
                    <ul className='space-y-2'>
                        <NavLink className={getNavLinkClass} to={'/admin-dashboard'}>
                            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                                <img src={assets.home_icon} alt='Dashboard' className="w-full h-full opacity-70 group-hover:opacity-100" />
                            </div>
                            {!isCollapsed && <span className='font-medium'>Dashboard</span>}
                        </NavLink>
                        
                        <NavLink className={getNavLinkClass} to={'/all-appointments'}>
                            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                                <img src={assets.appointment_icon} alt='Appointments' className="w-full h-full opacity-70 group-hover:opacity-100" />
                            </div>
                            {!isCollapsed && <span className='font-medium'>All Appointments</span>}
                        </NavLink>
                        
                        <NavLink className={getNavLinkClass} to={'/add-doctor'}>
                            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                                <img src={assets.add_icon} alt='Add Doctor' className="w-full h-full opacity-70 group-hover:opacity-100" />
                            </div>
                            {!isCollapsed && <span className='font-medium'>Add Doctor</span>}
                        </NavLink>
                        
                        <NavLink className={getNavLinkClass} to={'/doctor-list'}>
                            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                                <img src={assets.people_icon} alt='Doctors List' className="w-full h-full opacity-70 group-hover:opacity-100" />
                            </div>
                            {!isCollapsed && <span className='font-medium'>Doctors List</span>}
                        </NavLink>
                    </ul>
                )}

                {/* Doctor Sidebar */}
                {dToken && (
                    <ul className='space-y-2'>
                        <NavLink className={getNavLinkClass} to={'/doctor-dashboard'}>
                            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                                <img src={assets.home_icon} alt='Dashboard' className="w-full h-full opacity-70 group-hover:opacity-100" />
                            </div>
                            {!isCollapsed && <span className='font-medium'>Dashboard</span>}
                        </NavLink>
                        
                        <NavLink className={getNavLinkClass} to={'/doctor-appointments'}>
                            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                                <img src={assets.appointment_icon} alt='Appointments' className="w-full h-full opacity-70 group-hover:opacity-100" />
                            </div>
                            {!isCollapsed && <span className='font-medium'>My Appointments</span>}
                        </NavLink>
                        
                        <NavLink className={getNavLinkClass} to={'/doctor-profile'}>
                            <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                                <img src={assets.people_icon} alt='Profile' className="w-full h-full opacity-70 group-hover:opacity-100" />
                            </div>
                            {!isCollapsed && <span className='font-medium'>My Profile</span>}
                        </NavLink>
                    </ul>
                )}
            </nav>

            {/* Quick Stats - Only show when not collapsed */}
            {!isCollapsed && (
                <div className="absolute bottom-6 left-4 right-4">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-2xl border border-orange-200">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-orange-800">Need Help?</h3>
                                <p className="text-xs text-orange-600">24/7 Support Available</p>
                            </div>
                        </div>
                        <button className="w-full text-xs bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 font-medium">
                            Contact Support
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;