import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Navbar = () => {

    const navigate = useNavigate();
    const { token, setToken, userData } = useContext(AppContext)
    const [showMenu, setShowMenu] = useState(false)

    const logout = () => {
        setToken(false)
        localStorage.removeItem('token')
    }

    return (
        <div className='flex items-center justify-between text-sm py-6 mb-8 border-b border-orange-200 bg-gradient-to-r from-orange-50 to-teal-50 backdrop-blur-sm sticky top-0 z-50 shadow-sm'>
            
            {/* Logo */}
            <div onClick={() => navigate('/')} className='cursor-pointer hover:scale-105 transition-transform duration-200'>
                <assets.logo />
            </div>

            {/* Desktop Menu */}
            <ul className='hidden md:flex items-center gap-8 font-medium'>
                <NavLink to='/'><li className='py-2 px-4 rounded-lg hover:bg-orange-100 transition-colors duration-200 text-gray-700 hover:text-orange-600'>HOME</li></NavLink>
                <NavLink to='/doctors'><li className='py-2 px-4 rounded-lg hover:bg-orange-100 transition-colors duration-200 text-gray-700 hover:text-orange-600'>ALL DOCTORS</li></NavLink>
                <NavLink to='/about'><li className='py-2 px-4 rounded-lg hover:bg-orange-100 transition-colors duration-200 text-gray-700 hover:text-orange-600'>ABOUT</li></NavLink>
                <NavLink to='/contact'><li className='py-2 px-4 rounded-lg hover:bg-orange-100 transition-colors duration-200 text-gray-700 hover:text-orange-600'>CONTACT</li></NavLink>

                {/* Admin Button */}
                <div className='relative'>
                    <button 
                        onClick={() => window.open('http://localhost:1574', '_blank')} 
                        className='py-2 px-5 rounded-full bg-gradient-to-r from-orange-500 to-teal-500 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-200'
                    >
                        ADMIN
                    </button>
                </div>
            </ul>

            {/* Right side */}
            <div className='flex items-center gap-4'>
                {token && userData ? (
                    <div className='flex items-center gap-3 cursor-pointer group relative'>
                        <div className="flex items-center gap-2 bg-orange-50 rounded-full px-3 py-2 hover:bg-orange-100 transition-colors duration-200">
                            <img className='w-8 h-8 rounded-full object-cover border-2 border-orange-400' src={userData.image} alt=''/>
                            <span className="text-gray-700 font-medium hidden sm:block">{userData.name?.split(' ')[0]}</span>
                            <img className='w-3' src={assets.dropdown_icon} alt='' />
                        </div>
                        <div className='absolute top-0 right-0 pt-16 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-52 bg-white rounded-xl shadow-xl border border-orange-100 flex flex-col overflow-hidden'>
                                <p onClick={()=>navigate('my-profile')} className='hover:bg-orange-50 cursor-pointer px-6 py-3 transition-colors duration-200 border-b border-orange-100'>👤 My Profile</p>
                                <p onClick={()=>navigate('my-appointments')} className='hover:bg-orange-50 cursor-pointer px-6 py-3 transition-colors duration-200 border-b border-orange-100'>📅 My Appointments</p>
                                <p onClick={logout} className='hover:bg-red-50 hover:text-red-600 cursor-pointer px-6 py-3 transition-colors duration-200'>🚪 Logout</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button onClick={() => navigate('/login')} className='bg-gradient-to-r from-orange-500 to-teal-500 text-white px-8 py-3 rounded-full font-medium hidden md:block hover:shadow-lg hover:scale-105 transition-all duration-200'>Create account</button>
                )}

                {/* Mobile Menu Button */}
                <button onClick={()=>setShowMenu(true)} className='w-10 h-10 md:hidden flex items-center justify-center rounded-lg hover:bg-orange-100 transition-colors duration-200'>
                    <img className='w-6' src={assets.menu_icon} alt='' />
                </button>

                {/* Mobile Menu */}
                <div className={` ${showMenu ?'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-50 overflow-hidden bg-white/95 backdrop-blur-md transition-all duration-300`}>
                    <div className='flex items-center justify-between px-6 py-6 border-b border-orange-200'>
                        <assets.logo />
                        <button onClick={()=>setShowMenu(false)} className='w-10 h-10 flex items-center justify-center rounded-lg hover:bg-orange-100 transition-colors duration-200'>
                            <img className='w-6' src={assets.cross_icon} alt="" />
                        </button>
                    </div>
                    <ul className='flex flex-col gap-2 mt-8 px-6 text-lg font-medium'>
                        <NavLink onClick={()=>setShowMenu(false)} to='/'><p className='px-6 py-4 rounded-xl hover:bg-orange-100 transition-colors duration-200 text-gray-700'>🏠 HOME</p></NavLink>
                        <NavLink onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-6 py-4 rounded-xl hover:bg-orange-100 transition-colors duration-200 text-gray-700'>👨‍⚕️ ALL DOCTORS</p></NavLink>
                        <NavLink onClick={()=>setShowMenu(false)} to='/about'><p className='px-6 py-4 rounded-xl hover:bg-orange-100 transition-colors duration-200 text-gray-700'>ℹ️ ABOUT</p></NavLink>
                        <NavLink onClick={()=>setShowMenu(false)} to='/contact'><p className='px-6 py-4 rounded-xl hover:bg-orange-100 transition-colors duration-200 text-gray-700'>📞 CONTACT</p></NavLink>
                        {/* Mobile Admin Button */}
                        <NavLink onClick={()=>setShowMenu(false)} to='#'>
                            <p 
                                onClick={() => window.open('http://localhost:1574', '_blank')}
                                className='px-6 py-4 rounded-full bg-gradient-to-r from-orange-500 to-teal-500 text-white text-center font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer'
                            >
                                ADMIN
                            </p>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
