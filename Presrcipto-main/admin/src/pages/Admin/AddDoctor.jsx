import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {
    const [docImg, setDocImg] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [experience, setExperience] = useState('1 Year');
    const [fees, setFees] = useState('');
    const [about, setAbout] = useState('');
    const [speciality, setSpeciality] = useState('General physician');
    const [degree, setDegree] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { backendUrl, aToken } = useContext(AdminContext);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            if (!docImg) {
                toast.error('Please select an image for the doctor.');
                setIsLoading(false);
                return;
            }

            const formData = new FormData();
            formData.append('image', docImg);
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('experience', experience);
            formData.append('fees', Number(fees));
            formData.append('about', about);
            formData.append('speciality', speciality);
            formData.append('degree', degree);
            formData.append('address', JSON.stringify({ line1: address1, line2: address2 }));

            const { data } = await axios.post(`${backendUrl}/api/admin/add-doctor`, formData, { headers: { aToken } });

            if (data.success) {
                toast.success(data.message);
                // Reset form fields
                setDocImg(false);
                setName('');
                setPassword('');
                setEmail('');
                setAddress1('');
                setAddress2('');
                setDegree('');
                setAbout('');
                setFees('');
                setExperience('1 Year');
                setSpeciality('General physician');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-5xl mx-auto">
                
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 mb-8 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
                    <div className="relative z-10 flex items-center gap-6">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                            <img className="w-8 h-8 filter brightness-0 invert" src={assets.add_icon} alt="Add Doctor" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold mb-2">Add New Doctor</h1>
                            <p className="text-orange-100 text-lg">Register a new healthcare professional</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmitHandler} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
                    
                    {/* Image Upload Section */}
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 border-b border-gray-200">
                        <h3 className="text-xl font-bold text-gray-800 mb-6">Doctor's Profile Picture</h3>
                        <div className="flex items-center gap-8">
                            <label htmlFor="doc-img" className="cursor-pointer group">
                                <div className="relative">
                                    <img 
                                        className="w-32 h-32 rounded-3xl object-cover bg-gray-100 border-4 border-white shadow-lg group-hover:scale-105 transition-transform" 
                                        src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} 
                                        alt="Upload" 
                                    />
                                    <div className="absolute inset-0 bg-black/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </div>
                                </div>
                            </label>
                            <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden required />
                            <div>
                                <p className="text-gray-700 font-semibold mb-2">Upload Doctor's Photo</p>
                                <p className="text-gray-500 text-sm">Click the image area to upload a professional photo</p>
                                <p className="text-gray-400 text-xs mt-1">Recommended: 400x400px, JPG or PNG</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className="p-8 space-y-8">
                        
                        {/* Personal Information */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                Personal Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-3 font-semibold text-gray-700">Doctor Name *</label>
                                    <input 
                                        onChange={(e) => setName(e.target.value)} 
                                        value={name} 
                                        className="form-input" 
                                        type="text" 
                                        placeholder="Dr. John Doe" 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label className="block mb-3 font-semibold text-gray-700">Email Address *</label>
                                    <input 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        value={email} 
                                        className="form-input" 
                                        type="email" 
                                        placeholder="doctor@example.com" 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label className="block mb-3 font-semibold text-gray-700">Password *</label>
                                    <input 
                                        onChange={(e) => setPassword(e.target.value)} 
                                        value={password} 
                                        className="form-input" 
                                        type="password" 
                                        placeholder="••••••••" 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label className="block mb-3 font-semibold text-gray-700">Education / Degree *</label>
                                    <input 
                                        onChange={(e) => setDegree(e.target.value)} 
                                        value={degree} 
                                        className="form-input" 
                                        type="text" 
                                        placeholder="e.g., MBBS, MD" 
                                        required 
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Professional Information */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                Professional Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <label className="block mb-3 font-semibold text-gray-700">Speciality *</label>
                                    <select 
                                        onChange={(e) => setSpeciality(e.target.value)} 
                                        value={speciality} 
                                        className="form-input"
                                    >
                                        <option value="General physician">General physician</option>
                                        <option value="Gynecologist">Gynecologist</option>
                                        <option value="Dermatologist">Dermatologist</option>
                                        <option value="Pediatricians">Pediatricians</option>
                                        <option value="Neurologist">Neurologist</option>
                                        <option value="Gastroenterologist">Gastroenterologist</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-3 font-semibold text-gray-700">Experience *</label>
                                    <select 
                                        onChange={(e) => setExperience(e.target.value)} 
                                        value={experience} 
                                        className="form-input"
                                    >
                                        {[...Array(10)].map((_, i) => <option key={i} value={`${i + 1} Year`}>{`${i + 1} Year`}</option>)}
                                        <option value="More Than 10 Years">More Than 10 Years</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-3 font-semibold text-gray-700">Consultation Fees (₹) *</label>
                                    <input 
                                        onChange={(e) => setFees(e.target.value)} 
                                        value={fees} 
                                        className="form-input" 
                                        type="number" 
                                        placeholder="e.g., 500" 
                                        required 
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Address Information */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                Clinic Address
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block mb-3 font-semibold text-gray-700">Address Line 1 *</label>
                                    <input 
                                        onChange={(e) => setAddress1(e.target.value)} 
                                        value={address1} 
                                        className="form-input" 
                                        type="text" 
                                        placeholder="Street Address" 
                                        required 
                                    />
                                </div>
                                <div>
                                    <label className="block mb-3 font-semibold text-gray-700">Address Line 2 *</label>
                                    <input 
                                        onChange={(e) => setAddress2(e.target.value)} 
                                        value={address2} 
                                        className="form-input" 
                                        type="text" 
                                        placeholder="City, State, Pincode" 
                                        required 
                                    />
                                </div>
                            </div>
                        </div>

                        {/* About Section */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                About Doctor
                            </h3>
                            <textarea 
                                onChange={(e) => setAbout(e.target.value)} 
                                value={about} 
                                className="form-input" 
                                placeholder="Write a brief introduction about the doctor, their expertise, and approach to patient care..." 
                                rows={5} 
                                required 
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6 border-t border-gray-200">
                            <button 
                                type="submit" 
                                disabled={isLoading}
                                className="w-full sm:w-auto btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center gap-3">
                                        <div className="spinner"></div>
                                        Adding Doctor...
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center gap-3">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        Add Doctor to System
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;