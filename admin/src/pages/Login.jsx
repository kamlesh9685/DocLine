import React, { useContext, useState } from 'react';
import { AdminContext } from '../context/AdminContext';
import { DoctorContext } from '../context/DoctorContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { setAToken, backendUrl } = useContext(AdminContext);
  const { setDToken } = useContext(DoctorContext);

  const onLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    
    const url = state === 'Admin' 
      ? `${backendUrl}/api/admin/login` 
      : `${backendUrl}/api/doctor/login`;

    try {
      const { data } = await axios.post(url, { email, password });

      if (data.success) {
        if (state === 'Admin') {
          localStorage.setItem('aToken', data.token);
          setAToken(data.token);
        } else {
          localStorage.setItem('dToken', data.token);
          setDToken(data.token);
        }
        toast.success(`Welcome to DocLine ${state} Panel!`);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center px-4 relative overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full opacity-10 animate-pulse-slow"></div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl w-full max-w-md border border-white/20 relative z-10 animate-fadeInUp">
        
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl animate-pulse-slow">
            <span className="text-white font-bold text-3xl">D</span>
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-2">
            DocLine
          </h1>
          <p className="text-gray-600 font-medium">
            {state} Portal - Healthcare Management
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto mt-3"></div>
        </div>

        {/* Login Type Toggle */}
        <div className="flex bg-gray-100/80 backdrop-blur-sm rounded-2xl p-1 mb-8 shadow-inner">
          <button
            type="button"
            onClick={() => setState('Admin')}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
              state === 'Admin'
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transform scale-105'
                : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Admin Login
            </div>
          </button>
          <button
            type="button"
            onClick={() => setState('Doctor')}
            className={`flex-1 py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
              state === 'Doctor'
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg transform scale-105'
                : 'text-gray-600 hover:text-gray-800 hover:bg-white/50'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Doctor Login
            </div>
          </button>
        </div>
        
        <form onSubmit={onLogin} className="space-y-6">
          <div>
            <label className="block mb-3 font-semibold text-gray-700">Email Address</label>
            <div className="relative">
              <input
                type="email"
                className="form-input pl-12 h-14 text-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={isLoading}
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block mb-3 font-semibold text-gray-700">Password</label>
            <div className="relative">
              <input
                type="password"
                className="form-input pl-12 h-14 text-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                disabled={isLoading}
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-3">
                <div className="spinner"></div>
                Signing In...
              </div>
            ) : (
              <div className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Sign In to {state} Panel
              </div>
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-2">
            Secure healthcare management system
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
            <span>🔒 SSL Secured</span>
            <span>•</span>
            <span>24/7 Support</span>
            <span>•</span>
            <span>HIPAA Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;