'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import toast from 'react-hot-toast';

const VerifyEmail = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { verifyEmail } = useAuth();

    useEffect(() => {
        console.log("It gets in")
        const token = searchParams.get('token');
        
        if (!token) {
            toast.error('Invalid verification link');
            router.push('/login');
            return;
        }

        const verifyToken = async () => {
            try {
                await verifyEmail(token);
                toast.success('Email verified successfully! Please log in.');
                router.push('/login');
            } catch (error) {
                toast.error('Verification failed. Please try again.');
                router.push('/login');
                console.log(error); // Add this line to log the error to the console
            }
        };

        verifyToken();
    }, [searchParams, router, verifyEmail]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">Verifying your email</h2>
                    <p className="mt-2 text-sm text-gray-600">Please wait while we verify your email address...</p>
                </div>
                <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
                </div>
            </div>
        </div>
  )
}

export default VerifyEmail