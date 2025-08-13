import React, { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes, Navigate } from 'react-router-dom';

// Import Contexts and Components
import { AdminContext } from './context/AdminContext';
import { DoctorContext } from './context/DoctorContext';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

// Import Admin Pages
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList';

// Import Doctor Pages
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import DoctorAppointments from './pages/Doctor/DoctorAppointments';
import DoctorProfile from './pages/Doctor/DoctorProfile';

const App = () => {
    const { aToken } = useContext(AdminContext);
    const { dToken } = useContext(DoctorContext);

    // Determine the default route when logged in
    const defaultRoute = aToken ? "/admin-dashboard" : "/doctor-dashboard";

    return (
        <>
            <ToastContainer autoClose={3000} position="top-center" hideProgressBar={true} />
            {aToken || dToken ? (
                // This is the main layout for the logged-in user
                <div className='flex h-screen bg-gray-50'>
                    <Sidebar />
                    <div className='flex-1 flex flex-col'>
                        <Navbar />
                        {/* The main content area is now scrollable */}
                        <main className='flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto'>
                            <Routes>
                                {/* Default route redirects to the appropriate dashboard */}
                                <Route path='/' element={<Navigate to={defaultRoute} replace />} />

                                {/* Admin Routes */}
                                <Route path='/admin-dashboard' element={<Dashboard />} />
                                <Route path='/all-appointments' element={<AllAppointments />} />
                                <Route path='/add-doctor' element={<AddDoctor />} />
                                <Route path='/doctor-list' element={<DoctorsList />} />

                                {/* Doctor Routes */}
                                <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
                                <Route path='/doctor-appointments' element={<DoctorAppointments />} />
                                <Route path='/doctor-profile' element={<DoctorProfile />} />
                            </Routes>
                        </main>
                    </div>
                </div>
            ) : (
                // If not logged in, show the Login page
                <Login />
            )}
        </>
    );
};

export default App;