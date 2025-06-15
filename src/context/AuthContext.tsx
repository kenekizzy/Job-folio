'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
    role: 'student' | 'company';
    avatar?: string;
    companyName?: string;
    companySize?: string;
    industry?: string;
}

interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    signup: (userData: Omit<User, 'id'>) => Promise<void>;
    logout: () => Promise<void>;
    verifyEmail: (token: string) => Promise<void>;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const storedUser = localStorage.getItem('user');
                if (storedUser) {
                    setUser(JSON.parse(storedUser));
                }
            } catch (error) {
                console.error('Auth check failed:', error);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const verifyEmail = async (token: string) => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call

            return Promise.resolve();
        } catch (error) {
            console.error('Email verification failed:', error);
            throw error;
        }
    };

    const login = async (email: string, password: string) => {
        try {
            const mockUser = {
                id: '1',
                name: 'John Doe',
                email: email,
                role: 'student' as const,
            };
            setUser(mockUser);
            localStorage.setItem('user', JSON.stringify(mockUser));
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };

    const signup = async (userData: Omit<User, 'id'>) => {
        try {
            // In a real app, this would be an API call
            const newUser = {
                ...userData,
                id: Math.random().toString(36).substr(2, 9),
            };
            setUser(newUser);
            // toast.success('Please check your email for verification link');
            localStorage.setItem('user', JSON.stringify(newUser));
        } catch (error) {
            console.error('Signup failed:', error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            setUser(null);
            localStorage.removeItem('user');
        } catch (error) {
            console.error('Logout failed:', error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            login,
            signup,
            logout,
            verifyEmail,
            isAuthenticated: !!user
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};