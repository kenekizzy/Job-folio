'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { FiMail, FiLock, FiArrowRight } from 'react-icons/fi';
import { FaGoogle, FaLinkedin } from "react-icons/fa";

const Login = () => {
    const { login } = useAuth();
    const router = useRouter();
    const [formData, setFormData] = useState({
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
            await login(formData.email, formData.password);
            router.push('/dashboard');
        } catch (error) {
            setError('Invalid email or password');
            console.error('Login error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen p-6" style={{
            backgroundImage: "url('/assets/image/background-image.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <div className="relative mx-auto max-w-4xl w-full rounded-xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm"></div>
                
                <div className="relative z-10 p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-white mb-4">Welcome Back</h1>
                        <p className="text-white/80">Sign in to continue to your account</p>
                    </div>

                    {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                    {error}
                </div>
            )}
                    
                    <form onSubmit={handleSubmit} className="space-y-5">
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

                        <div className="flex justify-end">
                            <a href="/forgot-password" className="text-blue-400 hover:text-blue-300 text-sm">
                                Forgot password?
                            </a>
                        </div>
                        
                        <button 
                            type="submit"
                            disabled={loading}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium p-4 rounded-lg flex justify-center items-center space-x-2 transition transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            <span>{loading ? 'Signing in...' : 'Sign In'}</span>
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
                            Don&apos;t have an account? <a href="/signup" className="text-green-400 hover:text-green-300 font-medium">Sign up</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;