'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { FiUser, FiArrowRight, FiMail, FiLock} from 'react-icons/fi';
import { FaGoogle, FaLinkedin } from "react-icons/fa"
import { HiBuildingOffice2 } from 'react-icons/hi2';

const Signup = () => {
    const { signup } = useAuth();
    const router = useRouter();
    const [accountType, setAccountType] = useState('student');
    const [formData, setFormData] = useState({
        fullName: '',
        companyName: '',
        companySize: '',
        industry: '',
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const userData = {
                name: formData.fullName,
                email: formData.email,
                role: accountType as 'student' | 'company',
                ...(accountType === 'company' && {
                    companyName: formData.companyName,
                    companySize: formData.companySize,
                    industry: formData.industry,
                })
            };
            await signup(userData);
            router.push('/dashboard');
        } catch (error) {
            setError('Signup failed. Please try again.');
            console.error('Signup error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen p-6" style={{
            backgroundImage: "url('/assets/image/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className="relative mx-auto max-w-4xl w-full rounded-xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 to-purple-600/30 backdrop-blur-sm"></div>
                
                <div className="relative z-10 p-8">
                    <div className="flex justify-center items-center mb-6">
                        <h1 className="text-3xl font-bold text-white text-center">Create Account</h1>
                    </div>
                    
                    <h2 className="text-xl font-medium text-center text-white mb-8 opacity-90">
                        Join our platform to connect students with industrial training opportunities
                    </h2>

                    {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                    {error}
                </div>
            )}
                    
                    <div className="bg-white/10 p-1 rounded-full flex mb-8 backdrop-blur-sm">
                        <button 
                            className={`flex-1 py-3 px-6 rounded-full flex justify-center items-center space-x-2 transition-all duration-300 ${
                                accountType === 'student' 
                                    ? 'bg-white text-green-600 shadow-lg' 
                                    : 'text-white hover:bg-white/10'
                            }`}
                            onClick={() => setAccountType('student')}
                        >
                            <FiUser size={18} />
                            <span>Student</span>
                        </button>
                        <button 
                            className={`flex-1 py-3 px-6 rounded-full flex justify-center items-center space-x-2 transition-all duration-300 ${
                                accountType === 'company' 
                                    ? 'bg-white text-green-600 shadow-lg' 
                                    : 'text-white hover:bg-white/10'
                            }`}
                            onClick={() => setAccountType('company')}
                        >
                            <HiBuildingOffice2 size={18} />
                            <span>Company</span>
                        </button>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {accountType === 'company' ? (
                            <>
                                <div className="relative">
                                    <HiBuildingOffice2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                    <input 
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        placeholder="Company name"
                                        className="w-full bg-white/10 border border-white/20 rounded-lg p-4 pl-12 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                                        required
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="relative">
                                        <input 
                                            type="text"
                                            name="companySize"
                                            value={formData.companySize}
                                            onChange={handleInputChange}
                                            placeholder="Company size"
                                            className="w-full bg-white/10 border border-white/20 rounded-lg p-4 pl-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                                            required
                                        />
                                    </div>
                                    <div className="relative">
                                        <input 
                                            type="text"
                                            name="industry"
                                            value={formData.industry}
                                            onChange={handleInputChange}
                                            placeholder="Industry"
                                            className="w-full bg-white/10 border border-white/20 rounded-lg p-4 pl-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                                            required
                                        />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="relative">
                                <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input 
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    placeholder="Full name"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg p-4 pl-12 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                                    required
                                />
                            </div>
                        )}
                        
                        <div className="relative">
                            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input 
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email address"
                                className="w-full bg-white/10 border border-white/20 rounded-lg p-4 pl-12 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                                required
                            />
                        </div>
                        
                        <div className="relative">
                            <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input 
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Password"
                                className="w-full bg-white/10 border border-white/20 rounded-lg p-4 pl-12 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                                required
                            />
                        </div>
                        
                        <button 
                            type="submit"
                            disabled={loading}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium p-4 rounded-xl flex justify-center items-center space-x-2 transition transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            <span>{loading ? 'Creating account...' : 'Create Account'}</span>
                            {!loading && <FiArrowRight size={18} />}
                        </button>
                    </form>
                    
                    <div className="text-center mt-8">
                        <p className="text-white/80 mb-6">Or continue with</p>
                        <div className="flex space-x-4 justify-center">
                            <button className="bg-white/10 hover:bg-white/20 p-4 rounded-lg text-white flex items-center gap-3 font-medium text-lg justify-center w-36 backdrop-blur-sm transition">
                                <FaGoogle />
                                <span>Google</span>
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 p-4 rounded-lg text-white flex items-center gap-3 font-medium text-lg justify-center w-36 backdrop-blur-sm transition">
                                <FaLinkedin />
                                <span>LinkedIn</span>
                            </button>
                        </div>
                    </div>
                    
                    <div className="text-center mt-8">
                        <p className="text-white/80">
                            Already have an account? <a href="/login" className="text-green-400 hover:text-green-300 font-medium">Sign in</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup