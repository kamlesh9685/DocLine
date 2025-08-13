import React, { useContext, useState, useEffect } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const DoctorProfile = () => {
    const { dToken, profileData, setProfileData, getProfileData, backendUrl } = useContext(DoctorContext);
    const { currency } = useContext(AppContext);
    const [isEdit, setIsEdit] = useState(false);

    // --- LOGIC (No changes needed here) ---
    const updateProfile = async () => {
        try {
            const updateData = {
                address: profileData.address,
                fees: profileData.fees,
                available: profileData.available
            };
            const { data } = await axios.post(`${backendUrl}/api/doctor/update-profile`, updateData, { headers: { dToken } });

            if (data.success) {
                toast.success(data.message);
                setIsEdit(false);
                getProfileData();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("An error occurred while updating.");
            console.error(error);
        }
    };

    const handleCancel = () => {
        setIsEdit(false);
        getProfileData(); // Reload original data to discard changes
    };

    useEffect(() => {
        if (dToken) {
            getProfileData();
        }
    }, [dToken]);

    // --- STYLES (For consistency in edit mode) ---
    const inputStyle = "w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary transition";
    const labelStyle = "block text-sm font-medium text-gray-700 mb-1";

    return profileData && (
        <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex flex-col md:flex-row">

                    {/* Left Column: Profile Picture */}
                    <div className="md:w-1/3 p-6 bg-slate-50 flex flex-col items-center justify-center border-r border-gray-100">
                        <img className='rounded-lg shadow-lg object-cover w-48 h-48 md:w-full md:h-auto max-h-96' src={profileData.image} alt={profileData.name} />
                    </div>

                    {/* Right Column: Profile Details */}
                    <div className="md:w-2/3 p-6 sm:p-8 space-y-6">
                        {/* Header: Name, Speciality & Edit Button */}
                        <div className="flex justify-between items-start gap-4">
                            <div>
                                <p className='text-3xl font-bold text-gray-800'>{profileData.name}</p>
                                <p className='text-md text-primary font-semibold mt-1'>{profileData.speciality}</p>
                                <div className='flex items-center flex-wrap gap-2 mt-2 text-gray-500'>
                                    <p>{profileData.degree}</p>
                                    <span className="text-gray-300 max-sm:hidden">|</span>
                                    <p className='border text-xs rounded-full px-2 py-0.5'>{profileData.experience}</p>
                                </div>
                            </div>
                            {!isEdit && (
                                <button onClick={() => setIsEdit(true)} className='flex items-center gap-2 bg-primary/10 text-primary font-semibold px-4 py-2 rounded-lg hover:bg-primary/20 transition-all flex-shrink-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>
                                    Edit
                                </button>
                            )}
                        </div>

                        {/* About Section */}
                        <div>
                            <p className={labelStyle}>About Me</p>
                            <p className='text-sm text-gray-600 leading-relaxed'>{profileData.about}</p>
                        </div>
                        
                        {/* Details Grid: Fees, Address, Availability */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t">
                            <div>
                                <label htmlFor="fees" className={labelStyle}>Appointment Fee ({currency})</label>
                                {isEdit ? (
                                    <input id="fees" type='number' onChange={(e) => setProfileData(prev => ({ ...prev, fees: e.target.value }))} value={profileData.fees} className={inputStyle} />
                                ) : (
                                    <p className="text-lg text-gray-800 font-semibold">{currency} {profileData.fees}</p>
                                )}
                            </div>
                            
                            <div>
                                <label className={labelStyle}>Availability</label>
                                {isEdit ? (
                                    <label htmlFor="availability-toggle" className="inline-flex relative items-center cursor-pointer">
                                        <input type="checkbox" id="availability-toggle" className="sr-only peer" checked={profileData.available} onChange={() => setProfileData(prev => ({ ...prev, available: !prev.available }))} />
                                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-primary/30 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                        <span className="ml-3 text-sm font-medium text-gray-900">{profileData.available ? "Available" : "Not Available"}</span>
                                    </label>
                                ) : (
                                    <p className={`text-lg font-semibold ${profileData.available ? 'text-green-600' : 'text-red-500'}`}>{profileData.available ? "Available" : "Not Available"}</p>
                                )}
                            </div>

                            <div className="sm:col-span-2">
                                <label className={labelStyle}>Clinic Address</label>
                                {isEdit ? (
                                    <div className="space-y-2">
                                        <input type='text' placeholder="Address Line 1" onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={profileData.address.line1} className={inputStyle} />
                                        <input type='text' placeholder="Address Line 2 (City, State)" onChange={(e) => setProfileData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={profileData.address.line2} className={inputStyle} />
                                    </div>
                                ) : (
                                    <p className='text-sm text-gray-600'>{profileData.address.line1}, <br /> {profileData.address.line2}</p>
                                )}
                            </div>
                        </div>

                        {/* Save/Cancel Buttons */}
                        {isEdit && (
                            <div className='flex items-center gap-4 pt-6 border-t'>
                                <button onClick={updateProfile} className='bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-primary/90 transition-all'>Save Changes</button>
                                <button onClick={handleCancel} className='bg-gray-200 text-gray-700 font-bold py-2 px-6 rounded-lg hover:bg-gray-300 transition-all'>Cancel</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;