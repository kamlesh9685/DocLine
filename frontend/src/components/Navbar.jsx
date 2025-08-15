import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import assets from '../assets/assets'; // apne path ke hisab se update karein

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Disable background scroll & swipe when menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
    }
  }, [showMenu]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      {/* Desktop / Mobile Top Bar */}
      <div className="flex items-center justify-between px-6 py-4">
        <assets.logo />
        <button
          className="md:hidden"
          onClick={() => setShowMenu(true)}
        >
          <img
            src={assets.menu_icon}
            alt="Menu"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      {showMenu && (
        <div
          className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 md:hidden`}
          style={{ touchAction: 'none' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-orange-200">
            <assets.logo />
            <button
              onClick={() => setShowMenu(false)}
              className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-orange-100 transition-colors duration-200"
            >
              <img
                className="w-6"
                src={assets.cross_icon}
                alt="Close"
              />
            </button>
          </div>

          {/* Links */}
          <ul className="flex flex-col gap-2 mt-8 px-6 text-lg font-medium">
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/"
              className="block px-6 py-4 rounded-xl hover:bg-orange-100 transition-colors duration-200 text-gray-700"
            >
              🏠 HOME
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/doctors"
              className="block px-6 py-4 rounded-xl hover:bg-orange-100 transition-colors duration-200 text-gray-700"
            >
              👨‍⚕️ ALL DOCTORS
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/about"
              className="block px-6 py-4 rounded-xl hover:bg-orange-100 transition-colors duration-200 text-gray-700"
            >
              ℹ️ ABOUT
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/contact"
              className="block px-6 py-4 rounded-xl hover:bg-orange-100 transition-colors duration-200 text-gray-700"
            >
              📞 CONTACT
            </NavLink>
            <p
              onClick={() => {
                setShowMenu(false);
                window.open('https://docline-admin.onrender.com', '_blank');
              }}
              className="px-6 py-4 rounded-full bg-gradient-to-r from-orange-500 to-teal-500 text-white text-center font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              ADMIN
            </p>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
